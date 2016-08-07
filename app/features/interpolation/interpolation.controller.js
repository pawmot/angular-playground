export default class InterpolationController {
    constructor($scope, TemplateParser) {
        this.template = "";
        this.variable = "";
        this.pattern = /\{\{\s*variable\s*\}\}/;

        $scope.$watch(() => this.template, (template) => {
            this.preview = TemplateParser.parse(template, {variable: this.variable});
        });

        $scope.$watch(() => this.variable, (variable) => {
            this.preview = TemplateParser.parse(this.template, {variable: variable});
        });
    }
}