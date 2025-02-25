(async function() {
  let xValues = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс", "Пн", "Вт", "Ср"];
  let yValues = [ 25,   49,   61,   35,   25,   9,   52,    52,    45,    60];
  // const barColors = ["red", "green","blue","orange","brown"];
  let chart = document.getElementById('passedStepsChart');
  
  let ctx = chart.getContext("2d");
  let gradient = ctx.createLinearGradient(0, 20, 0, 220);
  gradient.addColorStop(0, "#37BA03");
  gradient.addColorStop(0.6, "#E3D300");
  gradient.addColorStop(0.8, "#E3D300");
  gradient.addColorStop(1, "#E00000");
  
  let data = {
    labels: xValues,
    datasets: [{
      data: yValues,
      backgroundColor: gradient,
      borderColor: gradient,
      borderWidth: 1,
      borderRadius: {
        topLeft: Number.MAX_VALUE,
        topRight: Number.MAX_VALUE
      },
      borderSkipped: false
    }]
  };
  Chart.defaults.font.size = 16;

  new Chart(document.getElementById('passedStepsChart'), {
    type: 'bar',
    data: data,
    options: {
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: false,
          text: "Passed Steps Chart"
        },
        tooltips: {
          enabled: true,
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.yLabel;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false,
            // color: "transparent",
            // borderColor: "transparent",
            // tickColor: 'transparent'
          },
        },
        y: {
          border: {
            display: false
          },
          grid: {
            color: '#D8D8D855'
          },
          ticks: {
            display: false
          }
        }
      }
    },
  });
}) ();