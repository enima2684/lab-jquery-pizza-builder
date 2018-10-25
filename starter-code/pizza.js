// Write your Pizza Builder JavaScript in this file.


// modify default options

/**
 * Object to handle all operations on pizza items
 *
 * @param btnSelector : css button selector for the item
 * @param pizzaContainerSelector : css selector for the pizza container of the item. For example for gluten free crust, this would be '.crust'
 * @param pizzaItemSelector : css selector for the pizza item - this is the item to toggle
 * @param priceSelector : css selector for the li containing the price in the menu
 * @constructor
 */
function Item(btnSelector, pizzaContainerSelector, pizzaItemSelector, priceSelector, initalState){
  this.btnSelector            = btnSelector;
  this.pizzaContainerSelector = pizzaContainerSelector;
  this.pizzaItemSelector      = pizzaItemSelector;
  this.priceSelector          = priceSelector;
  this.initialState           = initalState;

}

// On click handler
/**
 * Add an on-click event handler on the item
 */
Item.prototype.addOnClickHandler = function () {

  $(this.btnSelector).click(()=>{

    if(this.pizzaContainerSelector === this.pizzaItemSelector){
      // in this case, just toggle the object
      $(this.pizzaItemSelector).toggle();
    }
    else{
      // in this case, toggle the class
      $(this.pizzaContainerSelector).toggleClass(this.pizzaItemSelector.substr(1));
    }

    $(this.btnSelector).toggleClass("active");
    $(this.priceSelector).toggle();
    updateTotalPrice();
  });
};

/**
 *
 * @param isActive : Boolean to say if the item is activated or not
 */
Item.prototype.setState = function(isActive){

  if(isActive){
    $(this.pizzaContainerSelector).addClass(this.pizzaItemSelector.substr(1));
    $(this.btnSelector).addClass("active");
    $(this.priceSelector).show();
  }
  else {
    $(this.pizzaContainerSelector).removeClass(this.pizzaItemSelector.substr(1));
    $(this.btnSelector).removeClass("active");
    $(this.priceSelector).hide();
  }
  updateTotalPrice();
};



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



/**
 * Set the initial state of the pizza
 */
function setInitialState(pizzaItems){
  pizzaItems.forEach(item=>{
    item.setState(item.initialState);
  });
}

function buttonsOnClickHandler(pizzaItems){
  pizzaItems.forEach(item=>{
    item.addOnClickHandler();
  });

}


// ---------------------------------------------

$(document).ready(()=>{

  // populate the list of pizza items

  var pizzaItems = [];

  // Pepperonni
  pizzaItems.push(
    new Item(
      btnSelector=".btn-pepperonni",
      pizzaContainerSelector=".pep",
      pizzaItemSelector=".pep",
      priceSelector=".price-pepperonni",
      initialState=true
    )
  );


  // Mushroom
  pizzaItems.push(
    new Item(
      btnSelector=".btn-mushrooms",
      pizzaContainerSelector=".mushroom",
      pizzaItemSelector=".mushroom",
      priceSelector=".price-mushroom",
      initialState=true
    )
  );


  // Green Peppers
  pizzaItems.push(
    new Item(
      btnSelector=".btn-green-peppers",
      pizzaContainerSelector=".green-pepper",
      pizzaItemSelector=".green-pepper",
      priceSelector=".price-green-pepper",
      initialState=true
    )
  );



  // White Sauce
  pizzaItems.push(
    new Item(
      btnSelector=".btn-sauce",
      pizzaContainerSelector=".sauce",
      pizzaItemSelector=".sauce-white",
      priceSelector=".price-white-sauce",
      initialState=false
    )
  );


  // Crust
  pizzaItems.push(
    new Item(
      btnSelector=".btn-crust",
      pizzaContainerSelector=".crust",
      pizzaItemSelector=".crust-gluten-free",
      priceSelector=".price-gluten-free-crust",
      initialState=false
    )
  );


  // Set the initial state of every item
  setInitialState(pizzaItems);

  // add on click button events handlers
  buttonsOnClickHandler(pizzaItems);
});






