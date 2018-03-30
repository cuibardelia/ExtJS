Ext.define("MyApp.Category", {
    extend: "Ext.data.Model",
    fields: [
        "id",
        "name",
        "description"
    ]
});

var category = Ext.create("MyApp.Category", {
    id: 1,
    name: "Drama",
    description: "Money spent on team buildings"
});

console.log(category.get("name"));