<template>
  <div class="page">
    <div class="main">
      <div class="nft">
        <p>THIS INFORMATION DOES NOT MEAN THE NFT IS RUG PROOF</p>
        <div class="nft-image">
          <img src="../assets/nft-home-one.png" alt="">
        </div>
        <div class="nft-rating">
          <div class="nft-rate">
            <div class="losing"></div>
            <div class="winning"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data() {
    return {
      description: '',
      link: '',
      name: '',
      lose: 10,
      win: 25
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
  height: 100%;
  width: 40%;
}
.nft-image{
  width: 100%;
  height: 70%;
}
.nft-details{
  margin-top: 20px;
}
.paragraph{
  margin-top: 20px;
  width: 85%;
  margin-left: auto;
  text-transform: uppercase;
  font-size: 14px;
}
</style>