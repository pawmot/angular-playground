export default class ParentController {
    constructor($rootScope) {
        'ngInject';
        $rootScope.rootField = "I'm a root field!";
        this.parentField = "I'm a parent field!";
    }
}