
### Sign up


> POST
#### Request
```
{
    "name":"dang",
    "dateofbirth":"06-06-2000",
    "email":"abc",
    "address":"123, dadd",
    "gender":"male",
    "phone":"123123123123",
    "username":"dang",
    "password":"123"
}
```

#### Response
##### Success
status: 201
```
{
    "id": 5,
    "name": "dang",
    "dateofbirth": "06-06-2000",
    "email": "abc",
    "address": "123, dadd",
    "gender": "male",
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtoYW5ndXNlciIsInJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE2MzY1MDkyMjIsImV4cCI6MTYzNjU5NTYyMn0.kn08HGHaNyY5D1JCVPD2G6POaLFazqmDCq4bPg2FX8c",
    "role": "ROLE_USER",
    "phone": "123123123123"
}
```

##### Failure: 400
```
{
"errName": "Username is existed" 
}
```

### Login
link: https://cnpmmbe.herokuapp.com/login
> POST

#### Request
```
{
    "username":"Dang",
    "password":"123"
}
```

#### Response
##### Success
status: 200
```
{
    "id": 5,
    "name": "dang",
    "dateofbirth": "06-06-2000",
    "email": "abc",
    "address": "123, dadd",
    "gender": "male",
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtoYW5ndXNlciIsInJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE2MzY1MDkyNjgsImV4cCI6MTYzNjU5NTY2OH0.Dz3lQirTe4Kp1xg1fCg_mjxuwmyb5brY8aAcmmsBJHo",
    "role": "ROLE_USER",
    "phone": "123123123123"
}
```

##### Failure: 
```
{
"errName": "Username or password incorrect"
}
```

#### Get category accessories in a product
link: https://cnpmmbe.herokuapp.com/product/categoryaccessories/59

> GET

> 59 is product id

> Note: this is API for all users so you **don't need** jwt or this.
#### Request

#### Response
```
{
    "id": 60,
    "type": "binh-nuoc",
    "color": [
        "đỏ",
        "cam",
        "vàng",
        "lục",
        "lam"
    ],
    "brand": "addidas",
    "origin": "Việt Nam",
    "material": "nhựa",
    "productId": 59
}
```

### Get category clothes in a product
link: https://cnpmmbe.herokuapp.com/product/categoryclothes/55

> GET

> NOTE: 55 is product id

> Note: this is API for all users so you **don't need** jwt or this.
#### Request

#### Response
```
{
    "id": 56,
    "type": "ao-clb",
    "brand": "adidas",
    "origin": "vietnam",
    "size": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
    ],
    "color": [
        "đỏ",
        "cam",
        "vàng",
        "lục",
        "lam"
    ],
    "material": "cotton",
    "gender": "nam",
    "productId": 55
}
```

### Get category shoes in a product
link: https://cnpmmbe.herokuapp.com/product/categoryshoes/57

> GET

> 57 is a product id

> Note: this is API for all users so you **don't need** jwt or this.

#### Request

#### Response
```
{
    "id": 58,
    "style": "da-bong",
    "size": [
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "9.5"
    ],
    "color": [
        "đỏ",
        "cam",
        "vàng",
        "lục",
        "lam"
    ],
    "height": 15.0,
    "weight": 6.0,
    "material": "vải",
    "sole": "nhựa",
    "origin": "Việt Nam",
    "warranty": 12.0,
    "gender": "female",
    "productId": 57
}
```

### Get products by category
> link: https://cnpmmbe.herokuapp.com/product/category/1

> 1 is category

> You have 3 category:

> 1: category clothes

> 2: category shoes

> 3: category accessories

#### Request

#### Response
```
[
    {
        "id": 50,
        "storeId": 48,
        "category": 1,
        "name": "this is a product to test",
        "quantity": 10,
        "price": 350000.0,
        "description": "this is description",
        "image": "https://drive.google.com/uc?id=11BP5Id17EwYgDbKSV_J1GGmRQv8wYjGp&export=download"
    },
    {
        "id": 51,
        "storeId": 48,
        "category": 1,
        "name": "this is a product to test",
        "quantity": 10,
        "price": 350000.0,
        "description": "this is description",
        "image": "https://drive.google.com/uc?id=1fNDhrpJMjT2EuexO7hXUJPRkCRTu4tg5&export=download"
    },
    {
        "id": 53,
        "storeId": 48,
        "category": 1,
        "name": "congtestupdate",
        "quantity": 1000,
        "price": 50000.0,
        "description": "congtest update 1",
        "image": "https://drive.google.com/uc?id=17_UgATKxyEyqylx8Qs8l6V9QI7Gvph75&export=download"
    },
    {
        "id": 55,
        "storeId": 48,
        "category": 1,
        "name": "this is a product to test",
        "quantity": 10,
        "price": 350000.0,
        "description": "this is description",
        "image": "https://drive.google.com/uc?id=1K6I259dYXOJv3ay8gIfmhxfCZ6Ed-C17&export=download"
    },
    {
        "id": 57,
        "storeId": 48,
        "category": 1,
        "name": "this is a product to test",
        "quantity": 10,
        "price": 350000.0,
        "description": "this is description",
        "image": "https://drive.google.com/uc?id=1157pUkRa_tPvZvBmM-_XPWJeBTVl1LYB&export=download"
    },
    {
        "id": 59,
        "storeId": 48,
        "category": 1,
        "name": "this is a product to test",
        "quantity": 10,
        "price": 350000.0,
        "description": "this is description",
        "image": "https://drive.google.com/uc?id=12XdB5zIcjd5jCobmQx1MpEQDK1kDoOMm&export=download"
    },
    {
        "id": 61,
        "storeId": 48,
        "category": 1,
        "name": "this is a product to test",
        "quantity": 10,
        "price": 350000.0,
        "description": "this is description",
        "image": "https://drive.google.com/uc?id=1at3PYQKHG6RJq7n-3KpBIG--BCEECXTo&export=download"
    },
    {
        "id": 63,
        "storeId": 48,
        "category": 1,
        "name": "this is a product to test",
        "quantity": 10,
        "price": 350000.0,
        "description": "this is description",
        "image": "https://drive.google.com/uc?id=1Cs1aTPHSYHTs6JVfHu78kK3nChm-nUlz&export=download"
    },
    {
        "id": 65,
        "storeId": 48,
        "category": 1,
        "name": "this is a product to test",
        "quantity": 10,
        "price": 350000.0,
        "description": "this is description",
        "image": "https://drive.google.com/uc?id=1H05kGmusFT0EY45b3ZQGcg2bSPt65GLz&export=download"
    }
]
```

