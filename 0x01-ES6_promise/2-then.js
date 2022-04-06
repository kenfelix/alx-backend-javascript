function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    return {
    status: 200,
    body: 'photo-profile-1',
    };
  }, (err) => err);
}
