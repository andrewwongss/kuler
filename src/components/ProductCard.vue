<template>
<div class="card" style="width: 18rem;">
  <a href="#" class="productImg"><img class="card-img-top" src="@/assets/sample2.jpg"></a>
  <div class="card-body">
    <a href="#" class="productLink"><h4 class="card-title">Product Title</h4></a>
    <a href="#" class="sellerLink"><h5 class="seller-name">Seller Name</h5></a>
    <div id="rating">
    <StarRating/>
    </div>
    <h4 class="card-title">SGD 0.00</h4>
  </div>
</div>
</template>

<script>
import StarRating from '@/components/StarRating.vue'

export default {
    name: 'ProductCard',
  components:{
    StarRating
  },
  methods:{
   
  }


}
</script>

<style scoped>
a {
    text-decoration: none;
}
.productImg:hover, .productLink:hover, .sellerLink:hover{
    opacity: 0.8;
    transition: 0.5s ease;

}
.productLink{
    color:rgb(0, 0, 0)
}
.sellerLink{
    color:#3A3D3B
}
#rating {
    text-align: left;
    margin-left: 0px;
    margin-right: auto;
    margin-bottom: 0.5em;

}
    .card-title{
        text-align: left;
        font-size: 90%;
        font-weight: bold;
    }
    .seller-name{
        color: #3A3D3B;
        text-align: left;
        font-size: 60%;
        font-weight: bold;
    }

</style>