### Get category clothes by type
link: https://cnpmmbe.herokuapp.com/product/category/clothes/ao

> GET

> ao is type of clothes

#### Request

#### Response
```
[
    {
        "id": 77,
        "type": "ao",
        "brand": "adidas",
        "origin": "uk",
        "size": [
            "S",
            "M",
            "L"
        ],
        "color": [
            "Đỏ",
            "Vàng",
            "Lục"
        ],
        "material": "cotton",
        "gender": "male",
        "productId": 0
    },
    {
        "id": 79,
        "type": "ao",
        "brand": "adidas",
        "origin": "usuk",
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "color": [
            "Đỏ",
            "Vàng",
            "Cam"
        ],
        "material": "cotton",
        "gender": "male",
        "productId": 76
    }
]
```

### Get style of shoes 
link: https://cnpmmbe.herokuapp.com/product/category/shoes/da-bong

> GET

> da-bong is a style of shoes

#### Request

#### Response
```
[
    {
        "id": 72,
        "style": "da-bong",
        "size": [
            7.0,
            7.5,
            8.0,
            8.5,
            9.0,
            9.5
        ],
        "color": [
            "đỏ",
            "cam",
            "vàng",
            "lục",
            "lam"
        ],
        "height": 15.0,
        "weight": 6.0,
        "material": "vải",
        "sole": "nhựa",
        "origin": "Việt Nam",
        "warranty": 12.0,
        "gender": "female",
        "productId": 70
    }
]
```

### Get type of accessories
link: https://cnpmmbe.herokuapp.com/product/category/accessories/binh-nuoc

> GET

> binh-nuoc is one of accessories type

#### Request

#### Response
```
[
    {
        "id": 60,
        "type": "binh-nuoc",
        "color": [
            "đỏ",
            "cam",
            "vàng",
            "lục",
            "lam"
        ],
        "brand": "addidas",
        "origin": "Việt Nam",
        "material": "nhựa",
        "productId": 59
    },
    {
        "id": 69,
        "type": "binh-nuoc",
        "color": [
            "đỏ",
            "cam",
            "vàng",
            "lục",
            "lam"
        ],
        "brand": "addidas",
        "origin": "Việt Nam",
        "material": "nhựa",
        "productId": 65
    }
]
```

### Get product by product id
link: https://cnpmmbe.herokuapp.com/product/1

> GET

> 1 is product id

#### Request

#### Response
```
{
    "id": 42,
    "storeId": 31,
    "category": 1,
    "name": "this is a product to test",
    "quantity": 10,
    "price": 350000.0,
    "description": "this is description",
    "image": "https://drive.google.com/uc?id=1nk8HYop7JIM0gopy_pjwLV2Dee_dKboq&export=download"
}
```

### Get comment by product id
link: https://cnpmmbe.herokuapp.com/product/comment/1

> GET

#### Request

#### Response
```
[
    {
        "id": 46,
        "productId": 1,
        "username": "dang",
        "comment": "good product",
        "star": 3,
        "date": "01-11-2021"
    }
]
```

##  ===============>> User API <<====================

### Update user without password
link: https://cnpmmbe.herokuapp.com/user/1

> Note: 1 is user id

> Note: You have to login with user account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request
```
{
    "name":"dangupdate",
    "dateofbirth":"06-06-2000",
    "email":"abc",
    "address":"123, dadd",
    "gender":"male"
}
```

#### Response
```
{
    "id": 1,
    "name": "dangupdate",
    "dateofbirth": "06-06-2000",
    "email": "abc",
    "address": "123, dadd",
    "gender": "abc",
    "jwt": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGFuZ3NlbGxlcjIiLCJleHAiOjE2MzQxNTAwNTQsImlhdCI6MTYzNDExNDA1NH0.LrKc3wzESxtuCSKO40m018LPvIj2LW-oBQHJb3YLHPs",
    "role": "ROLE_SELLER"
}
```

### Update user with password
link: https://cnpmmbe.herokuapp.com/user/password/47

> Note: 47 is user id

> Note: You have to login with user account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request
```
{
    "password":"1234"
}
```

#### Response
```
{
    "id": 47,
    "name": "dang",
    "dateofbirth": "06-06-2000",
    "email": "abc",
    "address": "123, dadd",
    "gender": "abc",
    "jwt": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGFuZ3NlbGxlcjA0IiwiZXhwIjoxNjM0NjMzMDIzLCJpYXQiOjE2MzQ1NDY2MjN9.9DQ5RtTmpDBPLlPG7JlWUcYzYZAWOIrVmFa7jhQacQU",
    "role": "ROLE_SELLER"
}
```

### Order 
link: https://cnpmmbe.herokuapp.com/user/order

> POST

