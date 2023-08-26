const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const Accounts = [
  {
    id: 1,
    firstname: "admin",
    lastname: "admin",
    username: "admin",
    password: "admin",
    email: "admin@email.com",
    isAdmin: true,
  },
  {
    id: 2,
    firstname: "user",
    lastname: "user",
    username: "user",
    password: "password",
    email: "user@email.com",
    isAdmin: false,
    cart: [],
  },
];

const Menu = [
  {
    id: 1,
    name: "Drinks",
    categories: [
      {
        id: 1,
        name: "Premium Blends",
        path: "premium-blends",
      },
      {
        id: 2,
        name: "Classic Milkteas",
        path: "classic-milkteas",
      },
      {
        id: 3,
        name: "Fruit Quenchers",
        path: "fruit-quenchers",
      },
      {
        id: 4,
        name: "Melona Smoothies",
        path: "melona-smoothies",
      },
      {
        id: 5,
        name: "Espresso Coffees",
        path: "espresso-coffees",
      },
    ],
  },
  {
    id: 2,
    name: "Food",
    categories: [
      {
        id: 1,
        name: "Korean Mains",
        path: "korean-mains",
      },
      {
        id: 2,
        name: "Cubs Favorites",
        path: "cubs-favorites",
      },
      {
        id: 3,
        name: "Desserts",
        path: "desserts",
      },
    ],
  },
];

const SubCategory = [
  {
    id: 1,
    name: "Premium Blends",
    path: "premium-blends",
    items: [
      {
        id: 1,
        name: "Oreo Cheesecake",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 110,
      },
      {
        id: 2,
        name: "Brown Sugar Bobba",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 3,
        price: 110,
      },
      {
        id: 3,
        name: "Mango Graham",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 110,
      },
    ],
  },
  {
    id: 2,
    name: "Classic Milkteas",
    path: "classic-milkteas",
    items: [
      {
        id: 1,
        name: "Cheesecake",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 90,
      },
      {
        id: 2,
        name: "Blueberry",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 90,
      },
      {
        id: 3,
        name: "Cocoa",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 4,
        price: 90,
      },
      {
        id: 4,
        name: "Matcha",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 90,
      },
      {
        id: 5,
        name: "Strawberry",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 4,
        price: 90,
      },
      {
        id: 6,
        name: "Thai",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 3,
        price: 90,
      },
      {
        id: 7,
        name: "Wintermelon",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 90,
      },
      {
        id: 8,
        name: "Okinawa",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 90,
      },
    ],
  },
  {
    id: 3,
    name: "Fruit Quenchers",
    path: "fruit-quenchers",
    items: [
      {
        id: 1,
        name: "Lemon",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 90,
      },
      {
        id: 2,
        name: "Lychee",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 90,
      },
      {
        id: 3,
        name: "Green Apple",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 4,
        price: 90,
      },
      {
        id: 4,
        name: "Kiwi",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 3,
        price: 90,
      },
    ],
  },
  {
    id: 4,
    name: "Melona Smoothies",
    path: "melona-smoothies",
    items: [
      {
        id: 1,
        name: "Cocoa Cheesecake",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 4,
        price: 110,
      },
      {
        id: 2,
        name: "Blueberry Cheesecake",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 110,
      },
      {
        id: 3,
        name: "Mango Cheesecake",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 4,
        price: 110,
      },
      {
        id: 4,
        name: "Strawberry Cheesecake",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 110,
      },
    ],
  },
  {
    id: 5,
    name: "Espresso Coffees",
    path: "espresso-coffees",
    items: [
      {
        id: 1,
        name: "Cafe Americano",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 3,
        price: 120,
      },
      {
        id: 2,
        name: "Cafe Latte",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 4,
        price: 130,
      },
      {
        id: 3,
        name: "Caramel Macchiato",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 140,
      },
      {
        id: 4,
        name: "Choffee Mocha",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 4,
        price: 140,
      },
      {
        id: 5,
        name: "Matcha Espressp",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 140,
      },
    ],
  },
  {
    id: 6,
    name: "Korean Mains",
    path: "korean-mains",
    items: [
      {
        id: 1,
        name: "Bibimbap",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 140,
      },
      {
        id: 2,
        name: "Beef Bulgogi",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 140,
      },
      {
        id: 3,
        name: "Chicken Donkas",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 4,
        price: 140,
      },
      {
        id: 4,
        name: "Spam Deopbap",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 3,
        price: 140,
      },
    ],
  },
  {
    id: 7,
    name: "Cubs Favorites",
    path: "cubs-favorites",
    items: [
      {
        id: 1,
        name: "Baked Fries",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 110,
      },
      {
        id: 2,
        name: "Nacho Fries",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 140,
      },
      {
        id: 3,
        name: "Nacho Dip",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 140,
      },
    ],
  },
  {
    id: 8,
    name: "Desserts",
    path: "desserts",
    items: [
      {
        id: 1,
        name: "Cocoa Oreo Cheesecake",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 4,
        price: 130,
      },
      {
        id: 2,
        name: "Blueberry Cheesecake",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 130,
      },
      {
        id: 3,
        name: "Caramel Cheesecake",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 4,
        price: 130,
      },
      {
        id: 4,
        name: "Strawberry Cheesecake",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum vitae iste temporibus reprehenderit.",
        rating: 5,
        price: 130,
      },
    ],
  },
];

