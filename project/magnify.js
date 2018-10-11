define(["jquery","jquery-cookie"],function ($) {
	function magnify() {
		$(function () {
			$.ajax({
				url: 'data/index.json',
				success: function(res){
					// alert(res);
					//将数据通过循环遍历，添加到页面上
					var html = "";
					for(var i = 0; i < res.length; i++){
						html += `<div class = "list${res[i].id}">
						<div class="img"><img src="${res[i].img}" alt=""></div>
						<h4>${res[i].title}</h4>
						<a href="">${res[i].desc}</a>
						</div>`;
					}
					$("#quick_nav").html(html);
					
				},
				error: function(msg){
					alert(msg);
				}
			})
			$("#quick_nav div").mouseenter(function(){
				$(this).stop().animate({
					right: -10
				})
				//加载已经加入购物车的数据
				sc_msg();

			});

			$("#quick_nav div").mouseleave(function(){
				$(this).stop().animate({
					right: -270
				})
			});
		})
	
	}
	return {
		magnify:magnify
	}
})