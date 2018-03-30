Ext.Ajax.request({
    url    : "serverside/data.json",
    success  : function(response,options){
        var data = Ext.decode(response.responseText);
        Ext.Msg.alert("Message", data.msg);
    },
    failure  : function(response,options){

    }
});