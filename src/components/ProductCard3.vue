<template>
<div class="card" style="width:16vw" @click="directToProduct">
  <a href="#" class="productImg" height="18vw">
      <img class="card-img-top" :src="coverPicture" alt="We apologize for the bug. Life is nothing without a few challenges">
    </a>
  <div class="card-body">
    <a href="#" class="productLink"><h4 class="card-title">{{this.productTitle}}</h4></a>
    <a href="#" class="sellerLink"><h5 class="seller-name">{{this.sellerName}}</h5></a>
    <div id="rating">
      <b><u> {{this.averageRating}} </u></b>
    <StarRatingContinuous :rating="averageRating"/>
    
    </div>
    <h4 class="card-title">SGD {{this.price}}</h4>
    <div id = "history" v-if="this.quantity">
     Quantity Purchased: <b><u> {{this.quantity}} </u></b>
     <br>
     Date of Purchase: 
     <br><b><u>{{this.timestamp}}</u></b>
    </div>
    <div id = "numberOfPurchases" v-if="this.numberOfPurchases">
        Number of Purchases: {{this.numberOfPurchases}}
    </div>
  </div>
</div>
</template>

<script>
import StarRatingContinuous from '@/components/xh_components/StarRatingContinuous.vue'
import firebaseApp from "@/firebase.js";
import {
  getFirestore,
  getDoc,
  doc,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
    name: 'ProductCard3',
  components:{
    StarRatingContinuous
  },
  data() {
      return {
        coverPicture: "@/assets/sample7.jpg",
        averageRating: 0,
        totalRating: 0
      }
  },
  props: {
      productTitle: String,
      sellerName: String,
      price: Number,
      coverImage: String,
      productNumber: String,
      quantity: Number,
      timestamp: String,
      numberOfPurchases: Number
  },
  methods:{
      async directToProduct() {
          const productNum = this.productNumber
          await this.$router.push({name: "Product Page", params: {id: productNum}})
          this.$router.go(0)
      },
      async updatePictures() { // i assume that productID is given, i put a hypothethical value of 3
      this.coverPicture = this.coverImage
    },
    async updateRating() {
        const productRatingRef = await getDoc(doc(db, "productratings", this.productNumber))
        const productRatingData = productRatingRef.data()
        const productRatingArray = productRatingData.num_stars
        productRatingArray.forEach(rating => this.totalRating += rating)
        if (productRatingData.reviews != 0) {
            this.averageRating = Number((this.totalRating / productRatingData.reviews).toFixed(2))
        }
    }
  },
  mounted() {
      this.updatePictures();
      this.updateRating();

      //console.log(this.coverPicture)
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
.card {
margin-top: 1em;
cursor: pointer;
}
#rating {
    text-align: left;
    margin-left: 0px;
    margin-right: auto;
    margin-bottom: 0.5em;
    display: flex;
    font-size: 80%
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
#history {
    font-size: 80%
}
img{
    max-width: 100%;
    height: 16vw;
    object-fit: cover;
}
</style>