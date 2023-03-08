const { default: axios } = require("axios");
const request = require("request");
const axios = require("axios");
const yargs = require("yargs");
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "enter the address",
      String: true,
    },
  })
  .help()
  .alias("help", "h").argv;
const encodeAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json/?key=AIzaSyB_bWWyFamvzVs6mCu64KuLL0shcfhwKTw&address=${argv.address}`;
axios
  .get(geocodeUrl)
  .then((res) => {
    if (res.data.status === "ZERO_RESULTS") {
      throw new Error("Unable to find that address");
    }
    console.log("the Address:" + res.data.results[0].formatted_address);
    console.log("=====================================");

    // call darksky api
    const lat = res.data.results[0].geometry.location.lat;
    const lng = res.data.results[0].geometry.location.lng;
    const darkSkyUrl = `https://api.darksky.net/forecast/b9f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8/${lat},${lng}`;
    return axios.get(darkSkyUrl);
  })
  .then(res=>{
   console.log("summary"+ res.data.currently.summary);
   console.log("icon"+ res.data.currently.icon);
   console.log("temperature"+ res.data.currently.temperature);


  })
  .catch((err) => {
    if (err === "ENOTFOUND") {
      console.log("can't connect to google service");
    } else {
      console.log(err.message);
    }
  });