//function generating an access token
const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "ThisMYsecretKey", {
    expiresIn: "1d",
  });
};

//middleware security using JWT
const verify = (req, res, next) => {
  const autHeader = req.headers.authorization;

  if (autHeader) {
    const token = autHeader.split(" ")[1];

    jwt.verify(token, "ThisMYsecretKey", (err, user) => {
      if (err) {
        return res.status(403).json("token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(403).json("You are not authenticated");
  }
};

//endoint for login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = Accounts.find((user) => {
    return user.username === username && user.password === password;
  });

  if (user) {
    const accessToken = generateAccessToken(user);
    res.json({
      Code: "200",
      Msg: "Login Successful",
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      isAdmin: user.isAdmin,
      accessToken: accessToken,
    });
  } else {
    res.json({ Code: "400", Msg: "Username or Password incorrect" });
  }
});

//endoint for signup
app.post("/sign-up", (req, res) => {
  const isAdmin = req.body.isAdmin === "true" ? true : false;
  const newRecord = {
    id: Accounts.length + 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    isAdmin: isAdmin,
    cart: [],
  };
  if (Accounts.push(newRecord)) {
    res.json({
      Code: "200",
      Msg: `Account created. You can now login using your username and password`,
    });
  } else {
    res.json({ Code: "400", Msg: "Sign up failed" });
  }
});

//endpoint for displaying Menu Categories
app.get("/menu", (req, res) => {
  res.json(Menu);
});

//endpoint for displaying Sub-categories
app.get("/menu/:category/:subCategory", (req, res) => {
  const result = SubCategory.filter((category) => {
    return category.path === req.params.subCategory;
  });
  res.json(result[0].items);
});

//endpoint for displaying Item details
app.get("/menu/:category/:subCategory/:itemNo", (req, res) => {
  const result = SubCategory.filter((category) => {
    return category.path === req.params.subCategory;
  });
  const resultItem = result[0].items.filter((item) => {
    return item.id === Number(req.params.itemNo);
  });
  res.json(resultItem[0]);
});

//endoint for adding to cart
app.post("/:username/add-to-cart", verify, (req, res) => {
  let added = false;
  const name = req.body.itemName;
  const price = Number(req.body.itemPrice);
  const quantity = Number(req.body.itemQuantity);
  const cartItem = {
    id: 0,
    name: name,
    price: price,
    quantity: quantity,
  };

  Accounts.forEach((account) => {
    if (account.username === req.params.username) {
      cartItem.id = account.cart.length + 1;
      account.cart.push(cartItem);
      added = true;
    }
  });

  if (added) {
    res.json({ Code: "200", Msg: "Item added to cart" });
  } else {
    res.json({ Code: "400", Msg: "Item not added to cart" });
  }
});

//endoint for retrieving to cart items
app.get("/:username/cart", verify, (req, res) => {
  const account = Accounts.filter((account) => {
    return account.username === req.params.username;
  });
  res.json(account[0].cart);
});

//endpoint for deleting items in the cart
app.delete("/:username/cart/delete/:itemId", verify, (req, res) => {
  // Accounts.forEach((account) => {
  //   if (account.username === req.params.username) {
  //     account.cart.forEach((item, index) => {
  //       if (item.id === Number(req.params.itemId)) {
  //         account.splice(index, 1);
  //       }
  //     });
  //   }
  // });
  // Accounts.forEach((account) => {
  //   account.cart.forEach((item, index) => {
  //     item.id = index + 1;
  //   });
  // });
  console.log(req.params.username);
  const account = Accounts.filter((account) => {
    return account.username === req.params.username;
  });
  account[0].cart.forEach((item, index) => {
    if (item.id === Number(req.params.itemId)) {
      account[0].cart.splice(index, 1);
    }
  });
  account[0].cart.forEach((item, index) => {
    item.id = index + 1;
  });

  res.json(account[0].cart);
});

app.listen(5000);
console.log(`server is running in port 5000`);
