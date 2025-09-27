// 3 products with images
const products = [
  { name: "curtains", price: 1200, desc: "High-performance laptop", img: "curtains.jpg" },
  { name: "cusion", price: 800, desc: "Latest smartphone", img: "cusion.jpg" },
  { name: "furniture", price: 200, desc: "Smart watch", img: "furniture.jpg" },
  { name: "indoorplants", price: 1200, desc: "High-performance laptop", img: "indoorplants.jpg" },
  { name: "interior", price: 800, desc: "Latest smartphone", img: "interior.jpg" },
  { name: "mirror", price: 200, desc: "Smart watch", img: "mirror.jpg" },
  { name: "cupbord", price: 1200, desc: "High-performance laptop", img: "cupbord.jpg" },
  { name: "showcase", price: 800, desc: "Latest smartphone", img: "showcase.jpg" },
   { name: "lamp", price: 800, desc: "Latest smartphone", img: "lamp.jpg" },
   { name: "sofa", price: 800, desc: "Latest smartphone", img: "sofa.jpg" },
   { name: "bed", price: 800, desc: "Latest smartphone", img: "bed.jpg" },
   { name: "dinning table", price: 800, desc: "Latest smartphone", img: "dinning table.jpg" }
  
];

// Background images
const homeBackgrounds = ["home1.jpg", "home2.jpg"];
const productBackgrounds = ["product1.jpg", "product2.jpg"];

// Set random background
function setRandomBackground() {
  const body = document.body;
  if (body.classList.contains("home")) {
    const img = homeBackgrounds[Math.floor(Math.random() * homeBackgrounds.length)];
    body.style.background = `url('${img}') no-repeat center center fixed`;
    body.style.backgroundSize = "cover";
  } else if (body.classList.contains("product")) {
    const img = productBackgrounds[Math.floor(Math.random() * productBackgrounds.length)];
    body.style.background = `url('${img}') no-repeat center center fixed`;
    body.style.backgroundSize = "cover";
  }
}

// Display products on home page
function displayProducts() {
  const container = document.querySelector(".products");
  if (!container) return;
  container.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" class="product-img">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
    `;
    div.onclick = () => showProduct(product.name, product.price, product.desc, product.img);
    container.appendChild(div);
  });
}

// Save product details and navigate to product page
function showProduct(name, price, desc, img) {
  localStorage.setItem('productName', name);
  localStorage.setItem('productPrice', price);
  localStorage.setItem('productDesc', desc);
  localStorage.setItem('productImg', img);
  window.location.href = 'product.html';
}

// Load product details on product page
function loadProductDetails() {
  if (document.getElementById('productName')) {
    document.getElementById('productName').innerText = localStorage.getItem('productName');
    document.getElementById('productPrice').innerText = 'Price: $' + localStorage.getItem('productPrice');
    document.getElementById('productDesc').innerText = 'Description: ' + localStorage.getItem('productDesc');

    const imgSrc = localStorage.getItem('productImg');
    if (imgSrc) {
      let imgElement = document.createElement("img");
      imgElement.src = imgSrc;
      imgElement.alt = localStorage.getItem('productName');
      imgElement.className = "detail-img";
      document.body.insertBefore(imgElement, document.getElementById('productName').nextSibling);
    }
  }
}

// Go back to home
function goBack() {
  window.location.href = 'index.html';
}


 function enableSearch() {
  const searchBar = document.getElementById('searchBar');
  if (!searchBar) return;

  searchBar.addEventListener("keyup", e => {
    const query = e.target.value.toLowerCase();

    document.querySelectorAll(".product").forEach(product => {
      const productName = product.querySelector("h3").textContent.toLowerCase();
      product.style.display = productName.includes(query) ? "block" : "none";
    });
  });
}

// On page load
window.onload = function() {
  setRandomBackground();
  displayProducts();
  loadProductDetails();
  enableSearch();
}