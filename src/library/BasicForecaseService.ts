const API_POINTS = "https://api.weather.gov/points/";
const USER_AGENT = "(eggy.wtf, patrick@patrickwthomas.net)";

/**
 *
 * @param lat Lattiude
 * @param lon Longitude
 * @returns JSON data from weather.gov
 */
async function getForecastNode(lat: number, lon: number) {
  const response = await fetch(`${API_POINTS}/${lat},${lon}`, {
    method: "get",
    headers: {
      "User-Agent": USER_AGENT,
    },
  });

  // Error out if bad response.
  if (!response.ok) {
    const error = new Error(response.statusText);
    throw error;
  }

  // Get data as JSON.
  return await response.json();
}

export async function fetchBasicForecast() {
  // Get data as JSON.
  const head_json = await getForecastNode(38.032, -78.5098);

  // Now get basic forecast.
  const basic_response = await fetch(head_json.properties.forecast, {
    method: "get",
    headers: {
      "User-Agent": "(eggy.wtf, patrick@patrickwthomas.net)",
      //   Accept: "application/ld+json",
    },
  });

  // Error out if bad response.
  if (!basic_response.ok) {
    const error = new Error(basic_response.statusText);
    throw error;
  }

  // Return data as JSON.
  return await basic_response.json();
}
