Site = {}

$(document).ready(function(){
  Site.document_height = $(document).height() - $(window).height();
  $(document).on('scroll', lockAndScroll);

  $('#open_modal').on('click', openModal);
  $('#close_modal').on('click', closeModal);

  $('#hamburger').on('click', toggleNav);

  Site.projects_container = $('#projects_container')

  $(window).on("load", function() {
    Site.image_height = $('.images').height() - $(window).height();
    Site.project_top = Site.projects_container.offset().top;
  })

  $('#featured_content_link').on('click', Site.openUpcomingModal);

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

toggleNav = function(){
  console.log('hello');
  $('body').toggleClass('nav_show');
}

lockAndScroll = function(){
  scroll_pos = $(document).scrollTop();
  proportion = scroll_pos/Site.document_height;

  if (scroll_pos >= Site.project_top){
    $('#site').addClass('locked');
  }else{
    $('#site').removeClass('locked');

  }

  $('.images').css('transform', 'translateY(-' + proportion * Site.image_height + 'px)');
}

Site.openUpcomingModal = function(){
  $('#featured_content').fadeToggle();
}