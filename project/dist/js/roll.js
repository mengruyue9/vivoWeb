define(["jquery"],function ($) {
	function roll() {
		
		var oBtns = $("#banner").find("ol").find("li");
		var oUl = $("#banner").find("ul");
		var aLis = oUl.find("li");
		//设置iNow，代表当前显示图片的下标
		var iNow = 0;
		var timer = null;
		oBtns.click(function(){
			iNow = $(this).index();
			alert(iNow);
			tab();
		})


		//添加自动滚动
		timer = setInterval(timerInner, 3000);


		//鼠标移入 移出
		$("#banner").hover(function(){
			clearInterval(timer);
		}, function(){
			timer = setInterval(timerInner, 3000);
		})



		function timerInner(){
			iNow++;
			tab();
		}

		//点击切换图片
		function tab(){
			//1、先让当前被点击的按钮active
			oBtns.attr("class", "").eq(iNow).attr("class", "active");


			//最后一张图片，active的按钮也是下标0
			if(iNow == aLis.size() - 1){
				oBtns.eq(0).attr('class', "active");
			}

			//2、切换图片
			oUl.stop().animate({
				top: -606 * iNow
			}, 1000, function(){
				if(iNow == aLis.size() - 1){
					oUl.css("top", 0);
					iNow = 0;
				}
			});
		}
		/**/
		
	}
	return {
		roll: roll
	}
})