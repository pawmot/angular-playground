export default class InterpolationController {
    constructor($interpolate, $scope) {
        this.template = "";
        this.variable = "";

        $scope.$watch(() => this.template, (template) => {
            if (template) {
                var preview = $interpolate(template);
                this.preview = preview({variable: this.variable});
            }
        });

        $scope.$watch(() => this.variable, (variable) => {
            if (this.template) {
                var preview = $interpolate(this.template);
                this.preview = preview({variable: variable});
            }
        });
    }
}