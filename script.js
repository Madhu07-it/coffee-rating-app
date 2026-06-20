const coffeeImages = {
  Espresso: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500",
  Cappuccino: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
  Latte: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
  Mocha: "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500"
};

async function loadCoffees() {

  const response = await fetch("/api/coffees");
  const coffees = await response.json();

  const coffeeList = document.getElementById("coffeeList");
  coffeeList.innerHTML = "";

  coffees.sort((a,b)=>
    (b.total_rating/(b.rating_count||1))
    -
    (a.total_rating/(a.rating_count||1))
  );

  if(coffees.length > 0){

    document.getElementById("topCoffee").innerHTML =
      `☕ ${coffees[0].name}`;
  }

  coffees.forEach(coffee=>{

    const avg =
      coffee.rating_count === 0
      ? 0
      : (coffee.total_rating /
         coffee.rating_count).toFixed(1);

    coffeeList.innerHTML += `
    <div class="card">

      <img
      class="coffee-image"
      src="${coffeeImages[coffee.name]}"
      alt="${coffee.name}">

      <div class="card-content">

      <h2>${coffee.name}</h2>

      <div class="rating">
      ⭐ ${avg}/5
      </div>

      <p>${coffee.rating_count} Ratings</p>

      <div class="stars">
        <button onclick="rateCoffee(1,${coffee.id})">⭐</button>
        <button onclick="rateCoffee(2,${coffee.id})">⭐⭐</button>
        <button onclick="rateCoffee(3,${coffee.id})">⭐⭐⭐</button>
        <button onclick="rateCoffee(4,${coffee.id})">⭐⭐⭐⭐</button>
        <button onclick="rateCoffee(5,${coffee.id})">⭐⭐⭐⭐⭐</button>
      </div>

      </div>

    </div>
    `;
  });
}

async function rateCoffee(rating,id){

  await fetch(`/api/rate/${id}`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({rating})
  });

  loadCoffees();
}

loadCoffees();