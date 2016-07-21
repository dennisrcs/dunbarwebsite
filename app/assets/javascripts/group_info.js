$(document).ready(function() {
    $('#group_rules').parent().addClass('active');
    $('.files_group_rules').parent().addClass('active');
    
    $('ul.group-info-category li').bind('click', function() {
        $('ul.group-info-category .active').removeClass('active');
        $(this).addClass('active');
        firstChild = $(this).children().first();
        id = firstChild.attr('id');
        $('ul.group-info li.active').removeClass('active');
        $('ul.group-info .files_' + id).parent().addClass('active');
    });
});