function Counter() {
    return {
        count: 0,
        maxCount: 20,
        increment() {
            if (this.count < this.maxCount) {
                this.count++;
            }
        },
        decrement() {
            if (this.count > 0) {
                this.count--;
            }
        },
        reset() {
            this.count = 0;
        },
    };
}
