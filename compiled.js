(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['itemMenu'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<p>Use the <strong>"
    + alias4(((helper = (helper = helpers.power || (depth0 != null ? depth0.power : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"power","hash":{},"data":data}) : helper)))
    + "</strong>, "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "!</p>";
},"useData":true});
})();