require([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dattn/widget/_TemplatedMixin',
    'dojo/text!./template.html',
    'dojo/domReady!'
], function(declare, _WidgetBase, _TemplatedMixin, template) {

    var widgetA = declare([_WidgetBase, _TemplatedMixin], {

        templateString: template,
        name: 'widgetA',

        postCreate: function() {
            this.inherited(arguments);

            var t = this;
            var index = 1;
            setInterval(function() {
                t.set('counter', 'hallo ' + index);
                index++;
            }, 1000);
        },

        _onClick: function() {
            alert(this.name);
        }

    });

    new widgetA({}, 'widgetA');

});
