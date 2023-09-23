export const fetchApi = async (city) => {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=5LB5KJ32DSXZ5568UXWA6WE7M&contentType=json`);
  if (!response.ok) {
    throw new Error(`Http error! Status: ${response.status}`)
  }
  const data = await response.json();
  return data;
}