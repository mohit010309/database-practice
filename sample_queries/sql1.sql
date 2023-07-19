-- create table orders (
-- 	order_id int not null,
--     order_number int,
--     product_id int,
--     customer_id int,
--     primary key(order_id),
--     foreign key(product_id) references products(id),
--     foreign key(customer_id) references customers(id)
-- );
--     
-- show tables;
-- describe orders;

-- insert into orders values
-- (1,4362,2,1),
-- (2,3254,1,1);

-- select orders.order_number,customers.first_name,customers.last_name,customers.address
-- from orders 
-- inner join customers on orders.customer_id = customers.id;

select orders.order_number, products.*
from orders
inner join products on orders.product_id=products.id;

