$(document).ready(function(){
    var panel_open = false;
    $(".drop-button1").click(function(){
        if (panel_open == false) {
            $(".body-text1").slideDown("slow");
            panel_open = true;
        } else {
            $(".body-text1").slideUp("slow");
            panel_open = false;
        }
    })
})

$('img').on('click', function(e) {
    $('#imgViewer').html('').append( $(e.currentTarget).clone().removeClass('img-responsive').removeClass('img-thumbnail') )
    $('#viewImg').modal('show')
})

$('img').each(function(i,e) {
    $(e).wrap('<div class="img-wrapper"></div>')
})
