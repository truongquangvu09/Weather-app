const request = require("request");

geocodeAddress = (address, callback) => {
  const encodeAddress = encodeURIComponent(address);

  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json/?key=AIzaSyB_bWWyFamvzVs6mCu64KuLL0shcfhwKTw&address=${argv.address}`,
      json: true,
    },
    (err, res, body) => {
      if (err) {
        callback("can't connect to google service", undefined);
      } else if (body.status === "ZERO_RESULTS") {
        callback("address not found", undefined);
      } else if (body.status === "OK") {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longtitude: body.results[0].geometry.location.lng,
        });
      }
    }
  );
};

module.exports = {
  geocodeAddress,
};
