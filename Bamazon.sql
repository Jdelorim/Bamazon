DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  primary key(item_id)
);
SELECT * FROM bamazonDB.products;
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Sirens of Titan", "Books", 10.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beyond the Black Rainbow", "DVD", 20.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Being John Malkovich", "DVD", 22.00, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dune", "Books", 9.00, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Martian Chronicles", "Books", 7.00, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Childhood's End", "Books", 6.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Abaddon's Gate", "Books", 15.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Holy Motors", "DVD", 12.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Renaissance", "DVD", 33.00, 44);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Endless", "DVD", 35.00, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("I Robot", "DVD", 13.00, 2);

DELETE from products where item_id=1;

UPDATE products SET stock_quantity = 2 WHERE product_name = "The Endless";
UPDATE products SET stock_quantity=300 WHERE item_id=1;
select * from products where item_id=4;
