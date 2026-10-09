Vue.createApp({
  data() {
    return {
      user: {
        name: "山田太郎",
        age: 20,
        address: "東京都",
        job: "Webデザイナー"
      }
    };
  }
}).mount("#app");