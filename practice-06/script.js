Vue.createApp({
	data() {
	  return {
	    products: [
	      {
	        id: 101,
	        name: "ノートPC",
	        price: 120000
	      },
	      {
	        id: 102,
	        name: "キーボード",
	        price: 8000
	      },
	      {
	        id: 103,
	        name: "マウス",
	        price: 5000
	      }
	    ]
	  };
	}
}).mount("#app")