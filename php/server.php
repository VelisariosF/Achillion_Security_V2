<?php

session_start();

// STUFF NEEDED FOR THE GMAIL FUNC TO WOKR //


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once("./vendor/autoload.php");

$mail = new PHPMailer(true);


//================ Email ===================\\
//Send email through web form
//check if the sendEmail button from the email form is pressed
if (isset($_POST['sendEmail'])) {

  //get the data from the form
  $firstname =$_POST['firstname'];
  $lastname = $_POST['lastname'];
  $emailAddress = $_POST['emailAdr'];
  $phoneNumber = $_POST['phoneNum'];
  $subject = $_POST['subject'];


  

     
     $emailContent = 'Ο ' . $firstname.' '. $lastname . ' στελνει το παρακατατω μηνυμα, τηλ επικοινωνίας: '. $phoneNumber.' και email: '.$emailAddress.',
     Μήνυμα: '. $subject . '!';
   
    
    
      //=================================================================///

      try {
        $mail->SMTPDebug = 2;									
        $mail->isSMTP();											
        $mail->Host	 = 'smtp.gmail.com';					
        $mail->SMTPAuth = true;							
        $mail->Username = 'info.achillioncompany@gmail.com';				
        $mail->Password = 'pataros16';						
        $mail->SMTPSecure = 'ssl';							
        $mail->Port	 = 465;
      
        
        $mail->setFrom('info.achillioncompany@gmail.com', 'Achillion Company');		
        $mail->addAddress('info.achillioncompany@gmail.com');
  
        $mail->CharSet = 'UTF-8';
        $mail->isHTML(true);								
        $mail->Subject =$ansTopic;
        $mail->Body = $emailContent;
        $mail->AltBody =$emailContent;
        $mail->SMTPDebug = 0;
        $mail->send();
        
      } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
      }
      
      //header("Location: announcements.php");
       echo "<script> window.location.href = './index.php'</script>";
      //===================================================================///


}






?>