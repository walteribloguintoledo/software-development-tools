# Solid Gold Systems, Inc. - software-development-tools

[jQuery-Mustache.js](https://github.com/walteribloguintoledo/jquery-mustache/blob/main/jquery.mustache.js) is a jQuery Plugin which makes working light work of using the Mustache templating engine via a bit of jQuery magic.

## Installation 
JQuery-Mustache has two dependencies:

 * [jQuery](http://jquery.com/) 1.5 or later.
 * [Mustache.js](https://github.com/janl/mustache.js/) 0.4 or later.

 As with all jQuery plugins, just ensure that you load jQuery before you load jQuery-mustache.js, for example:

    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js"></script>
    <script src="https://raw.github.com/jonnyreeves/jquery-Mustache/master/jquery.mustache.js"></script>
    <script src="https://raw.github.com/janl/mustache.js/master/mustache.js"></script>

## Usage
Lets get down to it and load an external template and then render it.

    var templateData = { name: 'Jonny' };
    $.Mustache.options.warnOnMissingTemplates = true;
    $.Mustache.load('./templates/greetings.html').done(function() {
    	$('#canvas').html('').append($.Mustache.render('simple-hello', templateData));
    });

In the above example we are loading an external template HTML file (`greetings.html`) and, once it's finished loading we render it out replacing the contents of the `body` element.  Your templates should be defined in a script block in the external HTML file where the script block's id will define the template's name, eg:

    <script id="simple-hello" type="text/html">
        <p>Hello, {{name}}, how are you?</p>
    </script>


On your HTML index file you need to add this elements 

    <body>
        <div id=canvas></div>
    </body>