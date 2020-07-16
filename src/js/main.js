class CircusApi {
  API_URL = "http://circuslabs.net:3000/data";
  getData(key) {
    console.log("getting data for key " + key);

    axios.get(`${this.API_URL}/${key}`)
        .then(this.handleSuccessfulReponse);
        .catch(this.handleError)

  }
  saveData(key, value) {
      console.log('saving some data: ' + key + ' = ' + value)

      axios.post(`${this.API_URL}/${key}`, {
          type:'string',
          value: value
      })
      .then(this.handleSuccessfulReponse);
      .catch(this.handleError)
  }

  handleSuccessfulReponse(response) {
    console.log("got a response!", response);
  }
  handleError(error) {
    console.info("got an error!", error);
  }
}