> Note: You have to login with user account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request
```
{
    "userId": 14,
    "total":350000,
    "listProducts":[1,2,3,4],
    "listQuantities":[1,1,1,1],
    "listDescription":["đỏ, cam","xanh, vàng","hồng","tím"],
    "listProductNames":["abc","xyz","adasd","dasda"],
    "listPrices":[35.5, 322, 33, 26]
}
```

#### Response
Status: 201

### Get order history by userId
link: https://cnpmmbe.herokuapp.com/user/orderhistory/14

> GET

> Note: 14 is user id

> Note: You have to login with user account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request

#### Response
```
[
    {
        "id": 22,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 23,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 24,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 25,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 26,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 27,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 28,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 29,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 30,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 31,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 32,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 33,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 34,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 35,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 36,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 37,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    },
    {
        "id": 38,
        "userId": 14,
        "orderDate": "31-10-2021",
        "total": 350000.0,
        "orderStatus": "Ð?t hàng thành công",
        "paymentStatus": "chua thanh toán"
    }
]
```

### Get order detail history by orderId
link: https://cnpmmbe.herokuapp.com/user/orderdetailhistory/38

> GET

> 38 is order id

> Note: You have to login with user account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

> One order have many product

#### Request

#### Response
```
[
    {
        "id": 39,
        "orderId": 38,
        "productId": 1,
        "quantity": 1,
        "description": "d?, cam",
        "date": "31-10-2021"
    },
    {
        "id": 40,
        "orderId": 38,
        "productId": 2,
        "quantity": 1,
        "description": "xanh, vàng",
        "date": "31-10-2021"
    },
    {
        "id": 41,
        "orderId": 38,
        "productId": 3,
        "quantity": 1,
        "description": "h?ng",
        "date": "31-10-2021"
    },
    {
        "id": 42,
        "orderId": 38,
        "productId": 4,
        "quantity": 1,
        "description": "tím",
        "date": "31-10-2021"
    }
]
```

### Comment 
link: https://cnpmmbe.herokuapp.com/user/comment

> POST

> Note: You have to login with user account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request
```
{
    "productId": 1,
    "username": "dang",
    "comment": "good product",
    "star":3
}
```

#### Response
Status: 201


### Payment
link: https://cnpmmbe.herokuapp.com/user/payment/1

> PUT

> Note: You have to login with user account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt 

> 1 is order id

#### Request

#### Response
```
{
    "mess": "Thanh toán thành công"
}
```

### Payment
link: https://utepayment.herokuapp.com/pay

> POST

#### Request
```
{
    "total": 5
}
```

#### Response

status: 200
```
{
    "mess": 'Success'
}
```

status: 404
```
{
    "mess": 'Cancel'
}
```

### Order with paypal
link: https://cnpmmbe.herokuapp.com/user/orderwithpaypal

> POST

> Note: You have to login with user account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt 

#### Request
```
{
    "userId": 14,
    "total":350000,
    "listProducts":[1,2,3,4],
    "listQuantities":[1,1,1,1],
    "listDescription":["đỏ, cam","xanh, vàng","hồng","tím"],
    "listProductNames":["abc","xyz","adasd","dasda"],
    "listPrices":[35.5, 322, 33, 26]
}
```

#### Response
Status: 201
##  ===============>> Seller API <<====================

### Sign up
> This API for sign up seller

> POST

link: https://cnpmmbe.herokuapp.com/seller/signup

#### Request
```
{
    "name":"dang",
    "dateofbirth":"06-06-2000",
    "email":"abc",
    "address":"123, dadd",
    "gender":"male",
    "phone":"10231023123",
    "username":"dangseller05",
    "password":"123"
}
```

#### Response
Status: 201
```
{
    "id": 0,
    "name": "dang",
    "dateofbirth": "06-06-2000",
    "email": "abc",
    "address": "123, dadd",
    "gender": "male",
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtoYW5nc2VsbGVyMDUiLCJyb2xlIjoiUk9MRV9TRUxMRVIiLCJpYXQiOjE2MzY1MDk0NTMsImV4cCI6MTYzNjU5NTg1M30.8mZArSl7LE0mJdt0i5LaJnCPYWW7cZu_CQiQV-u3DY0",
    "role": "ROLE_SELLER",
    "phone": "10231023123"
}
```

### Login
link: https://cnpmmbe.herokuapp.com/seller/login

> POST

#### Request
```
{
    "username":"dangseller05",
    "password":"123"
}
```

#### Response
```
{
    "id": 0,
    "name": "dang",
    "dateofbirth": "06-06-2000",
    "email": "abc",
    "address": "123, dadd",
    "gender": "male",
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtoYW5nc2VsbGVyMDUiLCJyb2xlIjoiUk9MRV9TRUxMRVIiLCJpYXQiOjE2MzY1MDk1MzAsImV4cCI6MTYzNjU5NTkzMH0.SFg1VaHc4c2onddUBhg6ggVAjYXUfSbZwhcDYhM0yUg",
    "role": "ROLE_SELLER",
    "phone": "10231023123"
}
```

### Update seller without password
link: https://cnpmmbe.herokuapp.com/seller/0

> PUT

> 0 is seller id

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request
```

{
    "name":"dangupdate",
    "dateofbirth":"06-06-2000",
    "email":"abcdd",
    "address":"123, dadd",
    "gender":"female",
    "phone":"12392139123"
}
```

#### Response
```
{
    "id": 0,
    "name": "dangupdate",
    "dateofbirth": "06-06-2000",
    "email": "abcdd",
    "address": "123, dadd",
    "gender": "female",
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtoYW5nc2VsbGVyMDUiLCJyb2xlIjoiUk9MRV9TRUxMRVIiLCJpYXQiOjE2MzY1MDk3MTcsImV4cCI6MTYzNjU5NjExN30.woKByenxJ7CxS01zVUHAynfg6Ld6h7496x2pjsrfr9U",
    "role": "ROLE_SELLER",
    "phone": "12392139123"
}
```

