const foodOptions = [
  "Ramen",
  "Sushi",
  "Burgers",
  "Pizza",
  "Shawarma",
  "Middle Eastern",
  "Boba",
  "Café",
  "Desserts",
  "Middle Eastern Desserts"
];

const restaurantData = {
  "Ramen": [
    ["Kinton Ramen", "www.kintonramen.com", "216 Elgin St, suite 2", "4.7", "613-565-8138", "$"],
    ["Taki Ramen", "www.takiramen.ca", "170 Lees Ave", "4.8", "613-234-8888", "$"],
    ["Jinsei Ramen", "www.jinseiramen.ca", "300 Laurier Ave... 2nd Floor", "4.7", "613-563-1111", "$$"],
    ["Koichi Ramen", "www.koichiramen.com", "832 Somerset St W", "4.5", "613-680-8822", "$$"],
    ["Isshin Ramen", "www.isshinramen.com", "775 Bank St", "4.6", "613-421-6600", "$$"], 
    ["Kuma Takumi", "www.kumatakumi.com", "484 Hazeldean Rd Unit 6A", "4.8", "613-796-6866", "$$   "],
  ],
  "Sushi": [
    ["On Rice", "No Website", "248 Kent St", "4.9", "613-565-6894", "$$"],
    ["J:unique Kitchen", "www.juniquekitchen.com", "382 Cooper St", "4.6", "613-234-8877", "$$"],
    ["Sushi Fress", "www.sushifress.ca", "48 Byward Market", "4.7", "613-789-5291", "$$"],
    ["Sapporo Sushi", "www.sapporosushiottawa.com", "613-729-6018", "4.5", "613-729-6018", "$$"],
    ["Kuidaore", "www.kuidaore.ca", "420 Preston St", "4.6", "613-422-7537", "$$"],
    ["Sushi 88", "www.sushi.ca", "690 Somerset St W", "4.5", "613-233-3288", "$$"],
    ["Sushi-ro", "www.sushi-ro.com", "1123 Wellington St W", "4.6", "613-724-6088", "$$"],
    ["Kochu", "www.kochu.ca", "266 Preston St", "4.5", "613-236-0000", "$$"],
    ["Nagi Sushi", "www.osakasushi.com", "2208 St Joseph Blvd #104", "4.8", "613-830-8770", "$$"],
    ["Hanabi Japanese", "Instagram, No Website", "434 Bank St", "4.5", "613-695-8880", "$$$"]
  ],
  "Burgers": [
    ["Umbrella Burger", "www.umbrellaburger.com", "186 Preston St", "4.7", "613-230-1973", "$$"],
    ["Smash Daaddy", "www.smashdaddy.ca", "298 Preston St", "4.6", "No Phone Number", "$$"],
    ["Burger Factory", "www.burgerfactory.ca", "293 Dalhousie St#101", "4.6", "613-562-4993", "$"],
    ["The Works", "www.worksburger.com", "302 King St", "4.4", "333-111-1112", "$$"],
    ["All Out Burger", "www.alloutburger.com", "714 Gladstone Ave", "4.8", "613-223-1000", "$"],
    ["Burger Lovers", "No Website", "225 Laurier Ave E", "4.5", "613-422-8734", "$"],
    ["The Burger's Priest", "www.theburgerspriest.com", "1677 Bank St", "4.6", "613-260-7828", "$"],
    ["Burger Barn", "www.burgerbarn.com", "307 King St", "4.4", "333-111-1117", "$$"],
    ["Burgers n'Fries Forever", "www.burgersnfriesforever.com", "329 Bank St", "4.2", "613-230-3456", "$"],
  ],
  "Pizza": [
    ["Gabriel Pizza", "www.gabrielpizza.com", "403 Queen St", "4.4", "444-111-1113", "$$"],
    ["Retro Gusto", "www.retrogustoeats", "122 Preston St", "4.7", "613-234-5747", "$$"],
    ["Heartbreakers Pizza", "www.heartbreakerspizza.com", "465 Parkdale Ave", "4.7", "613-724-1144", "$$"],
    ["Giovanni's Snack Bar & Pizzeria", "www.giovannisnackbar.com", "376 Booth St", "4.8", "613-238-9204", "$$"],
    ["Farinella", "www.farinellaea.com", "492 Rochester St", "4.7", "613-422-6462", "$$"],
    ["Cumberland Pizza", "www.cumberlandpizza.com", "152 Nelson St", "4.8", "613-789-9999", "$"],
    ["Pizza Nerds", "www.pizzanerds.ca", "478 Bank St", "4.6", "613-422-2489", "$$"],
    ["Ricardo's Pizza", "www.ricardospizza.ca", "267 Bay St", "4.6", "613-233-1515", "$"],
    ["Costco", "It's Costco, you don't need a website", "1849 Merivale Rd", "4.4", "613-727-4786", "$", "Thanks for showing me Costco pizza is delisious!"],
    ["Tennessy Williams", "www.twpizza.squarespace.com", "1082 Wellington St. W", "4.5", "613-722-0000", "$$"]
  ],
  "Shawarma": [
    ["Shawarma Palace", "www.shawarmapalace.ca", "464 Rideau St", "4.3", "613-789-9533", "$$"],
    ["Shawarma Time & Place", "shawarmatimeandplace.ca", "6 Byward Market Square", "4.9", "613-241-2882", "$"],
    ["Shawarma Royale", "No Website", "240 Sparks St", "4.4", "No Phone Number", "$"],
    ["Mr. Fez Shawarma", "mrfez.square.site", "129 Bank St", "4.6", "613-230-7077", "$"],
    ["Shawarma King", "www.shawarmakingottawa.com", "395 Bank St", "4.1", "613-233-1282", "$"],
    ["Shawarma AL MOUNA", "No Website", "1266 Wellington St. W", "4.8", "613-725-3030", "$"],
    ["Shawarma Chef", "www.shawarmachef.ca", "2012 Tenth Line Rd", "4.7", "613-834-4700", "$"],
    ["Falafel Scoop & Shawarma", "www.falafelscoop.com", "398 Kent St", "4.7", "613-421-8000", "$"],
    ["Super Bite Shawarma", "No Website", "1577 Alta Vista Dr", "4.8", "613-248-8111", "$"]
  ],
  "Middle Eastern": [
    ["Solomon’s Oven", "www.solomonsoven.ca", "1065 Wellington St", "4.9", "343-588-3595", "$"],
    ["Jericho", "www.jerichorestaurant.com/contact", "840 Bank St", "4.5", "613-235-1289", "$$"],
    ["Phynicia Restaurant", "www.phynicia.ca", "605 Longfields Dr Unit: 9", "4.8", "613-440-3050", "$"],
    ["Ayla's Social Kitchen", "www.aylassocial.ca", "338 Preston St", "4.8", "343-984-4486", "$$"],
    ["Tirweka", "www.tirweka.com", "473 Hazeldean Rd Unit 9", "4.6", "613-836-1777", "$$"],
    ["A La Istanbul Turkish Cuisine", "www.alaistanbul.ca", "140 Rideau St", "4.7", "613-562-0888", "$$"],
    ["Eddy Lebanese cuisine", "No Website", "204 Dalhousie St", "4.3", "613-879-2552", "$"],
    ["Laheeb Elite ( On Bank @Rosebella)", "www.laheebrestaurants.ca", "2895 Bank St", "4.6", "613-739-0707", "$$"],
  ],
  "Boba": [
    ["Tealive", "www.tealive.ca", "675 Somerset St W", "4.3", "613-680-7388", "$$"],
    ["Chatime Bubble Tea", "www.chatime.ca", "695 Somerset St W", "4.7", "613-366-4006", "$$"],
    ["Xing Fu Tang", "www.xingfutangottawa.ca", "175 Main St Unit 2", "4.9", "343-588-9555", "$$"],
    ["CoCo Fresh Tea & Juice", "www.cocofreshtea.ca", "290 Bank St", "4.3", "613-233-1996", "$$"],
    ["Meow Tea", "www.meowtea.ca", "279 Elgin St", "4.6", "612-230-8588", "$$"],
    ["Gong Cha", "www.gong-cha.ca", "18 Holland Ave", "4.3", "613-722-6365", "$$"],
    ["Hi T", "www.hiteaottawa.ca", "1076 Wellington St. W", "4.7", "613-722-7888", "$$"],
    ["Yeazecha", "www.clover.com/online-ordering/yeazecha-ottawa", "181 Richmond Rd", "5.0", "514-699-0068", "$$"],
    ["The Alley", "www.the-alley.ca", "513 Sussex Dr", "4.3", "613-421-8090", "$$"],
    ["Lazy Panda", "No Website", "174a Rideau St", "4.2", "613-422-5696", "$$"]
  ],
  "Café": [
    ["Mocha Mirage Café", "www.mochamirage.com", "226 Bank St", "4.7", "No Phone Number", "$"],
    ["Aria Cafe Ottawa", "No Website", "22 Cleopatra Dr", "4.9", "613-261-2018", "$"],
    ["Drip House", "www.driphousecoffee.ca", "692 Somerset St W", "4.4", "613-680-2468", "$"],
    ["Café Raphaël", "www.caferaphael.com", "101 Champagne Ave S", "4.9", "No Phone Number", "$"],
    ["Arlington Five", "www.arlingtonfive.ca", "5 Arlington Ave", "4.7", "613-233-7959", "$"],
    ["Parliament Café", "No Website", "189 Sparks St", "4.6", "613-255-2706", "$"],
    ["Ceasar Rosa's U-Rock Café", "Instagram Page", "986 Wellington St. W", "4.9", "No Phone Number", "$"],
    ["Little Victories Coffee Roasters", "www.lvcoffee.ca", "44 Elgin St", "4.5", "613-805-7489", "$"],
    ["Art House", "www.thearthousecafe.ca", "555 Somerset St W", "4.3", "613-230-9555", "$"],
    ["Miss Bean Café", "No Website", "87 Murray St", "4.4", "343-588-1684", "$"],
    ["Happy Goat Coffee Co.", "No Website", "35 Laurel St", "4.6", "613-822-3383", "$"]
  ],
  "Desserts": [
    ["Crumbl", "www.crumblcookies.ca", "1377 Woodroffe Ave unit C", "4.4", "$$", ""],
    ["Dessert First", "No Website", "1071 Bank St", "4.7", "343-588-0434", "$$"],
    ["Delysées Luxury Desserts", "www.delysees.com", "225 Marche Way 107 - unit B", "4.3", "613-416-7824", "$$"]
    ["En Chimnies", "www.chimniescakes.com", "117 Bank St", "4.8", "613-299-4397", "$$"],
    ["Dolci Sapori", "www.dolcisaporicafe.ca", "939 Somerset St W", "4.9", "613-230-7535", "$$"],
    ["Oh My Choco", "No Website", "1054B Ogilvie Rd", "4.8", "613-744-7486", "$$"],
    ["Oh So Good", "www.ohsogood.ca", "54 Byward Market Square", "4.1", "613-241-8028", "$$"],
    ["Yummy Waffle", "www.yummywaffle1.com", "369 Bank St", "4.9", "343-227-3074", "$$"],
    ["Choux Atelier", "www.choux-atelier.ca", "222 Queen St", "4.6", "343-988-3568", "$"]
    ["Lokma", "www.lokma.ca", "1611 Bank St", "4.4", "613-695-8844", "$"]
  ],
};

