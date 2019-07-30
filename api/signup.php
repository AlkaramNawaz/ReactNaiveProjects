<?php

require_once('dbconnect.php');

if($_SERVER['REQUEST_METHOD'] === 'POST'){

    $name =$_POST['name'];
    $uname=$_POST['username'];
    $password = $_POST['password'];

    $query = "INSERT INTO user(name,username,password) VALUES ('$name','$uname','$password')";

    $result = mysqli_query($con,$query);

    if($result){
        echo 'data inserted';
    }else{
        echo 'error ';
    }

}

?>