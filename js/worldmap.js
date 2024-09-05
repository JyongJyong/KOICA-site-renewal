window.addEventListener("load",function(){
	var btns = document.querySelectorAll(".cls-2");
	var box = document.querySelector("#info_box");
	var name = box.querySelector(".country_name");
	var fax = box.querySelector(".fax_number");
	var timer;


	btns.forEach((btn)=>{
		btn.addEventListener("mouseover",function(){
			var d_data = btn.getAttribute("d").split(",",2);
			var btn_X = parseFloat(d_data[0].substring(1)).toFixed(2);
			var y_Data = d_data[1].split("c",2);
			var btn_Y = parseFloat(y_Data[0]).toFixed(2);
			box.style.display = "block";
			box.style.left = btn_X+"px";
			box.style.top = btn_Y+"px";		
			console.log(btn_X+"/"+btn_Y);

			name.innerHTML = btn.dataset.name;
			fax.innerHTML = btn.dataset.fax;

			console.log(btn.dataset.name);			

			clearTimeout(timer);
		});
		btn.addEventListener("mouseout",function(){
			timer = setTimeout(function(){
				box.style.display = "none";
			},2000);
		});
	});
});