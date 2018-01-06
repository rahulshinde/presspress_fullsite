Site = {}

$(document).ready(function(){
  Site.document_height = $(document).height() - $(window).height();
  $(document).on('scroll', scrollImages);

  $('#open_modal').on('click', openModal);
  $('#close_modal').on('click', closeModal);

  $(window).on("load", function() {
    Site.image_height = $('.images').height() - $(window).height();
  })

  $(window).on('resize', resizeHandler);
})

resizeHandler = function(){
  Site.image_height = $('.images').height() - $(window).height();
  Site.document_height = $(document).height() - $(window).height();
}

openModal = function(){
  $('#modal_container').addClass('show');
  $('#close_modal').slideToggle('right');
}

closeModal = function(){
  $('#modal_container').removeClass('show');
  $('#close_modal').slideToggle();
}

scrollImages = function(){
  scroll_pos = $(document).scrollTop();
  proportion = scroll_pos/Site.document_height;

  $('.images').css('transform', 'translateY(-' + proportion * Site.image_height + 'px)');
}