var template = Handlebars.templates['itemMenu'];
//Handlebars.registerPartial('myPartial', '{{requestMenu}}')
Handlebars.partials = Handlebars.templates;

//var data = {name: "Luke", power: "force"};

$.getJSON("http://127.0.0.1:8080/src/assets/FusioAPI_Doc.postman_collection.json", function(data) {
  //Render the data into the template
  var rendered = template(data);

//Overwrite the contents of #target with the renderer HTML
  document.getElementById('itemMenu').innerHTML = rendered;
});