// labels: ['01-01-2022', '01-02-2022', '01-03-2022', '01-04-2022', '01-05-2022', '01-06-2022', '01-07-2022', '01-08-2022'],

export const data = {
  labels: ['01-01-2022', '01-02-2022', '01-03-2022', '01-04-2022', '01-05-2022', '01-06-2022', '01-07-2022', '01-08-2022'],
  datasets: [
    {
      backgroundColor: "#587AFF",
      data: [3, 5, 4],
    },
  ],
};

export const options = {
  responsive: true,
  legend: { display: false },
  scales: {
      y: {
          max: 12,
          min: -6,
      },
  },
};
