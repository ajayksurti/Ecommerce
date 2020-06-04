## Ecommerce prototype:

## DB design

## product
id
name
description
price - float
logo
created_at
updated_at
deleted_at

## order:
id
cust_title
cust_name
cust_email_address
cust_contact_number
user_id => leave it 1 as default at the moment
subtotal
discout => 0 at the moment
special_notes => leave it blank at the moment
total
status => inprogress/cancled/completed/
created_at
updated_at
deleted_at

## order_details
id
order_id
product_id
qty
price
created_at
updated_at
deleted_at
notes => item specific notes (leave it blank at the moment)
