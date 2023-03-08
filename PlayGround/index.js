const request = require("request");
const yargs = require("yargs");
const geocodepkg = require("../geocode/geocode");
const darkSky = require("../darkSky/darkSky");
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
console.log("your address input:" + argv.address);

geocodepkg.geocodeAddress(argv.address, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
    const lat = res.latitude;
    const lng = re.longtitude;
    darkSky.getWeather(lat, lng, (err, resWeather) => {
      if (err) {
        console.log(err);
      } else {
        console.log(resWeather);
      }
    });
  }
});
