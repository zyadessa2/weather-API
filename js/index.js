//START VER 


//END VER 


// START API
let weatherInfo = []
async function getweather(country){
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${country}&days=7`)
    let finall = await response.json()
    console.log(finall)
    weatherInfo = finall
    display()
}
getweather("egypt")
// END API

function searchCounry(country){
    getweather(country)

}



function display(){
    let cartona = ``
        cartona += `
        <div class="col-lg-4" id="cardAA">
                            <div class="card bg-card-color border-0" id="cardA">
                              <div class="head text-white bg-card-header-color d-flex justify-content-between align-items-center">
                                <p class="day ps-2 pt-2" id="dayA">Date</p>
                                <p class="date pe-2 pt-2" id="dateA">${weatherInfo.forecast.forecastday[0].date}</p>
                            </div>
                            <div class="card-body ">
                              <p id="locationA">${weatherInfo.location.name}</p>
                              <div class="celec">
                                <h2 id="degreeِِِِA" >${weatherInfo.current.temp_c}oC</h2>
                                <img id="imgWeatherA" src="https:${weatherInfo.current.condition.icon}" alt="">
                              </div>
                                <p class="country text-primary pt-3" id="textA">${weatherInfo.current.condition.text}</p>
                            </div>
                            <div class="card-footer">
                                <ul class="list-unstyled d-flex justify-content-around text-white">
                                    <li><i class="fa-solid fa-umbrella"></i> <span>${weatherInfo.current.vis_km}%</span></li>
                                    <li><i class="fa-solid fa-wind"></i> <span>${weatherInfo.current.wind_kph}km/h</span></li>
                                    <li><i class="fa-regular fa-compass"></i> <span>${weatherInfo.current.wind_dir}</span></li>
                                </ul>
                            </div>
                            </div>
                          </div>
                          <div class="col-lg-4 ">
                              <div class="card bg-card-center-color text-center align-item-center border-0">
                                  <div class="head  bg-card-header-center-color ">
                                      <p class="day text-white  pt-1 " id="day">${weatherInfo.forecast.forecastday[1].date}</p>
                                  </div>
                                  <div class="card-body mt-5">
                                      <img id="imgWeatherA" src="https:${weatherInfo.forecast.forecastday[1].day.condition.icon}" alt="">
                                      <h4 id="secDegree">${weatherInfo.forecast.forecastday[1].day.maxtemp_c}</h4>
                                      <p id="secDegreeSm">${weatherInfo.forecast.forecastday[1].day.mintemp_c}</p>
                                      <p class="wether-day text-primary" id="wetherDay">${weatherInfo.forecast.forecastday[1].day.condition.text}</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-4 ">
                              <div class="card  bg-card-color text-center align-item-center border-0">
                                  <div class="head bg-card-header-color ">
                                  <p class="day text-white  pt-1 " id="day">${weatherInfo.forecast.forecastday[2].date}</p>
                                  </div>
                                  <div class="card-body mt-5">
                                  <img id="imgWeatherA" src="https:${weatherInfo.forecast.forecastday[2].day.condition.icon}" alt="">
                                  <h4 id="secDegree">${weatherInfo.forecast.forecastday[2].day.maxtemp_c}</h4>
                                  <p id="secDegreeSm">${weatherInfo.forecast.forecastday[2].day.mintemp_c}</p>
                                  <p class="wether-day text-primary" id="wetherDay">${weatherInfo.forecast.forecastday[2].day.condition.text}</p>
                                  </div>
                              </div>
                          </div>
        `;

    document.getElementById('contt').innerHTML = cartona;
}

