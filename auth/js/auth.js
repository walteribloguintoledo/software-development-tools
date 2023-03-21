$(document).ready(function() {
    var App = {
        canvas: $("#canvas"),
        api: Config.url + "/api",
        path: Config.url + "/auth",
        token: localStorage.getItem("token"),
        useruid: localStorage.getItem("useruid"),
        authenticate: function() {
            
        },
        initialize: function() {
            App.authenticate();
        },
    }

    App.initialize();

    $.Mustache.options.warnOnMissingTemplates = true;

    function hasher(location) {
        window.location.hash = location;
    }

    function clearPanel() {
        App.canvas.hide().fadeIn(200);
    }

    $.Mustache.load('templates/auth.html').done(function() {
  

        Path.map("#/login/").to(function() {
            App.canvas.html("").append($.Mustache.render('login'));
            
        });

        Path.map("#/signup/").to(function() {
            App.canvas.html("").append($.Mustache.render('signup'));

        });

        Path.map("#/logout/").to(function() {
            App.canvas.html("").append($.Mustache.render('logout'));

        });

        Path.map("#/forgot-password/").to(function() {
            App.canvas.html("").append($.Mustache.render('forgot-password'));

        });

        Path.rescue(function() {
			App.canvas.html("").append($.Mustache.render("404"));
		});

        Path.root("#/login/");

        Path.listen();
    });
});