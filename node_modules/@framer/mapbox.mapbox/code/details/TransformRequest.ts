// Attribute tile requests to FramerX
export const transformRequest = (url: string) => {
  if (
    url.slice(0, 22) == "https://api.mapbox.com" ||
    url.slice(0, 26) == "https://a.tiles.mapbox.com" ||
    url.slice(0, 26) == "https://b.tiles.mapbox.com" ||
    url.slice(0, 26) == "https://c.tiles.mapbox.com" ||
    url.slice(0, 26) == "https://d.tiles.mapbox.com"
  ) {
    // Add Framer X Component identifier for Mapbox API traffic
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=FramerX" : "?pluginName=FramerX";
    return {
      url: url + suffix
    };
  } else {
    // Do not transform URL for non Mapbox GET requests
    return { url: url };
  }
};
