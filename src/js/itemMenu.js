var tpl_itemMenu = Handlebars.templates['itemMenu'];
Handlebars.partials = Handlebars.templates;

//var data = {name: "Luke", power: "force"};

$.getJSON("http://127.0.0.1:8080/src/assets/FusioAPI_Doc.postman_collection.json", function(data) {
  //Render the data into the template
  var rendered = tpl_itemMenu(data);

//Overwrite the contents of #target with the renderer HTML
  document.getElementById('itemMenu').innerHTML = rendered;
});