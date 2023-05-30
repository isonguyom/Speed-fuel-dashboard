export const data = {
    labels: [6.2, 12, 16.8],
    datasets: [
      {
        label: 'digital twin',
        backgroundColor: '#60B6E7',
        borderColor: '#60B6E7',
        borderStyle: 'dashed',
        borderRadius: '1000px',
        data: [16, 21, 29],
      },
      {
        label: 'estimated new',
        backgroundColor: '#F19AFF',
        borderColor: '#F19AFF',
        borderStyle: 'dashed',
        borderRadius: '1000px',
        data: [11, 16, 23],
      },
    ],
  };
  
  export const options = {
    responsive: true,
    legend: { display: false },
    scales: {
        y: {
            max: 30,
            min: 0,
        },
        x: {
            max: 24,
            min: 0,
        }
    },
  };
  