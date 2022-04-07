export default function uploadPhoto(filename) {
<<<<<<< HEAD
  return Promise.reject(Error(`${fileName} cannot be processed`));
=======
  return Promise.reject(new Error(`${fileName} cannot be processed`));
>>>>>>> c958da3fdaa0525792908ba23a528b350b3607a5
}
