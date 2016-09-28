<?php
    $mailwebmaster="castano.cindy1@gmail.com";
    $subject="You got mail from : ".$_POST["email"];
    $edito=$_POST["message"];
    $email=$_POST["email"];
    $mailheader="From:$email\n";
    $header.="content-type:text/html;charset=utf-8";

mail($mailwebmaster, $subject, $edito, $mailheader) or die("Error!");
echo "Thank You! I will be in touch with you soon." . "/" . "<a href='index.html' style='text-decoration:none;color:#40ffbf'> Return Home</a>";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact</title>
</head>
<body>
    
</body>
</html>
