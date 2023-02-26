const { publicIpv4 } = require("public-ip");
export async function currentCity() {
  let ip = "";
  let city = "";
  // Get IP
  try {
    ip = await publicIpv4();
  } catch (err) {
    console.log(err);
  }

  // Get City From Ip and save
  fetch(`https://ipapi.co/${ip}/json/`)
    .then(function (response) {
      response.json().then((jsonData) => {
        // console.log(jsonData.city);
        city = jsonData.city;
        // console.log(`city: ${city}`);
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  return city;
}
