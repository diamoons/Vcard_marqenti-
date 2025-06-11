<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = htmlspecialchars($_POST['FirstName']);
    $lastName = htmlspecialchars($_POST['LastName']);
    $email = htmlspecialchars($_POST['Email']);
    $message = htmlspecialchars($_POST['Message']);
    $attachment = null;

    // Gérer le téléchargement de fichier
    if (!empty($_FILES['attachment']['name'])) {
        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($_FILES['attachment']['name']);
        
        if (move_uploaded_file($_FILES['attachment']['tmp_name'], $uploadFile)) {
            $attachment = $uploadFile;
        } else {
            die("Erreur lors du téléchargement du fichier.");
        }
    }

    // Insérer les données dans la base
    $sql = "INSERT INTO contacts (first_name, last_name, email, message, attachment) VALUES (:first_name, :last_name, :email, :message, :attachment)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([
        ':first_name' => $firstName,
        ':last_name' => $lastName,
        ':email' => $email,
        ':message' => $message,
        ':attachment' => $attachment,
    ]);

    // Configurer l'envoi d'e-mail
    $to = 'mohamed.jarboui@sam-sfax.com.tn'; // Votre adresse e-mail
    $subject = "Nouveau message de $firstName $lastName";
    $body = "
        <h2>Nouveau Message</h2>
        <p><strong>Prénom :</strong> $firstName</p>
        <p><strong>Nom :</strong> $lastName</p>
        <p><strong>Email :</strong> $email</p>
        <p><strong>Message :</strong><br>$message</p>
    ";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Envoyer l'e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès ! Un e-mail a également été envoyé.";
    } else {
        echo "Erreur lors de l'envoi de l'e-mail.";
    }
}
?>
