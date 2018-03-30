Ext.define('MyApp.model.Item',{
    extend  : 'Ext.data.Model',
    fields  : [
        {name:'quantity',type:'int'},
        {name:'description',type:'string'},
        {name:'unitPrice',type:'float'},
        {name:'subtotal',type:'float'}
    ]
});