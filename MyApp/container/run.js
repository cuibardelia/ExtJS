Ext.onReady(function(){

    Ext.create("MyApp.container.MyContainer",{
        renderTo: Ext.getBody(),
        defaults: {
            xtype: "component",
            width: 100
        },
        items  : [{
           //xtype  : "component",
            html  : "Component one"
        },{
           // xtype  : "component",
            html  : "Component two"
        }]
    });

});