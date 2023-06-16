Vue.createApp({
    data() {
        return {
            number: 1,
        }
    },

    watch: {
        number(newNumber) {

            if(newNumber < 1) {
                this.number = 0;
            } else if(newNumber > 10) {
                this.number = 10;
            }
        }
    },

    methods: {
        handleIncrement() {
            this.number++;
        },
        handleReduce() {
            this.number--;
        }
    },
}).mount('#btn-quantity');