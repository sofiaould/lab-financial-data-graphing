/** @format */

const $inputStart = document.getElementById("startDate");
const $inputEnd = document.getElementById("endDate");

axios
  .get(`http://api.coindesk.com/v1/bpi/historical/close.json`)

  .then((response) => {
    console.log("Response from API is: ", response.data);
    const Datesdetail = response.date;
    console.log("date detail : ", Datesdetail);
    printTheChart(response);
  })
  .catch((err) => console.log(err));

// Qd le user click sur le bouton (une fois les dates saisies)
document.getElementById("date").addEventListener("click", () => {
  //
  const value1 = $inputStart.value;

  const value2 = $inputEnd.value;
  console.log(value1, value2);
  axios
    .get(
      `http://api.coindesk.com/v1/bpi/historical/close.json?start=${value1}&end=${value2}`
    )

    .then((response) => {
      console.log("Response from API is: ", response.data);
      const Datesdetail = response.date;
      console.log("date detail : ", Datesdetail);
      printTheChart(response);
    })
    .catch((err) => console.log(err));
});

function printTheChart(stockData) {
  const dailyData = stockData.data.bpi;
  const date = Object.keys(dailyData);
  const data = Object.values(dailyData);

  const ctx = document.getElementById("my-chart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: date,
      datasets: [
        {
          label: "Stock Chart",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: data,
        },
      ],
    },
  }); // closes chart = new Chart()
} // closes printTheChart()
