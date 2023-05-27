export function initMenuMobile(){
	const buttonMenu = document.querySelector("#menu__button");
	const modalMenu = document.querySelector("#modal-menu");
	const buttonCloseMenu = document.querySelector(".btn__close-mobile");

	buttonMenu.addEventListener("click" , ()=>{
		modalMenu.classList.add("active--mobile");
	})

	buttonCloseMenu.addEventListener("click" , ()=>{
		modalMenu.classList.remove("active--mobile");
	})
	}
