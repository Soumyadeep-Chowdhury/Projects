const CONVENIENCE_FEES = 99;
let bagItemsObjects;
onLoad();

function onLoad(){
  loadBagItemsObjects();
  displayBagItems();
  displayBagSummary();

}

function displayBagSummary(){
  let bagSummaryElement = document.querySelector('.bag-summary');

  let totalItem = bagItemsObjects.length;
  let totalMRP = 0;
  let discount = 0;
  let finalPayment = 0;

  bagItemsObjects.forEach(bagItem =>{
    totalMRP += bagItem.original_price;
    discount =+ bagItem.original_price - bagItem.current_price;
  });
  finalPayment = totalMRP - discount + CONVENIENCE_FEES;


  bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">Rs${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-Rs${discount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">Rs ${CONVENIENCE_FEES}</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">Rs ${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
  `;
}

function loadBagItemsObjects(){
  
  bagItemsObjects = bagItems.map(itemId =>{
    for(let i=0;i<item.length;i++){
      if(itemId==item[i].id){
        return item[i];
      }
    }
  });
  console.log(bagItemsObjects);
}

function displayBagItems(){
  let containerElement = document.querySelector('.bag-items-container');
  let innerHtml ='';
  bagItemsObjects.forEach(bagItem => {
    innerHtml += generateItemHTML(bagItem);
  });
  containerElement.innerHTML = innerHtml;
}

function removeFromBag(itemId){
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems' , JSON.stringify(bagItems));
  loadBagItemsObjects();
  displayBagIcon();
  displayBagItems();
  displayBagSummary();
}

function generateItemHTML(item){
  return `
    <div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.item_image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company_name}</div>
      <div class="item-name">M${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount-percentage">(${item.discounted_price}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag(${item.id});">X</div>
  </div>
  `;
}