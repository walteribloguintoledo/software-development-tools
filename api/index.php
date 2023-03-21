<?php
require_once "functions.loader.php";	
date_default_timezone_set("Asia/Manila");

$app = new Slim();

$app->get("/info", function() {
    echo phpinfo();
});

$app->get("/hello/:name", function($name) {
    echo "Hello, " . $name ."!";
});

$app->post("/login", function() {
    /* your code here... */
});

$app->run();
