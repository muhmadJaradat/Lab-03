var name = prompt('Hello! Enter your name here please');
var time = prompt ('What time is right now "only even number (0-24)"')
if (time > 18) {
    alert('Good evening ' + name);}
    else if (time > 12) {
    alert('Good afternoon ' + name);}
    else if (time > 0) {
    alert('Good morning ' + name);}
    else {
     alert('Welcome ' + name);}
    


var education = prompt ('what is your education?');
var experience = prompt ('Put your experience history here');
var phone = prompt ('please enter your phone number');
var email = prompt ( 'and your email');

document.write ("Education = " )

document.write (  education ) 
document.write("<br>");

document.write('Experience = ' )
document.write(experience)
document.write("<br>");
document.write ( 'phone = ')
document.write (phone)
document.write("<br>");
document.write('Email = ')
document.write (email)
document.write("<br>");
var rate = prompt ("Please rate us (out of 5)")
while (!(rate >=0 && rate <=5)) {var rate = prompt ("Please rate us (out of 5)") }
for (var i=0; i < rate; i++) {document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1200px-Golden_star.svg.png" width="200" height="150">')}

