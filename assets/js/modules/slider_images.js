export function initSliderImages(){

const imageIcons = document.querySelectorAll(".image-icon");
const imageMain = document.querySelector(".main__image");
const buttonimage = document.querySelectorAll(".btn__image");
const modal = document.querySelector("#modal");
const buttonClose = document.querySelector(".btn__close");


const imageMainMobile = document.querySelector(".image__mobile");
const buttonPrevious = document.querySelector("#button__previuos");
const buttonNext = document.querySelector("#button__next");

const imageModal = document.querySelector(".modal__image");
const buttonsModal = document.querySelectorAll("#button__modal");
const buttonsImageModal = document.querySelectorAll(".btn__image--modal");


/* main Image*/

function doChangeimage(src){
	imageMain.setAttribute("src", src);
}



function doremoveSelectedOfButtonsMain(){
	buttonimage.forEach((button)=>{
		button.classList.remove("selected");
	})
}


function getButtonChosen(event){
	const buttonChosen = event.currentTarget;
	const buttonChosenImage = buttonChosen.querySelector(".image-icon").src;
	doremoveSelectedOfButtonsMain();
	buttonChosen.classList.add("selected");
	doChangeimage(buttonChosenImage);

}


buttonimage.forEach(event=>{
	event.addEventListener("click", getButtonChosen);

})


/* troca da imagem no mobile */
let  number = 1;

function doChangeImageMainMobile(position){
	let changeImageModal = imageMainMobile.style.backgroundImage =`url(../assets/images/image-product-${position}.jpg)`;
}

function doChangeImageToNext(){
	if (number < 4){
		++number;
		doChangeImageMainMobile(number)
	}
	else{
		number= 1;
		doChangeImageMainMobile(number)
	}
}
function doChangeImageToBack(){
	if (number > 1) {
		--number;
		doChangeImageMainMobile(number)	
	}
	else{
		number = 4;
		doChangeImageMainMobile(number)

	}
}

buttonNext.addEventListener("click" , doChangeImageToNext)
buttonPrevious.addEventListener("click" , doChangeImageToBack)


/* modal */
let  numberModal = 1;

function doOpenModal(){
	modal.classList.add("active");
}
function doCloseModal(){
	modal.classList.remove("active");
}

imageMain.addEventListener("click", doOpenModal);
buttonClose.addEventListener("click", doCloseModal);


function doremoveSelectedOfButtons(index){
	buttonsImageModal.forEach((buttonImage)=>{
		buttonImage.classList.remove("selected");
		buttonsImageModal[index-1].classList.add("selected");
	})
		
}


function doChangeImageMainModal(position){
	let changeImageModal = imageModal.style.backgroundImage =`url(../assets/images/image-product-${position}.jpg)`;
}

buttonsImageModal.forEach(function (item,index){
	item.addEventListener("click" , (event)=>{
		numberModal = index +1;
		doremoveSelectedOfButtons(numberModal)
		doChangeImageMainModal(numberModal);
	})
})


function buttonClicked(event){
	let buttonClickedModal = event.currentTarget;
	if (buttonClickedModal.classList.contains("button__previuos--modal")) {
		if (numberModal > 1){
			numberModal--;
			doChangeImageMainModal(numberModal)
			doremoveSelectedOfButtons(numberModal)
		}else{
			numberModal = 4;
			doChangeImageMainModal(numberModal)
			doremoveSelectedOfButtons(numberModal)
		}
	}
	else{
		if (numberModal < 4){
			numberModal++;
			doChangeImageMainModal(numberModal)
			doremoveSelectedOfButtons(numberModal)
		}else{
			numberModal = 1;
			doChangeImageMainModal(numberModal)
			doremoveSelectedOfButtons(numberModal)
		}
	}
}

buttonsModal.forEach(function (button){
	button.addEventListener("click",buttonClicked)
})


}