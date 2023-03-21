<?php
ORM::configure('mysql:host=localhost;dbname=your_database');
ORM::configure('username', 'root');
ORM::configure('password', 'dbpassword');
ORM::configure('logging', true);
ORM::configure('return_result_sets', true);