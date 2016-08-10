export default class HeaderController {
    constructor($rootScope, $state, $timeout) {
        'ngInject';
        this.processState($state.current);

        $rootScope.$on('$stateChangeSuccess', this.handleStateChange.bind(this));

        this.elapsedSeconds = 0.0;
        this.tick(new Date(), $timeout);
    }

    handleStateChange(e, newState) {
        this.processState(newState);
    }

    processState(state) {
        this.setTitle(state);
        this.showHideBackArrow(state);
    }

    setTitle(state) {
        if (state.data && state.data.title)
            this.title = state.data.title;
    }

    showHideBackArrow(state) {
        this.backArrowVisible = state.name != 'index';
    }

    tick(start, $timeout) {
        this.elapsedSeconds = (new Date() - start) / 1e3;
        $timeout(() => this.tick(start, $timeout), 50);
    }
}