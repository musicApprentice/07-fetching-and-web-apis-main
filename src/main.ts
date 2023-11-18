import fetch from "../include/fetch.js";
import { fetchCurrentTemperature } from "./fetchCurrentTemperature.js";
import { GeoCoord } from "./fetchGeoCoord.js";
// TODO - Now its your turn to make the working example! :)
const coord: GeoCoord = { lat: 40, lon: 90 };
fetchCurrentTemperature(coord);
