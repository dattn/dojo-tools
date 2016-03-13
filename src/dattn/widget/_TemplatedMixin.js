define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dijit/_TemplatedMixin',
    'handlebars/handlebars'
], function(declare, lang, _TemplatedMixin, Handlebars) {

    Handlebars.registerHelper('attach', function(property) {
        property = Handlebars.Utils.escapeExpression(property);
        var result = 'data-dojo-attach-point="' + property + '"';
        return new Handlebars.SafeString(result);
    });

    Handlebars.registerHelper('event', function(event) {
        event = Handlebars.Utils.escapeExpression(event);
        var result = 'data-dojo-attach-event="' + event + '"';
        return new Handlebars.SafeString(result);
    });

    return declare('dattn.widget._TemplatedMixin', [_TemplatedMixin], {

        _skipNodeCache: true,

        _stringRepl: function(template) {
            var rendering = Handlebars.compile(template);
            return lang.trim(rendering(this));
        }

    });

})
