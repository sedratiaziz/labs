const express = require("express")
const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


app.get("/", (req, res) => {
  res.send('home page!')
});



app.get("/greetings/:userName", (req, res) => {
    console.log(req.params.userName)
    res.send("Welcome to Homepage! " + req.params.userName);
  });  


  app.get("/roll/:num", (req, res)=>{
    let number = req.params.num;

    if (number === NaN) {
        res.send('you must specify a Number.')
    } else {
        let reslt = Math.floor(Math.random() * (number + 1))
        res.send("You rolled a " + reslt)
    }
  })



  app.get("/collectibles/:indexParameter", (req, res)=>{
    let IndxParam = req.params.indexParameter
    
    if (IndxParam == null) {
        res.send('This item is not yet in stock. Check back soon!')
    }

    const name = collectibles.find((oneCollec)=>{
        return oneCollec.name == collectibles[IndxParam].name
    })

    const price = collectibles.find((oneCollec)=>{
        return oneCollec.price == collectibles[IndxParam].price
    })


    res.send("So, you want the "+ name +"? For"+ price +", it can be yours!")


  })




  app.get("/shoes", (req, res)=>{
    const price = req.query.price;
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const type = req.query.type;

    if (req.query) {
        shoes.forEach(shoe => {
            res.send(shoe)
        });
    } 
    
    shoes.forEach(shoe => {
        if (price >= minPrice && price <= maxPrice && type == shoe.type) {
            res.send(shoe.name)            
        } 
    });
    
  })



















app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

