const AdminUser = require('../../models/AdminUser');

module.exports = app =>{
    const express = require('express');
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    var router = express.Router({
        mergeParams:true
    });
   
    //通用CRUD接口 增删改查
    router.post('/',async(req,res)=>{
     const model =  await req.Model.create(req.body)
     res.send(model)
    })

    router.put('/:id',async(req,res)=>{
        await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send({
            success:true
        })
    })

    router.delete('/:id',async(req,res)=>{
        const model =  await req.Model.findByIdAndDelete(req.params.id,req.body)
        res.send(model)
    })
    //分类列表
    router.get('/', async(req,res)=>{
        let queryOptions = {}
        if(req.Model.modelName === 'Category'){
            queryOptions.populate = 'parent'
        }
        const items =  await req.Model.find().setOptions(queryOptions).limit(10)
        res.send(items)
    })
    
    router.get('/:id',async(req,res)=>{
        const model =  await req.Model.findById(req.params.id)
        res.send(model)
    })
    //登录校验中间件
    const authMiddleware = require('../../middleware/auth')
    //自动寻找上传路径中间件
    const resourceMiddleware = require('../../middleware/resource')

    app.use('/admin/api/rest/:resource',authMiddleware(),resourceMiddleware(),router)

    //上传
    const multer = require('multer')
    const upload = multer({dest:__dirname+'/../../uploads'})
    app.post('/admin/api/upload',authMiddleware(),upload.single('file'),async(req,res)=>{
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    //登录
    app.post('/admin/api/login',async(req,res)=>{
        const { username,password } = req.body
        //根据用户名找用户
        const user = await AdminUser.findOne({username}).select('+password') //注意password的select状态默认为false,这里表示查找时加上password
        if(!user){
            return res.status(422).send({
                message:"用户不存在"
            })
        }
        //校验密码
        const isValid =  require('bcrypt').compareSync(password,user.password)
        if(!isValid){
            return res.status(422).send({
                message:"密码错误"
            })
        }
        //返回token
        const token = jwt.sign({id:user._id},app.get('secret'))
        res.send({token})
    })
}