### Update with password
link: https://cnpmmbe.herokuapp.com/seller/password/0

> PUT

> 0 is seller id

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request
```
{
    "password":"1234"
}
```

#### Response
```
{
    "id": 0,
    "name": "dangupdate",
    "dateofbirth": "06-06-2000",
    "email": "abcdd",
    "address": "123, dadd",
    "gender": "female",
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtoYW5nc2VsbGVyMDUiLCJyb2xlIjoiUk9MRV9TRUxMRVIiLCJpYXQiOjE2MzY1MTAwOTgsImV4cCI6MTYzNjU5NjQ5OH0.SKUzcXvU7nJrpzzrewtDM5c9Fs1C4s8ySK3FJrnrcC8",
    "role": "ROLE_SELLER",
    "phone": "12392139123"
}
```

### Get seller by seller id
link: https://cnpmmbe.herokuapp.com/seller/0

> GET

> 0 is seller id

> this api get all information from seller

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request

#### Response
```
{
    "id": 0,
    "name": "dangupdate",
    "dateofbirth": "06-06-2000",
    "email": "abcdd",
    "address": "123, dadd",
    "gender": "female",
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtoYW5nc2VsbGVyMDUiLCJyb2xlIjoiUk9MRV9TRUxMRVIiLCJpYXQiOjE2MzY1MTAyMDUsImV4cCI6MTYzNjU5NjYwNX0.F6Hed7LtUUUvVMCO8Uw2s9Vc-mgb_4n4hDHnTCRWYj4",
    "role": "ROLE_SELLER",
    "phone": "12392139123"
}
```

### Create Store
link: https://cnpmmbe.herokuapp.com/seller/store

> POST

> This API use to create a store

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

> Having a form to do this
#### Request
```
    file,
    userId,
    nameStore,
    storeDescription
```

#### Response
Status: 201
```
{
    "id": 7,
    "userId": 2,
    "nameStore": "test3",
    "storeDescription": "this is a first test",
    "image": "https://drive.google.com/uc?id=1hrmUVHMMui6T4sMBax0jQJS32Nrfe2D8&export=download"
}
```

### View Store 
link: https://cnpmmbe.herokuapp.com/seller/store/userid/2

> GET

> Note: 2 is userId (seller id)

> This API use to view all store of seller

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request

#### Response
Status: 200
```
[
    {
        "id": 3,
        "userId": 2,
        "nameStore": "test",
        "storeDescription": "this is a first step",
        "image": "https://drive.google.com/uc?id=16nV_4PANpiHhuTFyb7r68yML8cLfFEpL&export=download"
    },
    {
        "id": 4,
        "userId": 2,
        "nameStore": "\"test\"",
        "storeDescription": "\"this is a first test\"",
        "image": "https://drive.google.com/uc?id=1bGgdGcKFEq83HnM92e4h7q1pbXIApDyl&export=download"
    },
    {
        "id": 5,
        "userId": 2,
        "nameStore": "test2",
        "storeDescription": "this is a first test",
        "image": "https://drive.google.com/uc?id=1tNRs3EUhEW6J2dYLSgnGT38_pwGaa9Pk&export=download"
    }
]
```

### Delete store
link: https://cnpmmbe.herokuapp.com/seller/store/3

> DELETE

> Note: 3 is store id

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request

#### Response
Status: 200

### Update Store without image
link: https://cnpmmbe.herokuapp.com/seller/store/4

> PUT

> Note: 4 this store id

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt


#### Request
```
{
    "userId":2,
    "nameStore":"change name store",
    "storeDescription":"change store storeDescription"
}
```


#### Response
Status: 200
```
{
    "id": 4,
    "userId": 2,
    "nameStore": "change name store",
    "storeDescription": "change store storeDescription",
    "image": "https://drive.google.com/uc?id=1bGgdGcKFEq83HnM92e4h7q1pbXIApDyl&export=download"
}
```


### Update Store with image
link: https://cnpmmbe.herokuapp.com/seller/store/image/4

> PUT

> Note: 4 this store id

> Having a form to do this

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request
```
    file
```

#### Response
```
{
    "id": 4,
    "userId": 2,
    "nameStore": "change name store",
    "storeDescription": "change store storeDescription",
    "image": "https://drive.google.com/uc?id=1r3j1aupVzkhHTvRC4RNp9PBGOvrtbO_N&export=download"
}
```

### Create product 
link: https://cnpmmbe.herokuapp.com/seller/product

> POST

> Having a form to do this

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

>Note: Category has 3 type:

> 1: Category clothes

> 2: Category shoes

> 3: Category accessories
#### Request
```
    storeid,
    category,
    name,
    quantity,
    price,
    description,
    file
```
#### Response
```
{
    "id": 42,
    "storeId": 31,
    "category": 1,
    "name": "this is a product to test",
    "quantity": 10,
    "price": 350000.0,
    "description": "this is description",
    "image": "https://drive.google.com/uc?id=1nk8HYop7JIM0gopy_pjwLV2Dee_dKboq&export=download"
}
```

### Get product by productId
link: https://cnpmmbe.herokuapp.com/seller/product/42

> GET

> Note: 42 is product id

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request

#### Response
```
{
    "id": 42,
    "storeId": 31,
    "category": 1,
    "name": "this is a product to test",
    "quantity": 10,
    "price": 350000.0,
    "description": "this is description",
    "image": "https://drive.google.com/uc?id=1nk8HYop7JIM0gopy_pjwLV2Dee_dKboq&export=download"
}
```

### Get products by store id
link: https://cnpmmbe.herokuapp.com/seller/product/store/31

> GET

> Note: 31 is store id

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request

