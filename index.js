import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import 'dotenv/config'
const API_KEY = process.env.API_KEY;


const app = express();
const port = 3000;
const API_URL = "https://api.openuv.io/api/v1/uv?";//lat=:lat&lng=:lng&alt=:alt&dt=:dt
const data = {};
const config = {
    headers: { "x-access-token" : API_KEY },
  };

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/",(req,res)=>{
    res.render("index.ejs")
});

app.post("/get-UV", async (req, res) => {
  const { lat, lng, alt, dt } = req.body;
  const query = `lat=${lat}&lng=${lng}&alt=${alt}&dt=${dt}`;
  try {
    const response = await axios.get(API_URL + query, config);
    const data = response.data;
    console.log("UV Max:", data.result.uv_max);
    res.render("index.ejs", { content: Math.floor(JSON.stringify(data.result.uv_max)) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});


app.listen(port,()=>{
    console.log(`Server is running on port localhost:${port}`)
})

