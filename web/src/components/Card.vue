<template>
  <div class="card bg-white p-3 mt-3">
      <div class="card-header d-flex ai-center">
         <i class="iconfont" :class="`icon-${icon}`"></i>
         <div class="fs-xl px-2 flex-1">{{title}}</div>
         <i class="iconfont icon-menu"></i>
      </div>
      <div class="card-body pt-3">
          <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
    props:{
       title:{type:String,required:true},
       icon:{type:String,required:true}, 
    }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';
    .card-header{
        border-bottom:1px solid $border-color;
    }
</style>