#### Response
```
[
    {
        "id": 42,
        "storeId": 31,
        "category": 1,
        "name": "this is a product to test",
        "quantity": 10,
        "price": 350000.0,
        "description": "this is description",
        "image": "https://drive.google.com/uc?id=1nk8HYop7JIM0gopy_pjwLV2Dee_dKboq&export=download"
    },
    {
        "id": 43,
        "storeId": 31,
        "category": 1,
        "name": "this is a product to test",
        "quantity": 10,
        "price": 350000.0,
        "description": "this is description",
        "image": "https://drive.google.com/uc?id=1CxMtOzXqryuqaJGUhBoNa-qZPR34i4ce&export=download"
    }
]
```

### update product without image
link: https://cnpmmbe.herokuapp.com/seller/product/43
> PUT

> Note: 43 is product id

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request
```
{
    "name":"this is update test",
    "quantity":20,
    "price":350000,
    "description":"this is update description"
}
```

#### Response
```
{
    "id": 43,
    "storeId": 31,
    "category": 1,
    "name": "this is update test",
    "quantity": 20,
    "price": 350000.0,
    "description": "this is update description",
    "image": "https://drive.google.com/uc?id=1CxMtOzXqryuqaJGUhBoNa-qZPR34i4ce&export=download"
}
```

### Update product with image
link: https://cnpmmbe.herokuapp.com/seller/product/image/43

> PUT

> Note: 43 is product id

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

> You have a form to do this

#### Request
```
    file
```

#### Response
```
{
    "id": 43,
    "storeId": 31,
    "category": 1,
    "name": "this is update test",
    "quantity": 20,
    "price": 350000.0,
    "description": "this is update description",
    "image": "https://drive.google.com/uc?id=1i8YCeDnvzndWdUqjcN5xG6yBymgNZcas&export=download"
}
```

### Delete product by product id
link: https://cnpmmbe.herokuapp.com/seller/product/43

> DELETE

> Note: 43 is product id

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt


#### Request

#### Reponse
status: 200

### Create category clothes in a product
link: https://cnpmmbe.herokuapp.com/seller/product/categoryclothes

> POST

> type is select with 3 options:

> 1: "ao"

> 2: "quan"

> 3: "ao-clb"

> 4: "khac"

> gender is select with 2 options:

> 1: male

> 2: female

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt
#### Request
```
{
    "type":"ao-clb",
    "brand":"adidas",
    "origin":"vietnam",
    "size":["S", "M", "L", "XL", "2XL"],
    "color":["đỏ","cam","vàng", "lục", "lam"],
    "material":"cotton",
    "gender":"nam",
    "productId":55
}
```
#### Response
```
{
    "id": 56,
    "type": "ao-clb",
    "brand": "adidas",
    "origin": "vietnam",
    "size": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
    ],
    "color": [
        "đỏ",
        "cam",
        "vàng",
        "lục",
        "lam"
    ],
    "material": "cotton",
    "gender": "nam",
    "productId": 55
}
```


### Update detail category clothes in a product
link: https://cnpmmbe.herokuapp.com/seller/product/categoryclothes/55

> PUT

> NOTE: 55 is product id

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request
```
{
    "type":"ao-clb",
    "brand":"adidas",
    "origin":"vietnam",
    "size":["S", "M", "L", "XL", "2XL"],
    "color":["đỏ","cam","vàng", "lục", "lam"],
    "material":"cotton",
    "gender":"female"
}
```

#### Response
```
{
    "id": 56,
    "type": "ao-clb",
    "brand": "adidas",
    "origin": "vietnam",
    "size": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
    ],
    "color": [
        "đỏ",
        "cam",
        "vàng",
        "lục",
        "lam"
    ],
    "material": "cotton",
    "gender": "female",
    "productId": 55
}
```

### Create category shoes in a product
link: https://cnpmmbe.herokuapp.com/seller/product/categoryshoes

> POST

> Note: Stype is a select with 4 options:

> 1: "da-bong"

> 2:  "chay-bo"

> 3: "bong-ro"

> 4: "cau-long"

> 5: "khac"

> Note: gender is a select with 2 options:

> 1: male

> 2: female

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt


#### Request
```
{
    "style":"da-bong",
    "size":[7,7.5,8,8.5,9,9.5],
    "color":["đỏ","cam","vàng", "lục", "lam"],
    "height": 15,
    "weight": 6,
    "material":"vải",
    "sole":"nhựa",
    "origin":"Việt Nam",
    "warranty": 12,
    "gender":"male",
    "productId":57
}
```

#### Response
```
{
    "id": 58,
    "style": "da-bong",
    "size": [
        7.0,
        7.5,
        8.0,
        8.5,
        9.0,
        9.5
    ],
    "color": [
        "đỏ",
        "cam",
        "vàng",
        "lục",
        "lam"
    ],
    "height": 15.0,
    "weight": 6.0,
    "material": "vải",
    "sole": "nhựa",
    "origin": "Việt Nam",
    "warranty": 12.0,
    "gender": "male",
    "productId": 57
}
```

### Update category shoes in a product
link: https://cnpmmbe.herokuapp.com/seller/product/categoryshoes/57

> PUT

> 57 is product id

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request
```
{
    "style":"da-bong",
    "size":[7,7.5,8,8.5,9,9.5],
    "color":["đỏ","cam","vàng", "lục", "lam"],
    "height": 15,
    "weight": 6,
    "material":"vải",
    "sole":"nhựa",
    "origin":"Việt Nam",
    "warranty": 12,
    "gender":"female"
}
```

