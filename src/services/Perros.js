
const getPerros = (callback) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: 'GET'
      };
      fetch(`https://dog.ceo/api/breeds/image/random/10`, requestOptions)
        .then(response => {
          if (response.ok) return response.json();
        })
        .then(perros => {
          //console.log(perros.message);
          callback(perros.message);
        })
        .catch(error => console.log('error', error));
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  const getPerrosSincrono = async () => {
    try {
  
      const response = await fetch(`https://dog.ceo/api/breeds/image/random/10`);
      const data = await response.json();
      return data.message;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  export {getPerros, getPerrosSincrono};