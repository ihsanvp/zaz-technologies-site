<?php

function validate()
{
    if (array_key_exists("name", $_POST) && array_key_exists("email", $_POST) && array_key_exists("phone", $_POST) && array_key_exists("message", $_POST)) {
        return true;
    } else {
        return false;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {


    if (validate()) {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $message = $_POST["message"];
        $message = wordwrap($message, 70);

        $to = 'support@zazplus.onmicrosoft.com';
        $subject = "Message from {$name}";

        $msg = "
        Name : {$name}\n
        Email : {$email}\n
        Phone no : {$phone}\n
        \n
        {$message}
        ";

        $success =  mail($to, $subject, $msg);

        if (!$success) {
            http_response_code(500);
            exit();
        }

        header('Content-Type: application/json');
        echo json_encode([
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'message' => $message,
            'success' => $success
        ]);
    } else {
        http_response_code(400);
    }
} else {
    http_response_code(405);
}
