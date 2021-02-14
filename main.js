 /////////////////////////////////////// Get the modal of Speakout
 var modal = document.getElementById("myModal1");
 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = document.getElementById("myImg1");
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption1");
 var captionText4 = document.getElementById("caption11");
 var captionText5 = document.getElementById("caption111");
 var captionText2 = document.getElementById("para");
 var captionText3 = document.getElementById("para2");
 img.onclick = function(){
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = "This project is a middleware between the psychological doctor and the patient. It helps people who are afraid of making an appointment with a psychological doctor, for different reasons such as , the expensive check up , afraid to be judged from the society, afraid of being called psycho, and many other reasons. this website will help them to overcome this fearness by making it available for them to ask any question they want in order to get the answer, support and help they need from our doctors.​​" 
   captionText4.innerHTML="Used Technologies : React, Redux, Node.js, Express.js, MySQL,Bootstrap,Javascript, Video calls, Notifications."
   captionText5.innerHTML="My Role : Full-Stack Developer."
   captionText2.innerHTML = "Below is the link to our deployed Project: ";
   captionText3.innerHTML = "https://speakout-2.herokuapp.com/"
 }
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() { 
   modal.style.display = "none";
 }


  ////////////////////////////// Get the modal of DAFAH
 var modal2 = document.getElementById("myModal2");
 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img2 = document.getElementById("myImg2");
 var modalImg2 = document.getElementById("img02");
 var caption = document.getElementById("caption2");
 var caption4 = document.getElementById("caption22");
 var caption5 = document.getElementById("caption222");
 var caption2 = document.getElementById("para12");
 var caption3 = document.getElementById("para22");
 img2.onclick = function(){
   modal2.style.display = "block";
   modalImg2.src = this.src;;
   caption.innerHTML = "This project allows people to upload images and description of winter supplies, and allows people in need to go on and choose what they need. to later be delivered to them.​​​" 
   caption4.innerHTML="Used Technologies : React, Node.js, Express.js, MongoDB,Javascript, Bootstrap"
   caption5.innerHTML="My Role : Full-Stack Developer."
   caption2.innerHTML = "Below is the link to our deployed Project: ";
   caption3.innerHTML = "https://dafah-c9.herokuapp.com/Homepage"
 }
 
 // Get the <span> element that closes the modal
 var span2 = document.getElementsByClassName("close2")[0];
 
 // When the user clicks on <span> (x), close the modal
 span2.onclick = function() { 
   modal2.style.display = "none";
 }


 /////////////////////////////////////// Get the modal of CarSooq
 var modal3 = document.getElementById("myModal3");
 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img3 = document.getElementById("myImg3");
 var modalImg3 = document.getElementById("img03");
 var captionT = document.getElementById("caption3");
 var captionT4 = document.getElementById("caption33");
 var captionT5 = document.getElementById("caption333");
 var captionT2 = document.getElementById("para13");
 var captionT3 = document.getElementById("para23");
 img3.onclick = function(){
   modal3.style.display = "block";
   modalImg3.src = this.src;
   captionT.innerHTML = "CarSooq Project Our website is considered about selling cars for X company to grab the buyers attention. It narrows the buyers wide searches in different websites or even live searchings. As a wider point of view for our future built out website it will have features that even sellers (individuals or companies) can advertise their cars which they want to sell so we will have even a wider web and a great connection between buyers and sellers.​​" 
   captionT4.innerHTML="Used Technologies : React, Node.js, Express.js, MySQL,Javascript, Material UI."
   captionT5.innerHTML="My Role : Full-Stack Developer."
   captionT2.innerHTML = "Below is the link to our deployed Project: ";
   captionT3.innerHTML = ""
 }
 
 // Get the <span> element that closes the modal
 var span3 = document.getElementsByClassName("close3")[0];
 
 // When the user clicks on <span> (x), close the modal
 span3.onclick = function() { 
   modal3.style.display = "none";
 }




 ///////////////////////////////////////////////////////


$(document).ready(function() {
$("#cf7_controls").on('click', 'span', function() {
$("#cf7 img").removeClass("opaque");

var newImage = $(this).index();

$("#cf7 img").eq(newImage).addClass("opaque");

$("#cf7_controls span").removeClass("selected");
$(this).addClass("selected");
});
});