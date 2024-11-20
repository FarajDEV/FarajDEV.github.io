function sendMail() {
  const msg = document.getElementById("msg");
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_ndaxm4f";
  const templateID = "template_7pw1r9v";
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      
      msg.innerHTML = "Your message was sent successfully!";
      msg.style.color = "green";  // Success color

      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      
      form.reset();
    })
    .catch((err) => {
      console.log(err);
      msg.innerHTML = "There was an error sending your message.";
      msg.style.color = "red";  // Error color
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
    });
}
