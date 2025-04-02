export default (await import('vue')).defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
  },
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
});
