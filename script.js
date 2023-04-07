
//displaying the popup
function div_show(){
    document.getElementById('holdall').style.display="block";
}
//hiding the popup
function div_hide(){
    document.getElementById('holdall').style.display="none";
}

//sending email
function sendEmail(){
    var params ={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
        message:document.getElementById("mess").value,
    };
    const serviceID="service_ddyx4lh";
    const templateID="template_nigzqvc";
    emailjs.send(serviceID,templateID,params)
    .then((res)=>{
            document.getElementById("name").value=" ";
            document.getElementById("email").value=" ";
            document.getElementById("phone").value=" ";
            document.getElementById("mess").value=" ";
            console.log(res);
            alert("Your message has been sent successfully");
 }).catch((err)=>console.log(err));
}