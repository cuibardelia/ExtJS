Ext.define('MyApp.view.AvailableFields',{
    extend      : 'Ext.form.Panel',
    alias       : 'widget.availablefields',

    title : 'Available fields',
    width : 280,
    bodyPadding : 5,

    initComponent   : function(){
        var me = this;

        me.items = me.buildItems();

        me.callParent();
    },

    buildItems : function(){
        //We are going to create the fields here

        //TEXTFIELD
        var txt = Ext.create('Ext.form.field.Text',{
            fieldLabel	: 'First name',
            name    : 'firstname',
            enableKeyEvents : true //ATTENTION!
        });

        //Event
        txt.on('keyup',function(field,event,options){
            if(event.getCharCode() === event.ENTER){
                Ext.Msg.alert('Alert','Welcome: '+field.getValue());
            }
        });

       //NUMERIC
        var num = Ext.create('Ext.form.field.Number',{
            fieldLabel  : 'Price',
            name    : 'price',
            step    : 10,
            minValue  : 30,
            maxValue  : 100,
            hideTrigger : true
        });

        //COMBOBOX

        //Step 1 - store with static data; by defining the fields property the store internally creates the model to be used with this store.
        var store = Ext.create('Ext.data.Store',{
            fields	: ['key','label'],
            autoLoad: true,
            proxy	: {
                type  : 'ajax',
                url    : '../serverside/size.json',
                reader  : {
                    type	: 'json',
                    root	: 'data'
                }
            }
        });

        //Step 2
        var combobox = Ext.create('Ext.form.ComboBox',{
            fieldLabel  : 'Size',
            name    : 'size',
            store    : store,
            queryMode  : 'local',
            displayField: 'label',
            valueField  : 'key',
            forceSelection : true
        });

        // combobox.on('select',function(combo,records){
        //     Ext.Msg.alert('Alert',records[0].get('label'));
        // });

        //DATEFIELD
        var datefield = Ext.create('Ext.form.field.Date',{
            fieldLabel  : 'Date',
            name    : 'date',
            format    : 'd/m/Y',
            submitFormat: 'Y-m-d H:m:s',
            altFormats  : 'd-m-Y|d m Y|d.m.Y',
            minValue  : new Date(),
            disabledDates: ['30/04/2012','15/05/2012']
        });


        //CHECKBOX

        var chkbox = Ext.create('Ext.form.field.Checkbox',{
            fieldLabel  : ' ',
            labelSeparator : '',
            boxLabel  : 'Active',
            name    : 'active'
        });


        //GROUP

        var group = Ext.create('Ext.form.CheckboxGroup',{
            fieldLabel  : 'Languages',
            columns    : 2,
            items    : [
                {name:'lan',boxLabel:'JavaScript',inputValue:'js'},
                {name:'lan',boxLabel:'C/C++',inputValue:'c/cpp'},
                {name:'lan',boxLabel:'Java',inputValue:'java'},
                {name:'lan',boxLabel:'PHP',inputValue:'php'},
                {name:'lan',boxLabel:'SQL',inputValue:'sql'},
                {name:'lan',boxLabel:'Python',inputValue:'py'},
                {name:'lan',boxLabel:'Ruby',inputValue:'rb'}
            ]
        });

        //RADIO

        var yes = Ext.create('Ext.form.field.Radio',{
                name  : 'option',
                fieldLabel  : 'Are you a developer?',
                labelSeparator : '',
                boxLabel: 'Yes',
                inputValue  : true
            }),
            no = Ext.create('Ext.form.field.Radio',{
                name    : 'option',
                fieldLabel  : ' ',
                labelSeparator : '',
                boxLabel: 'No',
                inputValue  : false
            });

        var radiogroup = {
            xtype   : 'radiogroup',
            columns : 2,
            fieldLabel: 'Are you a developer?',
            items   : [yes,no]
        };

        return [txt,num,combobox, datefield, chkbox, group, yes, no]; //Step 3
    }


});
