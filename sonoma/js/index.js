(function(){
  var modal = document.querySelector('#addCartModal');
  var modalHeader = document.querySelector('#addCartModal .modal-header');
  var quantity = document.querySelector("#quantity");

  function expandClickHandler(el){
    let arrowEl = el.currentTarget.querySelector("span");
     if(arrowEl.classList.contains("arrow")){
       arrowEl.classList.toggle("arrow-right");
       arrowEl.classList.toggle("arrow-down");
       arrowEl.parentElement.parentElement.querySelector(".expand").classList.toggle("collapsed");
     }
  }

  function smallImageClickHandler(el){
    document.querySelector("#product-large-image img").src = el.currentTarget.getAttribute("data-large");
    document.querySelectorAll(".product-small-image").forEach(function(item){
      item.classList.remove("selected-image");
    });
    el.currentTarget.classList.toggle("selected-image");
  }

  // When the user clicks the button, open the modal
  function addCartHandler(){
    if(quantity.value !== "" && quantity.value > 0){
      document.querySelector("#display-text").innerHTML = "Item Added to the cart successfully !!";
      modalHeader.innerHTML = "Success";
      quantity.classList.remove("error");
      modalHeader.classList.add("success");
      modalHeader.classList.remove("error");
    }else{
      document.querySelector("#display-text").innerHTML = "Please enter the quantity to add item to the cart";
      modalHeader.innerHTML = "Error";
      quantity.classList.add("error");
      modalHeader.classList.add("error");
      modalHeader.classList.remove("success");
    }
    modal.style.display = "block";
  }

  function quantityOnChange(){
    (this.value > 0) ? quantity.classList.remove("error") : quantity.classList.add("error");
  }
  // When the user clicks on <span> (x), close the modal
  function modalClose() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  function windowClick(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  function showMenu(){
    document.querySelector(".nav").classList.toggle("responsive");
  }

  function attachEvents(){
    document.querySelectorAll(".expandable").forEach(function(el){
      el.addEventListener("click", expandClickHandler);
    })

    document.querySelectorAll(".product-small-image").forEach(function(el){
      el.addEventListener("click", smallImageClickHandler);
    });

    document.querySelector("#addToCartBtn").addEventListener("click", addCartHandler);
    document.querySelector("#addCartModal .close").addEventListener("click", modalClose);
    window.addEventListener("click", windowClick);

    document.querySelector(".nav li.icon").addEventListener("click", showMenu);
    document.querySelector("#quantity").addEventListener("change", quantityOnChange);
  }

  attachEvents();
})();
