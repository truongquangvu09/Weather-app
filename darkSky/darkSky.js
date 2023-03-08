const request = require("request");

getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/b9f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8/${lat},${lng}`,
      json: true,
    },
    (err, res, body) => {
      if (err) {
        callback("can't connect to darkSky server");
      } else if (body.code === 400) {
        callback("not found location");
      } else {
        callback(undefined, {
          summary: +body.currenly.summary,
          icon: +body.currenly.icon,
          temperature: +body.currenly.temperature,
        });
      }
    }
  );
};

module.exports = {
  getWeather,
};
