import "./App.css";

function App() {
  return (
    <div className="App">
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Weather App</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            crossorigin="anonymous"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossorigin="anonymous"
          ></script>
          <link rel="stylesheet" href="src/styles.css" />
        </head>
        <body>
          <div class="container">
            <div class="row d-flex justify-content-center">
              <div class="col-md-6">
                <div class="weather-app">
                  <form id="search-form">
                    <div class="row">
                      <div class="col-9">
                        <input
                          type="text"
                          placeholder="Enter a city..."
                          id="city-input"
                          class="form-control"
                          autocomplete="off"
                        />
                      </div>
                      <div class="col">
                        <div class="buttons">
                          <input
                            type="submit"
                            value="Search"
                            id="search-button"
                            class="btn btn-primary w-100"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="overview">
                    <div class="row">
                      <div class="col">
                        <h2 id="city"></h2>
                        <div class="d-flex weather-temperature">
                          <img src="" alt="Clear" id="icon" />
                          <div></div>
                          <div class="col col-right">
                            <span
                              class="currentTemperature"
                              id="current-temperature"
                            >
                              <strong> </strong>
                            </span>
                            <span class="units"> °C </span>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col">
                            <ul>
                              <li>
                                Last updated: <span id="date"></span>
                              </li>
                              <li>
                                <span id="description"></span>
                              </li>
                              <li>
                                Humidity: <span id="humidity"></span>%
                              </li>
                              <li>
                                Wind: <span id="wind"></span> km
                              </li>
                            </ul>
                            <div class="weather-forecast" id="forecast"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sourceCode">
              <a
                href="https://github.com/jackiedelrey/weather-react-new"
                target="_blank"
              >
                Open source code
              </a>
              <span class="name"> by Jackie Shields</span>
            </div>
          </div>
          <script src="src/index.js"></script>
        </body>
      </html>
    </div>
  );
}

export default App;
