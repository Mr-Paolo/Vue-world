Vue.createApp({
    data() {
        return {
            enemies: [{
                left: 0,
                top: 0
            },{
                left: 4,
                top: 2
            }],
            interval: null,
            intervalAmount: 1000,
            cellSize: 10
        }
    },
    methods: {
        startWorld() {
            this.interval = setInterval(
                    this.time,
                    this.intervalAmount
                )
        },
        time() {
            console.log("Time interval")
        }
    }
}).mount('#app')