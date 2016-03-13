define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dijit/_TemplatedMixin',
    'handlebars/handlebars',
    'dbind/bind'
], function(declare, lang, _TemplatedMixin, Handlebars, bind) {

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

    Handlebars.registerHelper('bind', function(property) {
        property = Handlebars.Utils.escapeExpression(property);
        var result = 'data-dojo-attach-point="_bind_node_' + property + '"';
        return new Handlebars.SafeString(result);
    });

    return declare('dattn.widget._TemplatedMixin', [_TemplatedMixin], {

        _skipNodeCache: true,

        _stringRepl: function(template) {
            var rendering = Handlebars.compile(template);
            return lang.trim(rendering(this));
        },

        _beforeFillContent: function() {
            this.inherited(arguments);
            for (var i = 0; i < this._attachPoints.length; i++) {
                var matches = this._attachPoints[i].match(/^_bind_node_(.+)$/);
                if (!matches)
                    continue;
                bind(this[matches[0]]).to(this, matches[1]);
            }
        }

    });

})
