// Write your Pizza Builder JavaScript in this file.


// modify default options

/**
 * Set the initial state of the pizza
 */
function setInitialState(){
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
  $(".price-gluten-free-crust").hide();

  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $(".price-white-sauce").hide();

  updateTotalPrice();
}


function buttonsOnClickHandler(){

  // Toggle toppings
  $(".btn-pepperonni").click(() => {
      $(".pep").toggle();
      $(".btn-pepperonni").toggleClass("active");
      $(".price-pepperonni").toggle();
      updateTotalPrice();
  });

  $(".btn-mushrooms").click(() => {
      $(".mushroom").toggle();
      $(".btn-mushrooms").toggleClass("active");
      $(".price-mushroom").toggle();
      updateTotalPrice();
  });

  $(".btn-green-peppers").click(() => {
      $(".green-pepper").toggle();
      $(".btn-green-peppers").toggleClass("active");
      $(".price-green-pepper").toggle();
      updateTotalPrice();

  });

  $(".btn-crust").click(()=>{
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price-gluten-free-crust").toggle();
    updateTotalPrice();
  });

  $(".btn-sauce").click(()=>{
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price-white-sauce").toggle();
    updateTotalPrice();

  });

}

function updateTotalPrice(){

  // calculate the price
  var totalPrice = 10; // initial price of empty pizza
  $(".ingredient-list li").each(
    (index, li) => {
      if(li.style.display !== 'none'){
        totalPrice += Number(li.querySelector("span").innerHTML);
      }
    }
  );

  // update it on the dom
  totalPrice = "$"+ totalPrice;
  $("aside strong").html(totalPrice);
}


// ---------------------------------------------

setInitialState();
buttonsOnClickHandler();


