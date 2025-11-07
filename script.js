$(document).ready(function () {
  // --- Add-to-Cart Buttons ---
  $('.product-card').each(function () {
    if ($(this).find('.add-to-cart').length === 0) {
      $(this).append('<button class="add-to-cart">Add to Cart</button>');
    }
  });

  let cartCount = 0;
  $('.add-to-cart').click(function () {
    cartCount++;
    $('#cart-count').text(cartCount);
    $(this).text('Added!').delay(1000).queue(function () {
      $(this).text('Add to Cart').dequeue();
    });
  });

// --- Star Rating System ---
$('.rating .star').on('mouseenter', function() {
  const value = $(this).data('value');
  const stars = $(this).parent().children('.star');
  stars.each(function() {
    $(this).toggleClass('hovered', $(this).data('value') <= value);
  });
});

$('.rating').on('mouseleave', function() {
  $(this).find('.star').removeClass('hovered');
});


  // --- Auto Update Footer Year ---
  const year = new Date().getFullYear();
  $('footer p').text(`TRINICAL SKINCARE | Copyright Reserved @${year}`);

});
