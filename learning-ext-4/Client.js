Ext.define("MyApp.Client", {
    name: "X",
    lastName: "Y",
    constructor : function(config) {
        Ext.apply(this,config || {});
        console.log("I'm a new client");
    }
});

var client = Ext.create("MyApp.Client");
console.log(client.name);