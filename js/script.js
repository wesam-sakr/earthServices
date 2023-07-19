/* ------------------------- service form page ------------------------- */ 
// select date
if ($(".datepicker").length > 0) {
    $( ".datepicker" ).datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
    });
}

$("#formID").submit( function (e) {
    e.preventDefault();
    let form=$(this).serialize()
    $.ajax({
        type: "POST",
        url: "//jsonplaceholder.typicode.com/posts",
        data:form,
        encode: true,
        headers: {
        "Accept": "application/json"
        },
    }).done(function(data) {
        $(".response")
        .empty()
        .append(JSON.stringify(data, null, 2))
        console.log(data);
    }).fail(function() {
        alert('An error occurred please try again later.')
    })
});
if ($(".add-comment").length > 0) {
  let addComment=document.querySelector(".add-comment");
  addComment.style.display="none";
  $("#form-comment").submit( function (e) {
    e.preventDefault();
    let form=$(this).serialize()
  $.ajax({
    type: "POST",
    url: "//jsonplaceholder.typicode.com/posts",
    data:form,
    encode: true,
  }).done(function(data,status) {
        if(status="success"){
          addComment.style.display="flex"
          $('.add-comment .Stars').css("--rating",rating)
          $(".p-comment")
          .empty()
          .append((data.comment))
          $(".h-name")
          .empty()
          .append((data.userName))
        }
       
  }).fail(function() {
    alert('An error occurred please try again later.')
  })
  });
}

/* ------------------------- profile page ------------------------- */ 
// change password type
if ($("#user-pass").length > 0){
    var pass = document.getElementById('user-pass')
    function passFunction(x) {
        x.classList.toggle("bi-unlock");
        if( pass.type == "password"){
            pass.setAttribute("type","text");
        }else{
            pass.setAttribute("type","password");
        }
    }
}
// upload profile pic
if ($(".profile").length > 0) {
    const imgDiv = document.querySelector('.profile-pic');
    const img = document.querySelector('#photo');
    const file = document.querySelector('#file');
    const uploadBtn = document.querySelector('#uploadBtn');
    //if user hover on img div 
    imgDiv.addEventListener('mouseenter', function(){
        uploadBtn.style.display = "block";
    });
    //if we hover out from img div
    imgDiv.addEventListener('mouseleave', function(){
        uploadBtn.style.display = "none";
    });
    //when we choose a pic to upload
    file.addEventListener('change', function(){
    const choosedFile = this.files[0];
    if (choosedFile) {
        const reader = new FileReader(); 
        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(choosedFile);
    }
    });
}
// view and hide complete and canceled 
if ($(".profile").length > 0) {
    let btnActive=document.querySelector(".btns .progress-btn");
    let completeBtn=document.querySelector(".btns .complete-btn");
    let canceledBtn=document.querySelector(".btns .canceled-btn");
    let inProgress=document.querySelector(".in-progress");
    let complete=document.querySelector(".complete");
    let canceled=document.querySelector(".canceled");
    btnActive.addEventListener('click', function(){
    inProgress.style.display="block";
    complete.style.display="none";
    canceled.style.display="none";
    });
    completeBtn.addEventListener('click', function(){
    inProgress.style.display="none";
    complete.style.display="block";
    canceled.style.display="none";
    });
    canceledBtn.addEventListener('click', function(){
    inProgress.style.display="none";
    complete.style.display="none";
    canceled.style.display="block";
    });
}

/* ------------------------- centers page ------------------------- */ 
// price slider

var $slider = $("#slider");
var $fill = $(".bar .fill");

function setBar() {
	$fill.css("width", $slider.val() + "%");
    $slider.attr("value" , $slider.val())

}

$slider.on("input", setBar);

setBar();

/* ------------------------- public code ------------------------- */ 
// scroll up arrow
if ($("#top").length > 0) {
    var up= document.getElementById("top")
    window.addEventListener("scroll" , function(){
        if(document.documentElement.scrollTop > 400){
            up.style.display="block"
        }
        else up.style.display="none"
    })
}
// your rate
var rating
$(function () {
    $("#rateYo").rateYo({

    starWidth: '15px' ,
    ratedFill:'#FFBD24',
    normalFill:'#CCCCCC',
    rtl:true,
    });  
    $("#rateYo").rateYo().on("rateyo.change", function (e, data) {
        rating = data.rating;
        $(this).parent().find('.result').text(rating);
    })
});
// bookmark
if ($(".bookMark").length > 0) {
    function bookMarkFunction(x) {
        x.classList.toggle("fa-solid");
        x.classList.toggle("fa-regular")
    }
}
// replace text
$.fn.toggleText = function(t1, t2){
    if(this.text() == t1){
     this.text(t2);
   }else{                   
     this.text(t1);
   }
    return this;
};
// change lang
$('#lang').click(function(){
   $('#lang span').toggleText('AR','En');
});
// change button text
$('#cart .center-details').click(function(){
    $(this).toggleText('عرض التفاصيل','اخفاء التفاصيل');
 });
//loader
setTimeout(function () {
    $('.loader').fadeOut(1000);
}, 2000);

// nice select init
// $("select").niceSelect();
//  aos animation
AOS.init();






