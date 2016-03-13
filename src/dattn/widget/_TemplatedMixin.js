define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dijit/_TemplatedMixin',
    'handlebars/handlebars'
], function(declare, lang, _TemplatedMixin, Handlebars) {

    return declare('dattn.widget._TemplatedMixin', [_TemplatedMixin], {

        _skipNodeCache: true,

        _stringRepl: function(template) {
            var rendering = Handlebars.compile(template);
            return lang.trim(rendering(this));
        }

    });

})
