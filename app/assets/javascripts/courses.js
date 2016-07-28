$(document).ready(function() {
    $('.courses-list ul.course-info li:first-child').addClass('active');
    $('.courses-list .course-files .course-files-container:first-child').addClass('active');
    
    $('ul.course-info li').bind('click', function() {
        $('ul.course-info .active').removeClass('active');
        $(this).addClass('active');
        id = $(this).attr('id');
        $('.course-files .course-files-container.active').removeClass('active');
        $('.course-files .course-files-container.files_' + id).addClass('active');
    });
    
    $("ul.course-info li").hover(
        function() {
            thirddEl = $(this).children().first().next().next();
            thirddEl.css('background', '#e0e0e0');
        },
        function() {
            thirddEl = $(this).children().first().next().next()
            thirddEl.css('background', 'white');
        }
    );
});