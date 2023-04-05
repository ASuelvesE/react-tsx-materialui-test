
const getGatos = (callback) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: 'GET'
      };
      fetch(`https://api.thecatapi.com/v1/images/search?limit=10`, requestOptions)
        .then(response => {
          if (response.ok) return response.json();
        })
        .then(gatos => {
          callback(gatos);
        })
        .catch(error => console.log('error', error));
    } catch (err) {
      console.log(err);
      return [];
    }
  }
  const getGatosSincrono = async () => {
    try {
  
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  export {getGatos,getGatosSincrono};