$(document).ready(function() {
    $('.nav-top li.menu-icon a').click(function() {
        navTop = $('.nav-top');
        if (navTop.attr("class") === "nav-top") {
            navTop.attr("class", "nav-top responsive");
        } else {
            navTop.attr("class", "nav-top");
        }
    });
});