// JavaScript Document
$(function(){
	function qh_slide(selector){
		$(selector).each(function(){
			var $this=$(this);
			$this.slide({ titCell:".num li", mainCell:".pic",effect:"fold", autoPlay:true,trigger:"click",startFun:function(i){$this.find(".txt li").eq(i).animate({"bottom":0}).siblings().animate({"bottom":-45});}});
		})
	}
	qh_slide(".pic_list");
	if($(".txtMarquee-top").length>0){
		$(".txtMarquee-top").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:4,interTime:50,trigger:"click",flag:true,extra:{height:288}});
	}
	if($(".bszn_list2").length>0){
		$(".bszn_list2").slide({mainCell:"ul",autoPlay:false,effect:"left",vis:6,interTime:800,trigger:"click"});
	}
	if($(".bszn_list3").length>0){
		$(".bszn_list3").slide({mainCell:"ul",autoPlay:false,effect:"left",vis:8,interTime:800,trigger:"click"});
	}
	
	
	function b_hover(selector,even){
		even=even?even:'hover';
		$(selector).on(even,function(){
			var $this=$(this);
            var index=$this.index();
			$this.addClass("on").siblings("li").removeClass("on");
			$this.parent().parent().next().children("[tid="+index+"]").addClass("block").siblings().removeClass("block");
			if(!$this.hasClass("show") && index==0){
				$this.addClass("show");
				var id="#tid"+index;
				$(".bszn_list1").slide({titCell:".hd li", mainCell:".bd .ulWrap",autoPlay:false,effect:"leftLoop",trigger:"click"});
			}
        });
	}
	b_hover(".tit_hov li");
	b_hover(".tit_click li","click");
	$(".tit_click1 li h3").click(function(){
		$(this).parent().toggleClass("on");
	});
	function a_more(selector){
		$(selector).hover(function(){
			var str = $(this).attr("href");
			$(this).parent().parent().next().children().attr("href",str);
		});
	}
	a_more(".a_more li a");
	
	$(".qh_con .tit2").hover(function(){
		$(this).find(".arrow").addClass("on");
		$(this).parent().siblings().find(".arrow").removeClass("on");
		$(this).next().stop(true,true).slideDown(500);
		$(this).parent().addClass("on").siblings().removeClass("on")
		$(this).parent().siblings().find(".con1").stop(true,true).slideUp(500)
	})
	$(".con3 li").click(function(){
		$(this).removeClass("on");
		$(this).animate({"width":"502px"},500);
		$(this).siblings("li").animate({"width":"111px"},500);
	})
	$(".menu .sub_menu").hover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(this).find(".menu_con").stop(true,true).slideDown(500);
		$(this).siblings().find(".menu_con").stop(true,true).slideUp(10);
	},function(){
		$(this).find(".menu_con").stop(true,true).slideUp(500);
	})
	$(".bszn_list1 .ulWrap li,.bszn_list2 li,.bszn_list3 li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
})