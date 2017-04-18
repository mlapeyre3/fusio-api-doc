(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['docIntroduction'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=container.lambda, alias2=container.escapeExpression, buffer = 
  "<h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1>\n<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\n";
  stack1 = ((helper = (helper = helpers.markdown || (depth0 != null ? depth0.markdown : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"markdown","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.markdown) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['itemMenu'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "\n         <div class=\"title\">\n             <i class=\"dropdown icon\"></i>\n             <b>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</b>\n         </div>\n         <div class=\"content menu\">\n"
    + ((stack1 = container.invokePartial(partials.requestMenu,depth0,{"name":"requestMenu","data":data,"indent":"             ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "         </div>\n\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.item : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['requestMenu'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"item\">\n        "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.item : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();