require([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dattn/widget/_TemplatedMixin',
    'dojo/domReady!'
], function(declare, _WidgetBase, _TemplatedMixin) {

    var widgetA = declare([_WidgetBase, _TemplatedMixin], {

        templateString: '<div>Hello widget: {{ name }}</div>',
        name: 'widgetA'

    });

    new widgetA({}, 'widgetA');

});
