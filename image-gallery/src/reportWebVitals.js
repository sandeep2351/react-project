const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;


//apiKey="636e1481b4f3c446d26b8eb6ebfe7127"
//"https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${search}&per_page=24&format=json&nojsoncakkback=1`"
//"https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg"