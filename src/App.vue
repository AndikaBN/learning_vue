<template>
  <!-- <input type="text" v-model="cari" placeholder="Cari">
  <br><br>
  <input type="text" v-model="nama">
  <br><br>
  <p>nama anda adalah <b>{{ nama }}</b> </p>
  <div v-if="products.length">
    <ul>
      <li v-for="item in cariData" :key="item.id">
        {{ item.title }} - {{ item.price }}
      </li>
    </ul>
  </div>
  <div v-else>
    <p>No data ancrit</p>
  </div> -->
  <HeaderComponent :text="text" />
  <button @click="changeText">Ubah Text</button>
</template>

<script>
import HeaderComponent from "@/components/Header.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  data() {
    return {
      newText: "ini adalah text dari Header.vue"
    }
  },
  methods: {
    changeText() {
      this.$emit("changeTitle", this.newText)
    }
  }
  // data() {
  //   return {
  //     url: 'https://google.com',
  //     nama: "joko",
  //     products: [

  //     ],
  //     cari: "",
  //   };
  // },

  // beforeCreate() {
  //   console.log("before created");
  // },
  // created() {
  //   this.products = [
  //     { id: 1, title: "produk 1", price: 300 },
  //     { id: 2, title: "produk 2", price: 400 },
  //     { id: 3, title: "produk 3", price: 500 },
  //   ]
  // },
  // beforeMount() {
  //   console.log("before mount");
  // },
  // mounted() {
  //   console.log("mounted");
  // },
  // computed: {
  //   cariData() {
  //     return this.products.filter((item) => {
  //       return item.title.match(this.cari);
  //     });
  //   }
  // }
}; 
</script>

<style></style>
 