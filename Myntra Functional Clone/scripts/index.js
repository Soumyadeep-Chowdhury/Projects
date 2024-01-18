

const item = [
  {
    id: '001',
    item_image : 'images/1.jpg',
    rating : {
      stars : 4.5,
      noOfReviews : 1400,
    },
    company_name : 'Carlton London',
    item_name : 'Rhodium-Plated CZ Floral Studs',
    current_price : 606,
    original_price : 1045,
    discounted_price : 42,
    return_period: 14,
    delivery_date: '10 Oct 2023',
  },

  {
    id: '002',
    item_image : 'images/2.jpg',
    rating : {
      stars : 4.3,
      noOfReviews : 24,
    },
    company_name : 'CUKOO',
    item_name : 'Women Padded Halter Neck Swimming Dress',
    current_price : 1507,
    original_price : 2599,
    discounted_price : 42,
    return_period: 14,
    delivery_date: '10 Oct 2023',
  },

  {
    id: '003',
    item_image : 'images/3.jpg',
    rating : {
      stars : 4.1,
      noOfReviews : 249,
    },
    company_name : 'NUEVOSDAMAS',
    item_name : 'Women Red & White Printed A-Line Knee-Length Skirts',
    current_price : 495,
    original_price :  1599,
    discounted_price : 69,
    return_period: 14,
    delivery_date: '10 Oct 2023',
  },

  {
    id: '004',
    item_image : 'images/4.jpg',
    rating : {
      stars : 5.0,
      noOfReviews : 10,
    },
    company_name : 'ADIDAS',
    item_name : 'Indian Cricket ODI Jersey',
    current_price : 999,
    original_price : 999,
    discounted_price : 0,
    return_period: 14,
    delivery_date: '10 Oct 2023',
  },
  
  {
    id: '005',
    item_image : 'images/5.jpg',
    rating : {
      stars : 4.2,
      noOfReviews : 3500,
    },
    company_name : 'Roadster',
    item_name : 'Pure Cotton T-shirt',
    current_price : 489,
    original_price : 1399,
    discounted_price : 65,
    return_period: 14,
    delivery_date: '10 Oct 2023',
  },

  {
    id: '006',
    item_image : 'images/6.jpg',
    rating : {
      stars : 0.0,
      noOfReviews : 0,
    },
    company_name : 'Nike',
    item_name : 'Men ReactX Running Shoes',
    current_price : 14995,
    original_price : 14995,
    discounted_price : 0,
    return_period: 14,
    delivery_date: '10 Oct 2023',
  },

  {
    id: '007',
    item_image : 'images/7.jpg',
    rating : {
      stars : 4.2,
      noOfReviews : 388,
    },
    company_name : 'The Indian Garage Co',
    item_name : 'Men Slim Fit Regular Shorts',
    current_price : 639,
    original_price : 1599,
    discounted_price : 60,
    return_period: 14,
    delivery_date: '10 Oct 2023',
  },

  {
    id: '008',
    item_image : 'images/8.jpg',
    rating : {
      stars : 4.2,
      noOfReviews : 5200,
    },
    company_name : 'Nivea',
    item_name : 'Men Fresh Deodrant 150ml',
    current_price : 142,
    original_price : 285,
    discounted_price : 50,
    return_period: 14,
    delivery_date: '10 Oct 2023',
  },
];

let bagItems;
onLoad();

function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [] ;
  displayItemsOnHomepage();
  displayBagIcon();
}


function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems' , JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon(){
  let bagitemCountElement = document.querySelector('.bag-item-count');
  if(bagItems.length > 0){
    bagitemCountElement.style.visibility = 'visible';
    bagitemCountElement.innerText = bagItems.length;
  } else {
    bagitemCountElement.style.visibility = 'hidden';
  }
  
}

function displayItemsOnHomepage(){
    let itemsContainerElement = document.querySelector('.items-container');

    if(!itemsContainerElement){
      return;
    }

    let innerHtml = '';

    item.forEach(item => {
      innerHtml += `
      <div class="item-container">
      <img class="item-image" src="${item.item_image}" alt="item-image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
      </div>
      <div class="company-name">
          ${item.company_name}
      </div>
      <div class="item-name">
          ${item.item_name}
      </div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discounted_price}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id});">Add to Bag</button>
      </div>
      `
    });

  itemsContainerElement.innerHTML = innerHtml ;
}

