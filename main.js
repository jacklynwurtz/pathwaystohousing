// Script to open navbar hamburger menu when viewing from mobile device
$(document).ready(function() {
    $(".burger").on("click", function() {
        $("nav li").toggleClass("open");
    });
});