const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

const apiKey = "2de0c5be-19fd-4a0b-b2f1-e962bb417a2b";
const apiUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apiKey}`;

app.get("/cryptoData", async (req, res) => {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.json(data);
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
