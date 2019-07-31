<?php

require_once('dbconnect.php');


if($_SERVER['REQUEST_METHOD']=== 'POST'){
    $username = $_POST['username'];
    $password = $_POST['password'];



    $query = "SELECT * FROM user WHERE username='$username' and password='$password'";
    $result = mysqli_query($con,$query);
    $row=mysqli_num_rows($result);


    if($row>0){
        echo 'user is available';
    }else{
        echo 'user is not avaible';
    }
}




?>