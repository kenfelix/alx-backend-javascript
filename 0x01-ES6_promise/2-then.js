function handleResponseFromAPI(promise) {
  promise.then(({
    staus: 200,
    body: success
  }) => {
    console.log('Got a response from the API');
  }, (err) => err);
}
