export default class CounterController {
    constructor() {
        this.count = 0;
        console.log("Counter started!");
    }

    add(n) {
        this.count++;
        console.log(`Counter added, now ${this.count}`);
    }

    subtract(n) {
        this.count--;
        console.log(`Counter subtracted, now ${this.count}`);
    }
}