$(()=>{
	console.log("works");
	const topNav = document.getElementById("myTopNav");
	const container = document.querySelector('.modal-container');
	$('.icon').click(()=>{
		console.log(topNav.className);
		if(topNav.className === 'top-nav'){
			topNav.className += " responsive";
			container.style.display = 'block';

		}else{
			topNav.className = 'top-nav'
			container.style.display = 'none';
			container.removeClass('.container')
		}
	})
})