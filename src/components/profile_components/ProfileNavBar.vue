
<template>
    <div id="nav">
    <ul>
            <li @click = "directToListings" style= "cursor:pointer;" class="list">Listings</li>
            <li @click = "directToReviews" style = "cursor: pointer;" class="list">Reviews</li>
            <li @click = "directToFavs" style = "cursor:pointer;" class="list">Favourites</li> 
            <img v-if="!isVisible" class="smallIcon" src="@/assets/hidden_from_view.png" alt="Hidden from view">
            <li @click = "directToHistory" style="cursor: pointer;" class="list">Purchase History</li> 
            <img v-if="!isVisible" class="smallIcon" src="@/assets/hidden_from_view.png" alt="Hidden from view">
        </ul>
  </div>

</template>

<script>
export default {
    props: {
        isVisible: Boolean,
        profileID: String
    },

    mounted() {

    },

    methods: {
        directToHistory() {
            if (this.isVisible == true) {
                const profileID = this.profileID
                this.$router.push({name: "Purchase History", params: {id: profileID}})
            } else {
                alert("You cannot access another user's purchase history!")
            }
        },
        directToFavs() {
            if (this.isVisible == true) {
                const profileID = this.profileID
                this.$router.push({name: "Your Favourites", params: {id: profileID}})
            } else {
                alert("You cannot access another user's favourites!")
            }
        },

        directToReviews() {
            const profileID = this.profileID
            this.$router.push({name: "Profile Reviews", params: {id: profileID}})
            
        },

        directToListings() {
            const profileID = this.profileID
            this.$router.push({name: "Profile", params: {id: profileID}})
            
        },
    }
}
</script>

<style scoped>
.smallIcon {
    
}
    /* Nav Links*/
a {
    -moz-transition: color 0.2s ease, border-bottom 0.2s ease;
    -webkit-transition: color 0.2s ease, border-bottom 0.2s ease;
    -ms-transition: color 0.2s ease, border-bottom 0.2s ease;
    transition: color 0.2s ease, border-bottom 0.2s ease;
    text-decoration: none;
    /* border-bottom: dotted 1px; */
    color: inherit;
}

a:hover {
    border-bottom-color: transparent;
}

/* Nav */

#nav {
    -moz-transition: background-color 0.2s ease, border-top-left-radius 0.2s ease, border-top-right-radius 0.2s ease, padding 0.2s ease;
    -webkit-transition: background-color 0.2s ease, border-top-left-radius 0.2s ease, border-top-right-radius 0.2s ease, padding 0.2s ease;
    -ms-transition: background-color 0.2s ease, border-top-left-radius 0.2s ease, border-top-right-radius 0.2s ease, padding 0.2s ease;
    transition: background-color 0.2s ease, border-top-left-radius 0.2s ease, border-top-right-radius 0.2s ease, padding 0.2s ease;
    background-color: #ffffff;
    color: #636363;
    position: relative;
    width: 100%;
    max-width: 100%;
    padding: 1em 0em 1em 0em;
    /* background-color: #f7f7f7; */
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    cursor: default;
    text-align: center;
}

#nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#nav ul li {
    -moz-transition: margin 0.2s ease;
    -webkit-transition: margin 0.2s ease;
    -ms-transition: margin 0.2s ease;
    transition: margin 0.2s ease;
    display: inline-block;
    margin: 0 0 0 1em;
    padding: 0 1% 0 1%;
    vertical-align: middle;
}

#nav ul li a {
    -moz-transition: font-size 0.2s ease;
    -webkit-transition: font-size 0.2s ease;
    -ms-transition: font-size 0.2s ease;
    transition: font-size 0.2s ease;
    display: inline-block;
    height: 2.25em;
    line-height: 2.25em;
    padding: 0 1.25em 0 1.25em;
    border: 0;
    border-radius: 8px;
    box-shadow: inset 0 0 0 1px transparent;
}

#nav ul li a:hover {
    background-color: rgba(222, 222, 222, 0.2);
    color: #F37381;
}

#nav ul li a.router-link-exact-active {
    background-color: #ffffff;
    /* background-color: rgba(222, 222, 222, 0.25); */
    box-shadow: none;
}

.list{
    -moz-transition: font-size 0.2s ease;
    -webkit-transition: font-size 0.2s ease;
    -ms-transition: font-size 0.2s ease;
    transition: font-size 0.2s ease;
    display: inline-block;
    height: 2.25em;
    line-height: 2.25em;
    padding: 0 1.25em 0 1.25em;
    border: 0;
    border-radius: 8px;
    box-shadow: inset 0 0 0 1px transparent;
    padding-left:0.5%;
    padding-right:0.5%;
    margin-left:1%;
    margin-right:1%;

}

.list:hover{
    background-color: rgba(222, 222, 222, 0.2);
    color: #F37381;

}

/* .list.router-link-exact-active {
    background-color: #ffffff;
    /* background-color: rgba(222, 222, 222, 0.25); 
    box-shadow: none;
} */



</style>