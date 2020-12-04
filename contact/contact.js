
document.querySelector(".contact-form").addEventListener("submit",submitForm);


function submitForm(e){
    e.preventDefault();   
    let name  =  document.querySelector(".name").value;
    let phone = document.querySelector(".phone").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value; 
    
    // saveContactInfo(name,email,message);
    sendEmail(name,phone,email,message);
    //document.querySelector("contact-form").reset();
}

function sendEmail(name,phone,email,message){
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'akashpre196@gmail.com',
        Password: "ldrtczcmcjmykjbh",
        To: "akashpre196@gmail.com",
        From: `${email}`,
        Subject : `${name} sent you Buisness Related Message`,
        Body: `Name : ${name} <br/> Phone : ${phone}<br/> Email: ${email} <br/> Message : ${message}`,
    }).then((message)=> alert("Mail Has Been Sucessfully Sent"))
}