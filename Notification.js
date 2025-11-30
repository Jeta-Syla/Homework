class Notification {
  send(message) {
    
    console.log("Sending notification:", message);
  }
}

class EmailNotification extends Notification {
  send(message) {
    console.log("Email sent:", message);
  }
}

class SMSNotification extends Notification {
  send(message) {
    console.log("SMS sent:", message);
  }
}

class PushNotification extends Notification {
  send(message) {
    console.log("Push notification sent:", message);
  }
}
