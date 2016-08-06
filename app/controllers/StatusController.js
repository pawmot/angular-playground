export default class StatusController {
    constructor($scope, $timeout) {
        this.start = new Date();
        this.$timeout = $timeout;
        this.$scope = $scope;

        $scope.vm = {
            works: 1,
            elapsedSec: 0.0
        };

        this.tick();
    }

    tick() {
        this.$scope.vm.elapsedSec = (new Date() - this.start) / 1e3;
        this.$timeout(this.tick.bind(this), 50);
    }
}