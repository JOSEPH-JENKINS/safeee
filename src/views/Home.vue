<template>
  <section id="home">
    <div class="massive-text">
      <h1 class="massive">SAFEEE</h1>
    </div>
    <div class="main">
      <div class="main-text">
        <div class="text">
          <h1>don't be a degen, use safee to protect yourself from rugs.</h1>
        </div>
        <div class="main-buttons">
          <div class="buttons-container">
            <form @submit="searchForm">
              <div class="field">
                <input type="text" v-model="searchText" placeholder="Search For A NFT Project">
                <button type="submit">&rarr;</button>
              </div>
            </form>
            <router-link to='/' class="upload">UPLOAD A PROJECT</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      searchText: ''
    }
  },
  methods: {
    searchForm: function (e) {
      e.preventDefault();
      this.$router.push({
        path: '/nft',
        params: {
          name: this.searchText,
        }
      });
    }
  }
}
</script>

<style scoped>
#home{
  flex: 1;
  width: 100%;
  padding: 20px 40px;
  position: relative;
  overflow-x: hidden;
}
.massive-text{
  letter-spacing: 1.8px;
  font-size: 22vw;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-10%, -22%);
  pointer-events: none;
  z-index: 555;
}
.massive-text h1{
  white-space: nowrap;
}
.main{
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  position: relative;

  background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)) ,url('../assets/tatiana-pavlova-Ng1A1Pshq28-unsplash.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.main-text{
  width: 95%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%);
}
.main-text h1{
  text-align: center;
}

.text{
  margin-bottom: 20px;
}

.main-buttons{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons-container{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}


.field{
  height: 50px;
  padding: 2px 10px;
  width: 450px;
  border: 2.5px solid #fafafa;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.field input{
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  color: #fafafa;
  font-family: 'Arimo', sans-serif;
  text-transform: uppercase;
}

.field input::placeholder{
  color: #d5d5d5;
}

.field button{
  background: #fafafa;
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  font-size: 22px;
  font-family: 'Arimo', sans-serif;
  transition: background .25s ease;
  margin-left: 5px;
}

.field button:hover{
  background: #ffa500;
}

.upload{
  width: 120px;
  margin-left: 20px;
  white-space: nowrap;
}

.upload:hover{
  color: #ffa500;
  text-decoration: underline;
}

@media (min-width: 320px) and (max-width: 768px) {
  #home{
    padding: 20px 10px;
  }
  .massive-text{
    font-size: 21vw;
    transform: translate(-10%,14.35%);
  }
  .main-text{
    transform: translate(-50%, -80%);
  }
  .field{
    width: 300px;
  }
  .field input{
    font-size: 16px;
  }
  .upload{
    margin-left: 0px;
    margin-top: 20px;
  }
}
</style>