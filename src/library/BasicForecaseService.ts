const ENDPOINT = "https://api.weather.gov/points/38.032,-78.5098";

export async function fetchBasicForecast() {
  // I prefer to use fetch, you can use use Axios as an alternative
  const head_response = await fetch(ENDPOINT, {
    method: "get",
    headers: {
      "User-Agent": "(eggy.wtf, patrick@patrickwthomas.net)",
    },
  });

  if (!head_response.ok) {
    const error = new Error(head_response.statusText);
    throw error;
  }

  const head_json = await head_response.json();

  // Now get basic forecast.
  const basic_response = await fetch(head_json.properties.forecast, {
    method: "get",
    headers: {
      "User-Agent": "(eggy.wtf, patrick@patrickwthomas.net)",
      //   Accept: "application/ld+json",
    },
  });

  if (!basic_response.ok) {
    const error = new Error(basic_response.statusText);
    throw error;
  }

  return await basic_response.json();
}
