$(document).ready(function() {
    var App = {
        canvas: $("#canvas"),
        api: Config.url + "/api",
        path: Config.url + "/app",
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

    $.Mustache.load('templates/app.html').done(function() {
  

        Path.map("#/home/").to(function() {
            App.canvas.html("").append($.Mustache.render('home-page'));
            
        });

        Path.map("#/about-us/").to(function() {
            App.canvas.html("").append($.Mustache.render('about-us-page'));

        });

        Path.map("#/contact-us/").to(function() {
            App.canvas.html("").append($.Mustache.render('contact-us-page'));

        });

        Path.map("#/my-gallery/").to(function() {
            App.canvas.html("").append($.Mustache.render('my-gallery-page'));

        });

        Path.rescue(function() {
			App.canvas.html("").append($.Mustache.render("404"));
		});

        Path.root("#/home/");

        Path.listen();
    });
});