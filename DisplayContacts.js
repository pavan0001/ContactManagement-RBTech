var img;

var src = "contacts.png"
var fname="Vishnu";
var lname="Sastry H. K."
var phone="8552598696"
var email="hkvsastry@gmail.com"
var comp="Rayabhari Technologies"


var obj,strobj,contactInfo,contactInfoObj;
obj={Image: src, Fname: fname, LName: lname, Phone: phone, Email: email, Company: comp};
strobj = JSON.stringify(obj);
localStorage.setItem("Contact1", strobj);
console.log(localStorage)




// Retrieving data:
contactInfo = localStorage.getItem("Contact1");
contactInfoObj= JSON.parse(contactInfo);
img= document.createElement("img");
img.src = contactInfoObj.Image;

document.getElementById("imgid").appendChild(img);
document.getElementById("fnameid").innerHTML = contactInfoObj.Fname;
document.getElementById("lnameid").innerHTML=contactInfoObj.LName;
document.getElementById("phoneid").innerHTML= contactInfoObj.Phone;
document.getElementById("emailid").innerHTML= contactInfoObj.Email;
document.getElementById("compid").innerHTML= contactInfoObj.Company;
//console.log(document.querySelector('#demo1'));