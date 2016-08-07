export default class CounterController {
    constructor() {
        this.counter = 0;
        console.log("Counter started!");
    }

    add(n) {
        this.counter++;
        console.log(`Counter added, now ${this.counter}`);
    }

    subtract(n) {
        this.counter--;
        console.log(`Counter subtracted, now ${this.counter}`);
    }
}