var template = Handlebars.templates['itemMenu'];

//Render the data into the template
var rendered = template({name: "Luke", power: "force"});

//Overwrite the contents of #target with the renderer HTML
document.getElementById('itemMenu').innerHTML = rendered;