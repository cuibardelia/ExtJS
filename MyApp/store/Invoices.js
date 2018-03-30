Ext.define('MyApp.store.Invoices',{
    extend  : 'Ext.data.Store',    //Step 1
    model  : 'MyApp.model.Invoice', //Step 2

    proxy  : {
        type    : 'ajax',
       // url	  : 'serverside/invoices.json',
        api    : {
            create  : 'serverside/save',
            read    : 'serverside/invoices.json',
            update  : 'serverside/update',
            destroy  : 'serverside/remove'
        }, //modify our store class to set the right URL for each action. Using the api property in our proxy we can set a different URL for each CRUD operation.
        reader  : {
            type  : 'json',
            root  : 'data' //The root property allows us to define the name of the property in the server response, where all objects containing the information for our models are located.
        },
        writer  : {
            type  : 'json',
            allowSingle  : false
        }
    }
});