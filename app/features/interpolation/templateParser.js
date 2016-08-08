export default class TemplateParser {
    constructor($interpolate) {
        this.$interpolate = $interpolate;
    }

    parse(text, context) {
        if (!text) return '';

        var template = this.$interpolate(text);
        return template(context);
    }

    static factory($interpolate) {
        'ngInject';
        return new TemplateParser($interpolate);
    }
}