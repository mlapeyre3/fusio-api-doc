var tpl_docIntro = Handlebars.templates['docIntroduction'];
Handlebars.partials = Handlebars.templates;

var markdown = require('helper-markdown');
Handlebars.registerHelper('markdown', markdown());

$.getJSON("http://127.0.0.1:8080/src/assets/FusioAPI_Doc.postman_collection.json", function(data) {
  //Render the data into the template
  var rendered = tpl_docIntro(data);

//Overwrite the contents of #target with the renderer HTML
  document.getElementById('docIntroduction').innerHTML = rendered;
});