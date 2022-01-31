<template>
  <div class="page">
    <div class="main">
      <div class="nft">
        <div class="nft-image">
          <img :src="this.image" alt="">
        </div>
        <div class="nft-details">
          <h1>{{ this.name }}</h1>
          <div class="paragraph">
            <p>
              {{ this.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="nft-rating">
        <div class="rate-container">
          <h1 class="head">Rates</h1>
          <div class="nft-rate" :style="styles">
            <div class="rate">
              <div class="losing">
                <p>{{ this.losePercent }}</p>
              </div>
            </div>
            <div class="rate">
              <div class="winning">
                <p>{{ this.winPercent }}</p>
              </div>
            </div>
          </div>
          <div class="rate-buttons">
            <button class="rate-button lose" @click="handleLose">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7996 22.0999C10.5096 22.0999 10.2196 22.0499 9.94955 21.9499C8.69955 21.5399 7.89955 20.1599 8.17955 18.8799L8.66955 15.7299C8.67955 15.6599 8.67955 15.5599 8.60955 15.4799C8.55955 15.4299 8.48955 15.3999 8.40955 15.3999H4.40955C3.42955 15.3999 2.57955 14.9899 2.07955 14.2799C1.58955 13.5899 1.48955 12.6799 1.80955 11.7999L4.19955 4.5199C4.56955 3.0699 6.11955 1.8999 7.71955 1.8999H11.5196C12.0796 1.8999 13.2996 2.0699 13.9496 2.7199L16.9796 5.0599L16.0596 6.2499L12.9596 3.8499C12.7096 3.5999 12.0796 3.3999 11.5196 3.3999H7.71955C6.81955 3.3999 5.84955 4.1199 5.64955 4.9299L3.22955 12.2799C3.06955 12.7199 3.09955 13.1199 3.30955 13.4099C3.52955 13.7199 3.92955 13.8999 4.41955 13.8999H8.41955C8.93955 13.8999 9.41955 14.1199 9.74955 14.4999C10.0896 14.8899 10.2396 15.4099 10.1596 15.9499L9.65955 19.1599C9.53955 19.7199 9.91955 20.3499 10.4596 20.5299C10.9396 20.7099 11.5796 20.4499 11.7996 20.1299L15.8996 14.0299L17.1396 14.8699L13.0396 20.9699C12.5696 21.6699 11.6796 22.0999 10.7996 22.0999Z" fill="#292D32"/>
                <path d="M19.6191 18.1H18.6191C16.7691 18.1 15.8691 17.23 15.8691 15.45V5.65C15.8691 3.87 16.7691 3 18.6191 3H19.6191C21.4691 3 22.3691 3.87 22.3691 5.65V15.45C22.3691 17.23 21.4691 18.1 19.6191 18.1ZM18.6191 4.5C17.5291 4.5 17.3691 4.76 17.3691 5.65V15.45C17.3691 16.34 17.5291 16.6 18.6191 16.6H19.6191C20.7091 16.6 20.8691 16.34 20.8691 15.45V5.65C20.8691 4.76 20.7091 4.5 19.6191 4.5H18.6191Z" fill="#292D32"/>
              </svg>
            </button>
            <button class="rate-button win" @click="handleWin">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2794 22.1H12.4794C11.9194 22.1 10.6994 21.93 10.0494 21.28L7.01937 18.94L7.93937 17.75L11.0394 20.15C11.2894 20.39 11.9194 20.59 12.4794 20.59H16.2794C17.1794 20.59 18.1494 19.87 18.3494 19.06L20.7694 11.71C20.9294 11.27 20.8994 10.87 20.6894 10.58C20.4694 10.27 20.0694 10.09 19.5794 10.09H15.5794C15.0594 10.09 14.5794 9.86999 14.2494 9.48999C13.9094 9.09999 13.7594 8.57999 13.8394 8.03999L14.3394 4.82999C14.4594 4.26999 14.0794 3.63999 13.5394 3.45999C13.0494 3.27999 12.4194 3.53999 12.1994 3.85999L8.09938 9.95999L6.85938 9.12999L10.9594 3.02999C11.5894 2.08999 12.9694 1.63999 14.0494 2.04999C15.2994 2.45999 16.0994 3.83999 15.8194 5.11999L15.3294 8.26999C15.3194 8.33999 15.3194 8.43999 15.3894 8.51999C15.4394 8.56999 15.5094 8.59999 15.5894 8.59999H19.5894C20.5694 8.59999 21.4194 9.00999 21.9194 9.71999C22.4094 10.41 22.5094 11.32 22.1894 12.2L19.7994 19.48C19.4294 20.93 17.8894 22.1 16.2794 22.1Z" fill="#292D32"/>
                <path d="M5.38086 20.9999H4.38086C2.53086 20.9999 1.63086 20.1299 1.63086 18.3499V8.5499C1.63086 6.7699 2.53086 5.8999 4.38086 5.8999H5.38086C7.23086 5.8999 8.13086 6.7699 8.13086 8.5499V18.3499C8.13086 20.1299 7.23086 20.9999 5.38086 20.9999ZM4.38086 7.3999C3.29086 7.3999 3.13086 7.6599 3.13086 8.5499V18.3499C3.13086 19.2399 3.29086 19.4999 4.38086 19.4999H5.38086C6.47086 19.4999 6.63086 19.2399 6.63086 18.3499V8.5499C6.63086 7.6599 6.47086 7.3999 5.38086 7.3999H4.38086Z" fill="#292D32"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { database } from "../db/index"
import { doc, getDoc, updateDoc} from "firebase/firestore";

export default {
  name: 'Page',
  data: function(){
    return {
      name: '',
      link:'',
      description: '',
      image: null,
      lose: 0,
      win: 0,
      doc: null,
      losePercent: null,
      winPercent: null
    }
  },
  methods: {
    handleLose: function (e) {
      this.lose++;
      updateDoc(this.doc, {
        lose: this.lose
      }).then(onfulfilled => {
        this.$router.push('/')
      })
    },
    handleWin: function (e) {
      this.win++;
      updateDoc(this.doc, {
        win: this.win
      }).then(onfulfilled => {
        this.$router.push('/')
      })
    }
  },
  created: function(){
    const docRef = doc(database, "nfts", this.$route.params.name);
    getDoc(docRef).then(docSnap => {
        if (docSnap.exists()) {
          this.name = docSnap.data().name;
          this.link = docSnap.data().link;
          this.image = docSnap.data().image;
          this.description = docSnap.data().description;
          this.lose = docSnap.data().lose;
          this.win = docSnap.data().win;

          this.doc = doc(database, "nfts", this.name);
        } else {
          alert("NOT FOUND!");
          this.$router.push('/')
        }
    });
  },
  computed: {
    styles: function () {
      const total = this.win + this.lose;
      const losePercent = (this.lose / total ) * 100;
      const winPercent = (this.win / total ) * 100;

      this.losePercent = Math.round(losePercent);
      this.winPercent = Math.round(winPercent);

      return {
        '--lose-width': `${losePercent}%`,
        '--win-width': `${winPercent}%`
      }
    }
  }
}
</script>

<style scoped>
.page{
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main{
  height: 90%;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.nft{
  height: 70%;
  width: 40%;
}
.nft-image{
  width: 100%;
  height: 85%;
}
.nft-details{
  margin-top: 20px;
}
.paragraph{
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 14px;
  width: 95%;
  margin-left: auto;
}
.nft-rating{
  width: 40%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rate-container{
  width: 100%;
}
.nft-rate{
  width: 100%;
}
.losing{
  width: var(--lose-width);
  background: #a73005;
}
.winning{
  width: var(--win-width);
  margin-left: auto;
  background: #315f03;
}
.losing,
.winning{
  margin-bottom: 20px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color:#fafafa;
}
.losing p,
.winning p{
  font-weight: bold;
}
.head{
  margin-bottom: 20px;
}
.rate{
  width: 100%;
  background: #333;
}
.rate-buttons{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rate-button{
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.rate-button.lose{
  background: #a73005;
}
.rate-button.win{
  margin-left: 20px;
  background: #315f03;
}
@media (min-width: 280px) and (max-width: 768px){
  .main{
    height: 90%;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  .nft{
    height: 100%;
    width: 100%;
    padding: 0px 30px;
  }
  .nft-rating{
    height: 100%;
    width: 100%;
    padding:0px 30px;
    margin-top: 70%;
    margin-bottom: 20%;
  }
}
</style>