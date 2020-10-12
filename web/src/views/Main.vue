<template>
    <div>
        <div class="top-bar bg-black py-2  px-3 d-flex ai-center">
            <img src="../assets/wzry.png" height="30">
            <div class="px-2 flex-1">
                 <div class="text-white">王者荣耀</div>
                 <div class="text-grey-1 fs-xxs">团队成就更多</div>
            </div>
            <button class="btn bg-primary" type="button">立即下载</button>
        </div>
        <div class="bg-primary py-2">
           <div class="nav">
               <div class="nav-item">
                   <router-link class="nav-link" tag="div" to="/">首页</router-link>
               </div>
           </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>