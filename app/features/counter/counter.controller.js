export default class CounterController {
    constructor() {
        this.count = 0;
    }

    add(n) {
        this.count++;
    }

    subtract(n) {
        this.count--;
    }
}