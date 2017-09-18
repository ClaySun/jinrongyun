//banner的动画滚动
$(function(){
	var banner_swiper = new Swiper('.banner .swiper-container', {
        pagination: '.banner .swiper-pagination',
        paginationClickable: true,
        autoplay : 3000,
    });
    
    var box3_swiper = new Swiper('.box3_left .swiper-container', {
        pagination: '.box3_left .swiper-pagination',
        paginationClickable: true,
        autoplay : 3000,
    });
    
    var swiper = new Swiper('.box2_all .swiper-container', {
        pagination: '.box2_all .swiper-pagination',
        paginationClickable: true,
        autoplay : 3000,
         slidesPerView: 3,
        spaceBetween: 60,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
    
    var box4_swiper = new Swiper('.box4_all .swiper-container', {
        pagination: '.box4_all .swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        autoplay : 3000,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
})

//box1的鼠标滑过特效
$(function(){
	$(".item3").hover(
		function(){
			var that=this;
			item3Timer=setTimeout(function(){
				$(that).find("div").animate({width:217,height:153},300,function(){
					$(that).find("h2").fadeOut(200);
					$(that).find("dl").fadeIn(200);
				});
			},100);
			
			},
		function(){
			var that=this;
			clearTimeout(item3Timer);
			$(that).find("dl").fadeOut(200);
			$(that).find("div").stop().animate({width:0,height:0},300);
			$(that).find("h2").fadeIn(200);
			}
		)
});


/* center modal 模态框居中*/
$(function(){
function centerModals(){
    $('.modal').each(function(i){
        var $clone = $(this).clone().css('display', 'block').appendTo('body');    var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find('.modal-content').css("margin-top", top);
    });
}
$('.modal').on('show.bs.modal', centerModals);
$(window).on('resize', centerModals);
})