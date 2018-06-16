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

  // Homepage
  $('#featured_content_link').on('click', Site.openUpcomingModal);
  $('#clipboard_close').on('click', Site.openUpcomingModal);
  $('#archive_link_down').on('click', Site.scrollToProjects);
 $('#project_link_down').on('click', Site.scrollToProjects);
  Site.startSlideshow();

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
  $('#bulletin_background').fadeToggle();
}

Site.scrollToProjects = function(){
  $('html, body').animate({
    scrollTop: $("#projects_container").offset().top + 2
  }, 1500);
}

Site.startSlideshow = function(){
  count = 0;
  slides = $('.homepage_slide');
  setInterval(function(){
    count = count + 1
    if (count >= slides.length){
      count = 0
    } 
    slides.removeClass('current');
    slides.eq(count).addClass('current');

  }, 1500);
}