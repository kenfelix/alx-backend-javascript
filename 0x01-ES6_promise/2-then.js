function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
  }, (err) => err);
}
