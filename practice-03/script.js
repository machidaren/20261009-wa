Vue.createApp({
	data() {
	  return {
	    users: [
	      {
	        name: "山田太郎",
	        age: 20
	      },
	      {
	        name: "佐藤花子",
	        age: 21
	      },
	      {
	        name: "鈴木一郎",
	        age: 19
	      }
	    ]
	  };
	}
}).mount("#app")