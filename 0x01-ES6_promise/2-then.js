function handleResponseFromAPI(promise) {
  new Promise((resolve, reject) => {
    resolve({
        status: 200,
        body: 'Success'
      });
    reject(new Error(''));
    }
  });
  
  promise.then(() => {
    console.log('Got a response from the API');
  }, (err) => err);
}
