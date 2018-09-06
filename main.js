$(() => {

    // topnav
    const topNav = document.getElementById("myTopNav");
    const container = document.querySelector('.modal-container');
    $('.icon').click(() => {
        if (topNav.className === 'top-nav') {
            topNav.className += " responsive";
            container.style.display = 'block';
            $('.icon').toggleClass("change");

        } else {
            topNav.className = 'top-nav'
            container.style.display = 'none';
            $(".icon").removeClass('change');
        }
    })



    const parallax = document.getElementById('parallax');
    window.addEventListener('scroll', function() {
        // paralax
       let offset = window.pageYOffset;
                    parallax.style.backgroundPositionY = offset * 0.4 + "px";
        // make each section visible when scroll
        let pageTop = $(this).scrollTop()
        let pageBottom = pageTop + $(this).height();
        let sectionTags = document.getElementsByTagName('section');

        for (var i = 0; i < sectionTags.length; i++) {
                        let tag = sectionTags[i]
                        if ($(tag).position().top < pageBottom) {
                            $(tag).addClass('visible')
                        } else {
                            $(tag).removeClass('visible')
                        }
                    }
        // fade out header content 
        if(pageTop > 90){
        	$('.tittle').fadeOut('slow');
        	$('#parallax').css('background-image', "url()")
        }else{
        	$('.tittle').fadeIn('slow');
        	$('#parallax').css('background-image', "url(background.png)")
        }
    })

    // move on mouse over 

    $('#parallax').mousemove(function(e) {
        var amountMovedX = (e.pageX * -1 / 6);
        var amountMovedY = (e.pageY * -1 / 6);
        $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    });

}) // end of jquery