require([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dattn/widget/_TemplatedMixin',
    'dojo/domReady!'
], function(declare, _WidgetBase, _TemplatedMixin) {

    var widgetA = declare([_WidgetBase, _TemplatedMixin], {

        templateString: '<div {{event "onclick:_onClick"}}>Hello widget: <span {{ attach "nameNode" }}>{{ name }}</span></div>',
        name: 'widgetA',

        postCreate: function() {
            this.inherited(arguments);
            console.log(this.nameNode);
        },

        _onClick: function() {
            alert(this.name);
        }

    });

    new widgetA({}, 'widgetA');

});
