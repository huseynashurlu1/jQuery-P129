
// let text = document.getElementById('text');
// let btn = document.getElementById('btn1');

// btn.addEventListener('click',function(){
//   text.style.color = 'red'
// })

// $(document).ready(function(){
//     $('#btn1').click(function(){
//         $('<input type="submit" />').css('color','red');
//     })

//     // $('#btn1').click(function(){
//     //     $('h1.intro').css('color','red');
//     // })
// })

// $(function(){
//     $('#btn1').click(function(){
//         $('#text').css('color','red');
//     })
// })


// $(document).ready(function(){
//     $('#first').hover(function(){
//         $(this).css('border-radius','50%')
//     })
//     // $('#first').mouseleave(function(){
//     //     $(this).css('border-radius','0%')
//     // })
// })


// addClass / removeClass / toggleClass

// $(window).scroll(function(){
//     if($(window).scrollTop() > 150) {
//         $('header').css('background-color','purple');
//         $('header').css('height','50px');
//     }
//     else{
//         $('header').css('background-color','plum');
//         $('header').css('height','70px');
//     }
// })


// // hide / show / toggle
// // slideUp / slideDown / slideToggle

// $('#btn2').click(function(){
//     $('#first').slideUp(2000);
// })



// $('#btn3').click(function(){
//     $('#first').css('background-color','green').slideUp(2000).slideDown(2000);
// })


// $('button').click(function(){
//     $('#first').animate({
//         width: "+=50px"
//     })
// })

// $('button').click(function() {
//     $('h1').hide();
//     alert('text is hidden');
// })

// $('button').click(function() {
//     $('h1').hide(function(){
//         alert('text is hidden');
//     });
// })

var X = $.noConflict();
X('button').click(function() {
    X('input').attr('type','text');
})

console.log($('#h1').parentsUntil('body'));
console.log($('input').nextAll());