#### Response
```
{
    "id": 58,
    "style": "da-bong",
    "size": [
        7.0,
        7.5,
        8.0,
        8.5,
        9.0,
        9.5
    ],
    "color": [
        "đỏ",
        "cam",
        "vàng",
        "lục",
        "lam"
    ],
    "height": 15.0,
    "weight": 6.0,
    "material": "vải",
    "sole": "nhựa",
    "origin": "Việt Nam",
    "warranty": 12.0,
    "gender": "female",
    "productId": 57
}
```


### Create category accessories in a product
link: https://cnpmmbe.herokuapp.com/seller/product/categoryaccessories

> POST

> Type is a select with 5 options:

> 1: "bang-tran"

> 2: "bang-co-tay"

> 3: "non"

> 4: "tui"

> 5: "binh-nuoc"

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request
```
{
    "type":"binh-nuoc",
    "color":["đỏ","cam","vàng", "lục", "lam"],
    "brand":"addidas",
    "origin":"Việt Nam",
    "material":"nhựa",
    "productId":59
}
```

#### Response
```
{
    "id": 60,
    "type": "binh-nuoc",
    "color": [
        "đỏ",
        "cam",
        "vàng",
        "lục",
        "lam"
    ],
    "brand": "addidas",
    "origin": "Việt Nam",
    "material": "nhựa",
    "productId": 59
}
```

### Update category accessories in a product
link: https://cnpmmbe.herokuapp.com/seller/product/categoryaccessories/59

> PUT

> 59 is product id

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt
#### Request
```
{
    "type":"binh-nuoc",
    "color":["đỏ","cam","vàng", "lục", "lam"],
    "brand":"addidas",
    "origin":"Việt Nam",
    "material":"nhựa"
}
```

#### Response
```
{
    "id": 60,
    "type": "binh-nuoc",
    "color": [
        "đỏ",
        "cam",
        "vàng",
        "lục",
        "lam"
    ],
    "brand": "addidas",
    "origin": "Việt Nam",
    "material": "nhựa",
    "productId": 59
}
```

### Get order detail by store id
link: https://cnpmmbe.herokuapp.com/seller/order/4

> GET

> 4 is store id

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

> Default: get order in current day

#### Request

#### Response
```
[
    {
        "id": 39,
        "orderId": 38,
        "productId": 1,
        "quantity": 1,
        "description": "d?, cam",
        "date": "31-10-2021"
    },
    {
        "id": 40,
        "orderId": 38,
        "productId": 2,
        "quantity": 1,
        "description": "xanh, vàng",
        "date": "31-10-2021"
    },
    {
        "id": 41,
        "orderId": 38,
        "productId": 3,
        "quantity": 1,
        "description": "h?ng",
        "date": "31-10-2021"
    },
    {
        "id": 42,
        "orderId": 38,
        "productId": 4,
        "quantity": 1,
        "description": "tím",
        "date": "31-10-2021"
    }
]
```

### Get order detail by store id and day
link: https://cnpmmbe.herokuapp.com/seller/order/4/date/31-10-2021

> GET

> 4 is store id

> 31-10-2021 is day which you want to choose

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request

#### Response
```
[
    {
        "id": 39,
        "orderId": 38,
        "productId": 1,
        "quantity": 1,
        "description": "d?, cam",
        "date": "31-10-2021"
    },
    {
        "id": 40,
        "orderId": 38,
        "productId": 2,
        "quantity": 1,
        "description": "xanh, vàng",
        "date": "31-10-2021"
    },
    {
        "id": 41,
        "orderId": 38,
        "productId": 3,
        "quantity": 1,
        "description": "h?ng",
        "date": "31-10-2021"
    },
    {
        "id": 42,
        "orderId": 38,
        "productId": 4,
        "quantity": 1,
        "description": "tím",
        "date": "31-10-2021"
    }
]
```

### Update order status 
link: https://cnpmmbe.herokuapp.com/seller/orderdetail/status/2

> PUT

> 2 is **order detail id** 

> You can get order detail id by above API

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

> This is a special API if you prepare all products in order then status order can automatically change by itself.

#### Request

#### Response
```
{
    "mess": "Update order detail status successfully"
}
```

### Static by store id
link: https://cnpmmbe.herokuapp.com/seller/order/2/statusfinished

> GET

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

> Default status: 'Dang chuan bi'

#### Request

#### Response
```
[
    {
        "_id": "61863c8ab5b0aae0e41d18ab",
        "orderId": 2,
        "productId": 0,
        "quantity": 1,
        "description": "đỏ, cam",
        "date": "6-10-2021",
        "status": "Đang chuẩn bị",
        "id": 0,
        "__v": 0
    }
]
```

### Static by store id and date
link: https://cnpmmbe.herokuapp.com/seller/order/2/date/06-11-2021

> GET

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request

#### Response
```
[
    {
        "_id": "61863c8ab5b0aae0e41d18ab",
        "orderId": 2,
        "productId": 0,
        "quantity": 1,
        "description": "đỏ, cam",
        "date": "06-10-2021",
        "status": "Đang chuẩn bị",
        "id": 0,
        "__v": 0
    }
]
```

### Static by store id, month and year
link: https://cnpmmbe.herokuapp.com/seller/order/2/month/11/year/2021

> GET

> Note: You have to login with seller account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request

#### Response
```
[
    {
        "_id": "61863c8ab5b0aae0e41d18ab",
        "orderId": 2,
        "productId": 0,
        "quantity": 1,
        "description": "đỏ, cam",
        "date": "06-10-2021",
        "status": "Đang chuẩn bị",
        "id": 0,
        "__v": 0
    }
]
```
##  ==================>> Admin API <<========================= 

### Login
link: https://cnpmmbe.herokuapp.com/admin/login

> POST

#### Request
```
{
    "username":"huyadmin",
    "password":"123"
}
```