let currentFood = "";
let currentRestaurant = null;

const welcomeScreen = document.getElementById("welcome-screen");
const foodScreen = document.getElementById("food-screen");
const restaurantScreen = document.getElementById("restaurant-screen");
const detailsScreen = document.getElementById("details-screen");

const foodOptionsDiv = document.getElementById("food-options");
const restaurantOptionsDiv = document.getElementById("restaurant-options");
const restaurantTitle = document.getElementById("restaurant-title");

document.getElementById("start-btn").addEventListener("click", () => {
  showScreen(foodScreen);
  renderFoodOptions();
});

document.getElementById("back-to-welcome-btn").addEventListener("click", () => {
  showScreen(welcomeScreen);
});

document.getElementById("back-to-food-btn").addEventListener("click", () => {
  showScreen(foodScreen);
});

document.getElementById("back-to-restaurants-btn").addEventListener("click", () => {
  showScreen(restaurantScreen);
});

document.getElementById("back-to-foods-btn").addEventListener("click", () => {
  showScreen(foodScreen);
});

document.getElementById("random-food-btn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * foodOptions.length);
  currentFood = foodOptions[randomIndex];
  renderRestaurantOptions();
  showScreen(restaurantScreen);
});

document.getElementById("random-restaurant-btn").addEventListener("click", () => {
  const restaurants = restaurantData[currentFood];
  const randomIndex = Math.floor(Math.random() * restaurants.length);
  currentRestaurant = restaurants[randomIndex];
  renderDetails();
  showScreen(detailsScreen);
});

