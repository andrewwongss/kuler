<template>
    <button type="button" class="btn btn-primary" @click= "checkEntry">Sell</button>

</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";
export default {
    data() {
        return {
            user: false
        }
    },

    mounted() {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user
            }
        })
    },

    methods: {
        checkEntry() {
            if (this.user) {
                this.$router.push({name: "Sell"})
            } else {
                alert("You need to be signed in to list items.")
                this.$router.push({name: "Login"})
                //this.$router.push({name: "Frequently Asked Questions"}) // edit!!
            }
        } 
    }
}
</script>

<style scoped>
    .btn-primary {
    background-color: #F37381;
    border: None;
    /* margin: 1em; */
    border-radius: 3vh;
    padding: 0.5em 1em 0.5em 1em;
    width: 6vw;
    height: 6vh;
}

.btn-primary:hover {
    background-color: #dd6b79;
}

.btn-primary:active, .btn-primary:focus, .btn-primary:visited {
    background-color: #F37381;
}
</style>