const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    // eslint-disable-next-line max-len
    "sk_test_51J2LpfCOieh1r4Mq242LonU9m7kQaT9pKKho6O1ICTiy12JHkPdUdWeNaZNUofh6VlajLdRAs53iab0YcSAssewQ00mI1UBHLX"
);
// API

// App config
const app = express();

// MIDDLEWARES
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved  booom!! this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunit of the currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// LISTEN command
exports.api = functions.https.onRequest(app);

// endpoint
// http://localhost:5001/clone-6a45d/us-central1/api
