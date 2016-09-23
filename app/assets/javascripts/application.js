// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require_self
//= require jquery
//= require jquery-migrate-min
//= require jquery_ujs
//= require_tree .
$(document).ready(function() {
    $(".flash_danger").delay(2000).fadeOut(1000);
    $(".flash_info").delay(2000).fadeOut(1000);
    
    $(window).scroll(function() {
      if ($(this).width() > 1100) {
        if ($(this).scrollTop() > 200){
          $(".logo img").css("height", "70px");
          $(".logo a").css("font-size", "20pt");
          $("nav").css("height", "100px");
        }
        else {
          $(".logo img").css("height", "100px");
          $(".logo a").css("font-size", "24pt");
          $("nav").css("height", "200px");
        }
      }
    });
});

