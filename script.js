const coffeeImages = {
  Espresso:
    "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  Cappuccino:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  Latte:
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  Mocha:
    "https://images.unsplash.com/photo-1517705008128-361805f42e86"
};

async function loadCoffees() {

    const response = await fetch("/api/coffees");
    const coffees = await response.json();

    coffees.sort((a,b)=>b.votes-a.votes);

    const coffeeList = document.getElementById("coffeeList");
    coffeeList.innerHTML = "";
const avg =
coffee.rating_count === 0
? 0
: (coffee.total_rating / coffee.rating_count).toFixed(1);
    coffees.forEach((coffee,index)=>{

    const avg =
coffee.rating_count === 0
? 0
: (coffee.total_rating / coffee.rating_count).toFixed(1);

coffeeList.innerHTML += `
<div class="card">

<img class="coffee-image"
src="${coffeeImages[coffee.name]}"
alt="${coffee.name}">

<h2>${coffee.name}</h2>

<p>⭐ Rating: ${avg}/5</p>

<div class="stars">
<button onclick="rateCoffee(1,${coffee.id})">⭐</button>
<button onclick="rateCoffee(2,${coffee.id})">⭐⭐</button>
<button onclick="rateCoffee(3,${coffee.id})">⭐⭐⭐</button>
<button onclick="rateCoffee(4,${coffee.id})">⭐⭐⭐⭐</button>
<button onclick="rateCoffee(5,${coffee.id})">⭐⭐⭐⭐⭐</button>
</div>

</div>
`;
    });
}
async function rateCoffee(rating, id){

    await fetch(`/api/rate/${id}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({rating})
    });

    loadCoffees();
}