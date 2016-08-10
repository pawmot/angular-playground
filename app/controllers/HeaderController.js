export default class HeaderController {
    constructor($rootScope, $state) {
        'ngInject';
        this.processState($state.current);

        $rootScope.$on('$stateChangeSuccess', this.handleStateChange.bind(this));
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
}