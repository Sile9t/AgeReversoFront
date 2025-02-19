let xValues = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс", "Пн", "Вт", "Ср"];
let yValues = [ 25,   49,   60,   35,   25,   9,   52,    52,    45,    60];
// const barColors = ["red", "green","blue","orange","brown"];

new Chart("passedStepsChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: "red",
      data: yValues,
      borderWidth: 2,
      borderColor: "red",
      borderRadius: top,
      borderSkipped: false
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: false,
      text: "Passed Steps Chart"
    }
  }
});