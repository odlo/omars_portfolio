$(document).ready(function(){
    var panel_open = false;
    $(".drop-button1").click(function(){
        if (panel_open == true) {
            $(".body-text1").slideDown("slow");
            panel_open = false;
        } else {
            $(".body-text1").slideUp("slow");
            panel_open = false;
        }
    })
})