#### Response
```
{
    "username": "huyadmin",
    "role": "ROLE_ADMIN",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imh1eWFkbWluIiwicm9sZSI6IlJPTEVfQURNSU4iLCJpYXQiOjE2MzY1MTIzNDgsImV4cCI6MTYzNjU5ODc0OH0.JXUZnWQ8z_yF_QBPKy1ERx6Iy4h9Qzkw1mJgr9f0NkY"
}
```

### Get all stores
link: https://cnpmmbe.herokuapp.com/admin/stores

> GET

> Note: You have to login with admin account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt
#### Request

#### Response
```
[
    {
        "_id": "6172b6eee20edb0c1c24d844",
        "userId": 1,
        "nameStore": "test2",
        "storeDescription": "this is a second test",
        "image": "https://drive.google.com/uc?id=16pety2pPZdM-ZH_h7pzLy5hOgJT8dVXh&export=download",
        "id": 0,
        "__v": 0
    },
    {
        "_id": "6172b6fde20edb0c1c24d847",
        "userId": 1,
        "nameStore": "test3",
        "storeDescription": "this is a second test",
        "image": "https://drive.google.com/uc?id=1-cRfMWg1OGG38YZUlbUw-x54u3RKApGf&export=download",
        "id": 1,
        "__v": 0
    },
    {
        "_id": "6172c43a8ea21d4e85bc4819",
        "userId": 2,
        "nameStore": "test4",
        "storeDescription": "this is a second test",
        "image": "https://drive.google.com/uc?id=1DhVEWJfT70uFx0vmCTKdh6cTrVLL3sBk&export=download",
        "id": 2,
        "__v": 0
    }
]
```

### Get all users
link: https://cnpmmbe.herokuapp.com/admin/users

> GET

> Note: You have to login with admin account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt
#### Request

#### Response
```
[
    {
        "_id": "6172bfd9ac00f1a3d14e6f28",
        "name": "dang",
        "dateofbirth": "06-06-2000",
        "email": "Ninhdang115@gmail.com",
        "address": "123, dadd",
        "gender": "male",
        "username": "dang",
        "password": "$2b$10$gBD543uV7LAQ18xEIOZkOOR4E.0RLpD1k8mMgL.v0R0Thfb9ZQGnG",
        "role": "ROLE_USER",
        "id": 0,
        "__v": 0
    },
    {
        "_id": "6172c4258ea21d4e85bc4814",
        "name": "dang",
        "dateofbirth": "06-06-2000",
        "email": "abc",
        "address": "123, dadd",
        "gender": "male",
        "username": "dangseller",
        "password": "$2b$10$8LeiJ0auw8hyTta6sCtF4ONCHCRF54WmVe9rTN4wonGX3v5UV4qK2",
        "role": "ROLE_SELLER",
        "id": 2,
        "__v": 0
    }
]
```

### Get All orders
link: https://cnpmmbe.herokuapp.com/admin/orders

> GET

> Note: You have to login with admin account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt


#### Request

#### Response
```
[
    {
        "_id": "61863c2dc175d1ff227709a2",
        "userId": 130,
        "orderDate": "6-10-2021",
        "total": 350000,
        "orderStatus": "Đặt hàng thành công",
        "paymentStatus": "Chưa thanh toán",
        "id": 0,
        "__v": 0
    },
    {
        "_id": "61863c54a13ccff50ae15e4a",
        "userId": 130,
        "orderDate": "6-10-2021",
        "total": 350000,
        "orderStatus": "Đặt hàng thành công",
        "paymentStatus": "Đã thanh toán",
        "id": 1,
        "__v": 0
    },
    {
        "_id": "61863c8ab5b0aae0e41d18a8",
        "userId": 130,
        "orderDate": "6-10-2021",
        "total": 350000,
        "orderStatus": "Đơn hàng đã chuẩn bị xong",
        "paymentStatus": "Chưa thanh toán",
        "id": 2,
        "__v": 0
    }
]
```

### Get all orders without payment

> GET

> Note: You have to login with admin account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request

#### Response
```
[
    {
        "_id": "61863c2dc175d1ff227709a2",
        "userId": 130,
        "orderDate": "6-10-2021",
        "total": 350000,
        "orderStatus": "Đặt hàng thành công",
        "paymentStatus": "Chưa thanh toán",
        "id": 0,
        "__v": 0
    },
    {
        "_id": "61863c8ab5b0aae0e41d18a8",
        "userId": 130,
        "orderDate": "6-10-2021",
        "total": 350000,
        "orderStatus": "Đơn hàng đã chuẩn bị xong",
        "paymentStatus": "Chưa thanh toán",
        "id": 2,
        "__v": 0
    },
    {
        "_id": "61863d76b5b0aae0e41d18b4",
        "userId": 130,
        "orderDate": "6-10-2021",
        "total": 350000,
        "orderStatus": "Đặt hàng thành công",
        "paymentStatus": "Chưa thanh toán",
        "id": 3,
        "__v": 0
    },
    {
        "_id": "61863d7d7586ec64969bebeb",
        "userId": 130,
        "orderDate": "6-10-2021",
        "total": 350000,
        "orderStatus": "Đặt hàng thành công",
        "paymentStatus": "Chưa thanh toán",
        "id": 4,
        "__v": 0
    }
]
```

### Get all seller
link: https://cnpmmbe.herokuapp.com/admin/sellers

> GET

> Note: You have to login with admin account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request

#### Response
```
[
    {
        "_id": "618b270c21ebca6f4cf1bb86",
        "name": "dangupdate",
        "dateofbirth": "06-06-2000",
        "email": "abcdd",
        "address": "123, dadd",
        "gender": "female",
        "username": "dangseller05",
        "password": "$2b$10$UYj13EOugZC7sD0ikXyRjO6HDoOjIPHBsPQKCEAUy14avThT9WiPW",
        "phone": "12392139123",
        "id": 0,
        "__v": 0
    }
]
```

