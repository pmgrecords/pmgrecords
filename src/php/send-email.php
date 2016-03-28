<?php
    $to = "support@alexpepper.us";
    $subject = "Message from alexpepper.us";
    $message = $_REQUEST['name'] . " wrote:\n" . $_REQUEST['message'];
    $from = "From: " . $_REQUEST['email'];
    mail($to, $subject, $message, $from);
?>