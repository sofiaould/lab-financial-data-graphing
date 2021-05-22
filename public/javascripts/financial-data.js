

    axios
      .get(`http://api.coindesk.com/v1/bpi/historical/close.json`)
      .then(response => {
        console.log('Response from API is: ', response.data);
        printTheChart(response); 
      })
      .catch(err => console.log(err));

      function printTheChart(stockData) {
        const dailyData = stockData.data.bpi;
        const date = Object.keys(dailyData);
        const data = Object.values(dailyData);

        const ctx = document.getElementById('my-chart').getContext('2d');
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: date,
            datasets: [
              {
                label: 'Stock Chart',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data
              }
            ]
          }
        }); // closes chart = new Chart()
      } // closes printTheChart()
  

//  document.getElementById('get-country-btn').addEventListener('click', () => {
    //const userInput = document.getElementById('country-name-input').value;
   // getCountryInfo(userInput);
  //});
  