### Get all products
link: https://cnpmmbe.herokuapp.com/admin/products

> GET

> Note: You have to login with admin account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request

#### Response
```
[
    {
        "_id": "6172c99b399a33de123cc8b9",
        "storeId": 2,
        "category": 1,
        "name": "this is update test",
        "quantity": 20,
        "price": 350000,
        "description": "this is update description",
        "image": "https://drive.google.com/uc?id=1F0obXxmgkjS3mbRbYK47xRtLzmdx6L2-&export=download",
        "id": 0,
        "__v": 1,
        "comments": [
            2
        ]
    },
    {
        "comments": [],
        "_id": "6189dceeb7d0440ce73d0ccb",
        "storeId": 2,
        "category": 1,
        "name": "dsadadasd",
        "quantity": 300,
        "price": 20000,
        "description": "dasdasdasdasd",
        "image": "https://drive.google.com/uc?id=1seiOVna938REun6kvcSxkcZiu55H6BWM&export=download",
        "id": 18,
        "__v": 0
    }
]
```

### Verify shipper account
link: https://cnpmmbe.herokuapp.com//admin/verifyshipper/0

> PUT

> Note: You have to login with admin account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

> 0 is shipper id

#### Request

#### Response
```
{
    "mess": "Kích hoạt tài khoản thành công"
}
```

### Get shipper without verify
link: https://cnpmmbe.herokuapp.com//admin/shipperwithoutverify

> GET

> Note: You have to login with admin account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request

#### Response
```
[
    {
        "_id": "619d9fba0bc38884e93f06d6",
        "name": "dang",
        "dateofbirth": "06-06-2000",
        "email": "abc",
        "address": "123, dadd",
        "gender": "male",
        "username": "dangshipper01",
        "phone": "10231023123",
        "status": "initial",
        "id": 1,
        "__v": 0
    }
]
```


##  ===============>> Shipper API <<====================

### Sign up
link: https://cnpmmbe.herokuapp.com//shipper/signup

> POST

### Request
```
{
    "name":"dang",
    "dateofbirth":"06-06-2000",
    "email":"abc",
    "address":"123, dadd",
    "gender":"male",
    "phone":"10231023123",
    "username": "dangshipper",
    "password":"123"
}
```

### Response
```
{
    "id": 0,
    "name": "dang",
    "dateofbirth": "06-06-2000",
    "email": "abc",
    "address": "123, dadd",
    "gender": "male",
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtoYW5nc2hpcHBlciIsInJvbGUiOiJST0xFX1NISVBQRVIiLCJpYXQiOjE2Mzc3MTkyMTgsImV4cCI6MTYzNzgwNTYxOH0.0dFREzZgu23zx96DUgEHDrSroS1LNOdntoFM6DY6iH4",
    "role": "ROLE_SHIPPER",
    "phone": "10231023123"
}
```

### Login
link: https://cnpmmbe.herokuapp.com//shipper/login

#### Request
```
{
    "username"dangshipper",
    "password":"123"
}
```

#### Response
> if admin didn't verify

```
{
    "mess": "Tài khoản đang được xác minh vui lòng đợi admin kiểm duyệt"
}
```

> else

```
{
    "id": 0,
    "name": "dang",
    "dateofbirth": "06-06-2000",
    "email": "abc",
    "address": "123, dadd",
    "gender": "male",
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtoYW5nc2hpcHBlciIsInJvbGUiOiJST0xFX1NISVBQRVIiLCJpYXQiOjE2Mzc3MjAxMjYsImV4cCI6MTYzNzgwNjUyNn0.hDR0zafZa7QbaXTYyLluJcv2YJ04OuizjRiM1e0oGJQ",
    "role": "ROLE_SHIPPER",
    "phone": "10231023123"
}
```

### Get all order with already status
link: https://cnpmmbe.herokuapp.com//shipper

> GET

> Note: You have to login with shipper account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request

#### Response
```
[
    {
        "orderId": 54,
        "name": "Ninh Dang",
        "address": "số 115, đường 265",
        "phone": "0919910266",
        "description": "dasdasdx1, dasdadx1",
        "total": 148123
    }
]
```

### Receive order
link: https://cnpmmbe.herokuapp.com//shipper/receiveorder

> POST

> Note: You have to login with shipper account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request
```
{
    "orderId":54,
    "shipperId":0
}
```

#### Response
```
{
    "mess": "Nhận đơn hàng thành công"
}
```

### Get order by shipper id
link: https://cnpmmbe.herokuapp.com//shipper/order/0

> GET

> Note: You have to login with shipper account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request

#### Response
> if order is empty
```
{
    "mess": "Chưa nhận đơn hàng"
}
```

> else
```
[
    {
        "orderId": 54,
        "name": "Ninh Dang",
        "address": "số 115, đường 265",
        "phone": "0919910266",
        "description": "dasdasdx1, dasdadx1",
        "total": 148123
    }
]
```

### Delivery order
link: https://cnpmmbe.herokuapp.com//shipper/deliveryorder

> POST

> Note: You have to login with shipper account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

#### Request
```
{
    "orderId":54,
    "shipperId":0
}
```

#### Response
```
{
    "mess": "Giao hàng thành công"
}
```

### Get orders delivery success
link: https://cnpmmbe.herokuapp.com//shipper/ordersuccess/0

> GET

> Note: You have to login with shipper account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt 

#### Request

#### Respose
```
[
    {
        "orderId": 54,
        "name": "Ninh Dang",
        "address": "số 115, đường 265",
        "phone": "0919910266",
        "description": "dasdasdx1, dasdadx1",
        "total": 148123
    }
]
```

