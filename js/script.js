$(document).ready(function() {
	$('#toggle-search').on('click', function() {
         $('#searchBar').toggle('display: inline-block');
    });

    $('portfolio').isotope({
    	itemSelector: '.item',
    	layoutMode: 'fitRows'
    });
    $('.portfolio-menu ul li').click(function() {
    	$('.portfolio-menu ul li').removeClass('active');
    	$(this).addClass('active');

    	var selector = $(this).attr('data-filter');
    	$('.portfolio').isotope({
    		filter:selector
        });
    });
    $('#target').submit(function(e) {
    	alert('Your form sent successfully:)')
    	e.preventDefault();
    })
})