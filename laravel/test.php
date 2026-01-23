<?php try { $pdo = new PDO("mysql:host=db;port=3306;dbname=laravel", "laravel", "laravel"); echo "Connected"; } catch (Exception $e) { echo "Error: " . $e->getMessage(); }
