const config = {
  type: 'line',         // type of chart
  data: {
    labels: t,
    datasets: [{
      // backgroundColor:"rgba(0,0,255,1.0)",
      borderColor: "red",
      data: P,
      label: "Jumlah Penduduk"
    }]
  },           // the data
  options: {
    animation: false,   // remove animation to speed drawing up
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
      legend:{display: true,position: 'top',align: 'end'
      },
    title: {display: true, text: '', 
            font:{size: 20},
            padding:{bottom: 0},
            color: 'pink'
      },
    },
    scales: {           // axis ranges:
      y: {
        title: {
        display: true,
        text: 'Amplitude',
        font:{
              size: 20
              },
        color: 'red'
        },
        ticks:{
            font: {
                  size: 14
                  },
            color: 'orange',
          stepSize: 20
          },
        grid: { display: true, color: "#131c2b", borderColor: '#ffcc33' },
        min: 0,
        max: 1040
      },
      
      x:{
          title: {
            display: true,
            text: 'Time(s:us)',
            font: {
                  size: 20
                  },
            color: 'blue'
          },
          ticks:{
            font: {
                  size: 10,
                  },
            color: 'blue',
            min: 0,
            max: 100,
            stepSize: 2
          },
          grid: { display: true, color: "#131c2b", borderColor: '#ffcc33' },
          min:0
      }
    }
  }
};

