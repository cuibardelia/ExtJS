Ext.define('MyApp.view.clients.Form',{
    extend      : 'Ext.form.Panel',
    alias       : 'widget.clientform',

    title    : 'Client form',
    bodyPadding  : 5,
    defaultType  : 'textfield', //TEXTAREA - Step 1 - This way we don't have to define the xtype property every time we want to create textfield.
    initComponent   : function(){
        var me = this;

        me.items = me.buildItems(); // TEXTAREA - Step 2 - We use the items property to add components to our form. We are calling a function that should return an array of components.

        me.dockedItems = me.buildToolbars(); //TOOLBAR - Step 1

        me.callParent();
    },

    buildItems      : function(){ // TEXTAREA - Step 3 We are defining two textfields. For the Address textarea we need to override the default xtype
        return [{
            fieldLabel  : 'Name',
            name        : 'name'
        },{
            fieldLabel  : 'Contact',
            name        : 'contact'
        },{
            xtype    : 'textarea',
            fieldLabel  : 'Address',
            name    : 'address'
        } , {
            fieldLabel  : 'Phone',
            name        : 'phone'
        }];
    },

    buildToolbars    : function(){ //Step 2
        return [{
            xtype   : 'toolbar',
            docked  : 'top',
            items   : [{
                text    : 'New',
                iconCls : 'new-icon'
            },{
                text    : 'Save',
                iconCls : 'save-icon'
            },{
                text    : 'Delete',
                iconCls : 'delete-icon'
            }]
        }];
    }
});