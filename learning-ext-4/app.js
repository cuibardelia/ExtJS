Ext.onReady(function () {
    console.log("all good");
    Ext.Msg.confirm("title", "like?", function (btn) {
        if(btn === "yes") {
            Ext.Msg.alert("OK","nice");
        } else {
            Ext.Msg.alert("meh","not cool");
        }
    });
   //Ext.Msg.alert("new","newnew");
    console.log("newstuff");
});