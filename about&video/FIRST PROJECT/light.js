$(document).ready(function(){
    $('.moods').click(function(){
        $(this).toggleClass('active')
    });
    $(".moods").click(function(){
        /* main */
        $('body,nav,.nav-links li a,.pop h2,.container h1,.footer,.footer a,.view .container .info').toggleClass('L');

        /* about us */ 
        $('.header,.found .container h2,.found .container p,.mission .mission-text h2,.mission .mission-text p,.culture .container .teamwork h2,.culture .container .teamwork p,.sponsors').toggleClass('L');

        /* comparing pages*/ 
        $('.intro .container p,.top .container p,.top,tr:nth-child(even),th,td').toggleClass('L');

        /* booking form */
        $('.container-form').toggleClass('L');

        $('header').toggleClass('txtLight');

      });
});