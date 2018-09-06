$(()=>{
	const topNav = document.getElementById("myTopNav");
	const container = document.querySelector('.modal-container');
	$('.icon').click(()=>{
		if(topNav.className === 'top-nav'){
			topNav.className += " responsive";
			container.style.display = 'block';
			$('.icon').toggleClass("change");

		}else{
			topNav.className = 'top-nav'
			container.style.display = 'none';
			$(".icon").removeClass('change');
		}
	})
})