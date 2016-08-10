class LinkController {
    constructor() {
    }
}

export default () => ({
    template: require('./linkDirective.html'),
    controller: LinkController,
    controllerAs: 'link',
    scope: {
        myUrl: '@',
        myLinkText: '@'
    },
    bindToController: true
});