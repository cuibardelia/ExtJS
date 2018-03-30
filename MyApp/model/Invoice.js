Ext.define('MyApp.model.Invoice',{
    extend	: 'Ext.data.Model',  // Step 1

    idProperty  : 'idInvoice',//Step 2
    fields  : [  // Step 3
        {name:'IdInvoice'},
        {name:'taxId'},
        {name:'dateIssued',type:'date',dateFormat:'Y-m-d h:i:s'},
        {name:'name'},
        {name:'address'},
        {name:'creditCard'}
    ],
    validations  : [
        {type:'presence',field:'taxId'},
        {type:'length',field:'taxId',min:5,max:7},
        {type:'presence',field:'name'},
        {type:'format',field:'name',matcher:/^[\w ]+$/},
        //below used for overwriting the validations object - see use of TYPE and then validations.js
        {type:'creditcard',field:'creditCard'}
        //could use MAPPING here in order to define the keys in which the data is to be retrieved from the server
    ],
    //RELATIONSHIPS:
    hasMany  : [
        {model:'MyApp.model.Item',name:'getItems'} //if we do not set a name for the function designed to get the items related, Ext PLURALIZES the name of the child model, ie 'items'
    ]
});