getFullResponseFromAPI(success) {
  const P = new Promise((resolve, reject) => {
    if (success === true) {
      return {status: 200, body: 'Success'};
    } else {
      return "The fake API is not working currently";
    }
  });
}
