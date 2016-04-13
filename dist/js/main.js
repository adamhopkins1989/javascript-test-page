$(document).ready(function() {
    var stickyNavTop = $('.nav').offset().top;

    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});






$(document).ready(function() {
    $('.header1').click(function() {

        var hotItem = document.getElementsByClassName('hot1')

        for (var i = 0; i < hotItem.length; i++) {
            hotItem[i].className = 'cool';

        };
    });
});


$(document).ready(function() {
    $('.header').click(function() {

            var newEL = document.createElement('li');

            var newText = document.createTextNode('Tommy')

            newEL.appendChild(newText);

            var position = document.getElementsByClassName('time')[0];

            position.appendChild(newEL);

        });
    });


$(document).ready(function () {
    $(".submit").click(function () {
    	var valMsg = document.getElementById('api')
        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var age = document.getElementById('age').value;
       

        if (fname.length == 0) {
          valMsg.textContent = ("Please input a first name");
        } else if (lname.length == 0) {
           valMsg.textContent = ("Please input a last name");
        } else if (age.length == 0) {
           valMsg.textContent = ("Please input an age");
        }
    });
});