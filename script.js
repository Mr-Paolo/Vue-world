Vue.createApp({
    data() {
        return {
            enemies: [],
            interval: null,
            intervalAmount: 1000,
            cellSize: .5,
            enemiesAmount: 2,
            character: {
                left: 0,
                top: 0,
            }
        }
    },
    methods: {
        startWorld() {
            clearInterval(this.interval)
            let i = 0
            const maxNumber = 100/this.cellSize
            this.enemies = []
            while(i < this.enemiesAmount) {
                this.enemies.push({
                    left: parseInt(Math.random() * maxNumber),
                    top: parseInt(Math.random() * maxNumber)
                })
                i++
            }
            this.interval = setInterval(
                    this.time,
                    this.intervalAmount
                )
        },
        time() {
            for (const enemy of this.enemies){
                // enemy.left++
                // enemy.left--
                // enemy.top++
                // enemy.top--
            }
        }
    }
}).mount('#app')