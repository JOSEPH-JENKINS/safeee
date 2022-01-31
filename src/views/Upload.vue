<template>
    <div class="main">
        <div class="main-con">
            <form enctype="multipart/form-data" @submit="handleUpload">
                <div class="field">
                    <input type="text" v-model="name" placeholder="Name of Project">
                </div>
                <div class="field">
                    <input type="url" v-model="link" name="link" placeholder="Discord / Twitter Link to the project">
                </div>
                <div class="field">
                    <textarea name="description" v-model="description" cols="30" rows="10" placeholder="Write a description" maxlength="250"></textarea>
                </div>
                <div class="field">
                    <input type="file" name="file" accept="image/jpeg, image/png" @change="setImage">
                </div><br>
                <button type="submit">send</button>
            </form>
        </div>
    </div>
</template>

<script>
import { database, storage as store } from "../db/index";
import { collection, setDoc, doc } from "firebase/firestore";
const imgbbUpload = require("imgbb-uploader");
const encoder = require("base64-arraybuffer");

export default {
    name: 'Upload',
    data: function () {
        return {
            name: '',
            link: '',
            description: '',
            image: null,
            base64: null,
        }
    },
    methods: {
        handleUpload: function (e) {
            e.preventDefault();
            this.image
                .stream()
                .getReader()
                .read()
                .then(res => { 
                    const base64str = this.arrayToBase64(res.value);
                    const options = {
                        apiKey: "707b1c3aa14cc6ed337df7d82352008f",
                        base64string: base64str,
                    }
                    imgbbUpload(options).then(res => {
                        console.log(res);
                        setDoc(doc(collection(database, "nfts"), this.name), {
                            name: this.name,
                            link: this.link,
                            description: this.description,
                            image: res.display_url,
                            lose: 0,
                            win: 0
                        }).then(onfulfilled => this.$router.push("/"));
                    });
                });
        },
        setImage: function (e) {
            this.image = e.target.files[0];
        },
        arrayToBase64: function (array) {
            var binary = encoder.encode(array);
            return binary
        }
    }
}
</script>

<style scoped>
.main{
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-con{
    width: 40%;
    height: 65%;
}
form{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.field{
    width: 100%;
    border-bottom: 1px solid #fafafa;
}
.field input,
.field textarea{
    width: 100%;
    background: none;
    border: none;
    padding: 20px;
    resize: none;
    color: #fafafa;
    font-family: 'Arimo',sans-serif;
    font-size: 18px;
}

button{
    width: 100%;
    padding: 2px;
    border-radius: 30px;
    border: none;
    font-size: 20px;
    text-transform: uppercase;
    color: #fafafa;
    background: transparent;
    border: 2px solid #fafafa;
    cursor: pointer;
}

@media (min-width: 280px) and (max-width: 768px){
    .main-con{
        width: 100%;
        padding: 0px 30px;
    }
}
</style>