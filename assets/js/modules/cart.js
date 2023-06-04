export function initCart(){


let amountProduct = document.querySelector("#amount__text");
let cartText = document.querySelector(".cart__text");
let cartTotal = document.querySelector("#cart__total");
const buttonMinus = document.querySelector(".button--minus");
const buttonPlus = document.querySelector(".button--plus");
const button = document.querySelector("#button");
const productBox = document.querySelector("#product");
const buttonCart = document.querySelector(".button__cart");
const cartBox = document.querySelector("#cart__box");
const buttonDelete = document.getElementsByClassName("product__delete");
let cont = 1;

function doRemoveProduct(button){
	const buttons = button.currentTarget;
	const box = buttons.parentElement;
	box.remove();
	cartTotal.style.display = "none";
	let cartEmpty = `<p class="cart__text active">Your cart is empty.</p>`
    productBox.innerHTML = cartEmpty;
    cartTotal.innerText = 0;
}

function toogleCart(){
	cartBox.classList.toggle("active");
}

function doAddProductToCart(total,sumOfProducts){
		let cardProduct = `<div class="product__item">
                <img src="./assets/images/image-product-1-thumbnail.jpg" alt="image product" class="product__image">
              <p class="product__title">Fall Limited Edition Sneakers $125.00 x ${parseInt(sumOfProducts)} <span translate="no" class="product__title__bold"> $${total.toFixed(2)}</span></p>
              <button class="product__delete">
               
              </button>
          
              <button translate="no" class="button-cart button-check">
                Checkout
              </button>
            </div>`
   	productBox.innerHTML = cardProduct;
    buttonDelete[0].addEventListener("click" , doRemoveProduct);
}

function doSendDataToCart(){
		let quantityInCart = parseInt(cartTotal.innerText);
		let chosenQuantity = parseInt(amountProduct.innerHTML);
		let quantityProductDoProduto = 125;
		quantityInCart += chosenQuantity
		let currentProductQuantity = cartTotal.innerHTML =+ quantityInCart;
		cartTotal.style.display = "block";
		let total = quantityProductOfProduto * currentProductQuantity;
		doAddProductToCart(total,currentProductQuantity);
		cartText.classList.remove("active");
		cont = 1;
		amountProduct.innerHTML = cont;
		
}


function doReducesTheAmountOfProduct(){
	if (amountProduct.innerText > 1){
		let quantityProduct = amountProduct.innerHTML = --cont;
	}
}


function doIncreasesTheAmountOFProduct(){
	let quantityProduct = amountProduct.innerHTML = ++cont;
	
}
buttonCart.addEventListener("click", toogleCart);
button.addEventListener("click", doSendDataToCart);
buttonPlus.addEventListener("click", doIncreasesTheAmountOFProduct);
buttonMinus.addEventListener("click", doReducesTheAmountOfProduct);


}