function showScreen(screenToShow) {
  const screens = [welcomeScreen, foodScreen, restaurantScreen, detailsScreen];
  screens.forEach(screen => screen.classList.add("hidden"));
  screenToShow.classList.remove("hidden");
}

function renderFoodOptions() {
  foodOptionsDiv.innerHTML = "";

  foodOptions.forEach(food => {
    const button = document.createElement("button");
    button.textContent = food;
    button.addEventListener("click", () => {
      currentFood = food;
      renderRestaurantOptions();
      showScreen(restaurantScreen);
    });
    foodOptionsDiv.appendChild(button);
  });
}

function renderRestaurantOptions() {
  restaurantOptionsDiv.innerHTML = "";
  restaurantTitle.textContent = `Top 10 ${currentFood} Places`;

  const restaurants = restaurantData[currentFood];

  restaurants.forEach(restaurant => {
    const button = document.createElement("button");
    button.textContent = restaurant[0];
    button.addEventListener("click", () => {
      currentRestaurant = restaurant;
      renderDetails();
      showScreen(detailsScreen);
    });
    restaurantOptionsDiv.appendChild(button);
  });
}

function renderDetails() {
  document.getElementById("detail-name").textContent = currentRestaurant[0];
  document.getElementById("detail-website").textContent = currentRestaurant[1];
  document.getElementById("detail-address").textContent = currentRestaurant[2];
  document.getElementById("detail-rating").textContent = currentRestaurant[3];
  document.getElementById("detail-phone").textContent = currentRestaurant[4];
  document.getElementById("detail-price").textContent = currentRestaurant[5];
}