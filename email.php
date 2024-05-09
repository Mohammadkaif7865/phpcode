<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'PHPMailer/PHPMailer/src/Exception.php';
require_once 'PHPMailer/PHPMailer/src/PHPMailer.php';
require_once 'PHPMailer/PHPMailer/src/SMTP.php';


if(isset($_POST['submit']))
    {
    if (!empty($_POST['fax'])) {
        die();
    }
    
    
    $mail = new PHPMailer(TRUE);
    
    $mail->isSMTP();
    
    $mail->Host = 'smtp-relay.sendinblue.com';
    $mail->SMTPAuth = TRUE;
    $mail->SMTPSecure = 'tls';
    $mail->Username = 'info@core4agency.info';
    $mail->Password = 'jVyOMQdg62BAhLK5';
    $mail->Port = 587;
    
    $name= $_POST['name'];
    $company= $_POST['company'];
    $website= $_POST['website'];
    $email= $_POST['email'];
    $phone= $_POST['phone'];
    $body_message ="
    <p>Dear Admin,</p>
    <p>You have received an enquiry from:</p>
    <table width='500' border='1' cellspacing='0'>
        <tr>
            <td style='padding:10px;' width='250'>Full Name</td>
            <td style='padding:10px;'>".$name."</td>
        </tr>
        <tr>
            <td style='padding:10px;' width='250'>Company Name</td>
            <td style='padding:10px;'>".$company."</td>
        </tr>
        <tr>
            <td style='padding:10px;' width='250'>Website url</td>
            <td style='padding:10px;'>".$website."</td>
        </tr>
        <tr>
            <td style='padding:10px;' width='250'>Email</td>
            <td style='padding:10px;'>".$email."</td>
        </tr>
        <tr>
            <td style='padding:10px;' width='250'>Phone Number</td>
            <td style='padding:10px;'>".$phone."</td>
        </tr>
    </table>";
    
    $mail->setFrom("contact@sibinfotech.com", "Digital Marketing Services Mumbai Landing Page");
    $mail->Body = $body_message;
    
    // $mail->AddAddress('contact@sibinfotech.com');
    // $mail->AddBcc('radhey@sibinfotech.com');
    $mail->AddAddress('sib.zaroon@gmail.com');
    $mail->AddAddress('sibinfotech101@gmail.com');
    $mail->Subject = "New Inquiry from Digital Marketing Services Mumbai Landing Page";
    $mail->IsHTML(true);
   /* Finally send the mail. */
   if ($mail->send()) { 
    // echo 'Mail Sent'; exit;
    ?>

    <script language="javascript" type="text/javascript">
        window.location = "https://www.sibinfotech.com/thanks";
    </script>
    <?php 
    } 
    else {
    // echo 'Mailer Error: ' . $mail->ErrorInfo; exit;
    ?>
    <script language="javascript" type="text/javascript">
        alert("Message failed. Please try again");
        window.location = "index.php";
    </script>
    <?php 
    }
}


?>
