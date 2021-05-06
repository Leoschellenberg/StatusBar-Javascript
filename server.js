(function validateParamStatusBar(){
  if(status == "Em análise"){
			$(".line-progress").css("width", "7%");
			$(".step01").addClass("active");
		}
		if(status == "Em revisão"){
			$(".line-progress").css("width", "21.28%");
			$(".step02").addClass("active");
		}
		if(status == "Em apresentação"){
			$(".line-progress").css("width", "35.5657143%");
			$(".step03").addClass("active");
		}
		if(status == "Em aprovação"){
			$(".line-progress").css("width", "49.8514286%");
			$(".step04").addClass("active");
		}
		if(status == "Revisão GUT"){
			$(".line-progress").css("width", "64.1371429%");
			$(".step05").addClass("active");
		}
		if(status == "Reavaliação"){
			$(".line-progress").css("width", "78.4228572%");
			$(".step06").addClass("active");
		}
		if(status == "Encerrado"){
			$(".line-progress").css("width", "100%");
			$(".step07").addClass("active");
		}
});
