var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    for(var i=0;i<10;i++){
    console.log("-------------------------------------");
    console.log("Item ID: ",res[i].item_id);
    console.log("Product Name: ",res[i].product_name);
    console.log("Type: ",res[i].department_name);
    console.log("Price: $",res[i].price);
    console.log("-------------------------------------");
  
    }
    
  //  connection.end();
  promtMe();
   
  });
}
function promtMe(){
inquirer.prompt([{
    type: "input",
    name:"item_id",
    message:"Type in the Item ID of the item you would like to purchase?"
 },
 {
    type: "input",
    name:"units",
    message:"How many units of this item would you like to purchase?"
}]).then(function(val) {
    //console.log("YOU CHOOSE: ", val.item_id)
    //console.log("YOU CHOOSE THIS MANY: ", val.units)
    connection.query("SELECT * FROM products", function(err,res){

        var itemPicked = parseFloat(val.item_id)-1;
        var realItem = val.item_id;
        var yourAmount = parseInt(val.units);
        var quant = res[itemPicked].stock_quantity;
        var price = res[itemPicked].price;
        var totalAmount = price * yourAmount;
        if(val.units > quant){
            console.log("Insufficient quantity!");
            console.log("Only " + quant + " left in stock!")
        } else {
            console.log("---------------------------------------");
            console.log("You have selected to buy " + yourAmount + " copies of " + res[itemPicked].product_name);
            console.log("Your total bill is: ", totalAmount);
            update(yourAmount, quant, realItem);
           
        }
    })
})
}

function update(userquant, oldStock,itemID){
    var newStock = oldStock - userquant;
    var ns = newStock.toString();
    
    console.log(ns,itemID);
    console.log("UPDATE products SET stock_quantity = " + ns + " WHERE item_id = " + itemID);
    console.log("UPDATE products SET stock_quantity = " + ns + " WHERE item_id = 1");
    connection.query("UPDATE products SET stock_quantity = " + ns + " WHERE item_id = 1", function(err,res){
        if(err) throw err;
        console.log("The new stock is: ",res);

    })
    
}