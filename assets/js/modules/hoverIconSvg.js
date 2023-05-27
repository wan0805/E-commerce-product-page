export function hoverIcons(){
	const imagesButtonModal = document.querySelectorAll(".image__button--modal");
	const imageCloseModal = document.querySelector(".image__close");


	const imageCart = document.querySelector(".button__image");

	imageCart.addEventListener("mouseover", hoverImage);
	imageCart.addEventListener("mouseleave", leaveImage);

	function hoverImage(event){
		const image = event.currentTarget;
		image.src = "../assets/images/icon-cart-hover.svg";

	}

	function leaveImage(event){
		const image = event.currentTarget;
		image.src = "../assets/images/icon-cart.svg";
	}




	imagesButtonModal.forEach((image)=>{
		image.addEventListener("mouseover",hoverImageModal);
		image.addEventListener("mouseleave",leaveImageModal);
	})

	function hoverImageModal(event){
		const image = event.currentTarget;
		if(image.classList.contains("previous")){
			image.src = "../assets/images/icon-previous-hover.svg";
		}
		else{
			image.src = "../assets/images/icon-next-hover.svg";
		}
		

	}


	function leaveImageModal(event){
		const image = event.currentTarget;
		if(image.classList.contains("previous")){
			image.src = "../assets/images/icon-previous.svg";
		}
		else{
			image.src = "../assets/images/icon-next.svg";
		}
	}


	imageCloseModal.addEventListener("mouseover", hoverImageCloseModal)
	imageCloseModal.addEventListener("mouseleave", leaveImageCloseModal)

	function hoverImageCloseModal(event){
		const image = event.currentTarget;
		image.src = "../assets/images/icon-close-modal-hover.svg";
		

	}

	function leaveImageCloseModal(event){
		const image = event.currentTarget;
		image.src = "../assets/images/icon-close-modal.svg";
}
}

