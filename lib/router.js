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

FlowRouter.route("/Contato", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Contato"});
    }
});

FlowRouter.route("/feed", {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Feed"});
    }
});

FlowRouter.route("/perfis/:id", {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Perfil"});
    }
});