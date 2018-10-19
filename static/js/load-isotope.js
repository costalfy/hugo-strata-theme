/* Load isotope grid */
$( document ).ready(function() {
    var $grid = $('.grid').imagesLoaded( function() {
        $grid.isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
      });
});