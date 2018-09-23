FlowRouter.route("/", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Inicio"});
    }
});

FlowRouter.route("/Sobre", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Sobre"});
    }
});

FlowRouter.route("/Contatos", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Contatos"});
    }
});