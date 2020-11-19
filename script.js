let position = document.querySelector(".location");
let latitude = document.querySelector(".latitude");
let longitude = document.querySelector(".longitude");
let info = document.querySelector(".info");
let geo = navigator.geolocation;
let address = document.querySelector(".address");

//reverse geocoding
async function getAdress(lat, lon) {
  try {
    const url = `https://geocode.xyz/${lat},${lon}?json=1`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (data.error) {
      info.innerHTML += `This time is not possible retrieve the position`;
    } else {
      const city = data.city;
      const country = data.country;
      address.innerHTML += `The city is =${city} and the country is = ${country}`;
    }
  } catch (error) {
    alert("Not possible to retrieve street and city ");
  }
}
function getLocation() {
  if ("geolocation" in navigator) {
    geo.getCurrentPosition(
      (pos) => {
        let coords = pos.coords;
        let lat = coords.latitude;
        let lon = coords.longitude;
        latitude.innerText = lat;
        longitude.innerText = lon;
        console.log("this is the latitude", lat);
        console.log("this is the longitude", lon);
        getAdress(lat, lon);
      },
      (error) => {
        console.log("Could not get position", error);
        console.log("it is not possible to retrieve the position.");
        msg = document.createElement = "p";
        info.innerText =
          "It is not possible to retrieve the position please allow the geolocalisation .";
        document.querySelector(".info").appendChild = msg;
      }
    );
  } else {
    console.log(`the device doesn't accesss to the geolocation`);
  }
}

position.addEventListener("click", () => {
  getLocation();
});
