//首页
<template>
  <div>
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/轮播1.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/轮播2.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/轮播3.jpeg" alt="">
      </swiper-slide>
      <div class="swiper-pagination pagination-home" style="text-align:right" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
        <i class="sprite sprite-news"></i>
        <div class="py-2">爆料站</div>
      </div>
      </div>
      <div class="bg-light pt-2 fs-sm  ai-center">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of icn -->
    
  </div>
</template>

<script>
import Swiper2,{Navigation,Pagination} from 'swiper'
Swiper2.use([Navigation,Pagination])
export default {
  data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.pagination-home',
          },
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';

.pagination-home{
  .swiper-pagination-bullet{
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors , "white");
    &.swiper-pagination-bullet-active{
      background: map-get($colors , "info");
    }
  }
}

.nav-icons{
  .nav-item{
    width:25%; 
    border-right: 1px solid $border-color; 
    &:nth-child(4n){
      border-right: none;
    }
  }
}
</style>