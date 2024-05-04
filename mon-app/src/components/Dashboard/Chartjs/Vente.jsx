import React from 'react';
import { Line} from 'react-chartjs-2';


const data = {
  labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
  datasets: [{
    label: 'Ventes',
    data: [100, 200, 300, 500, 400, 600],
    fill: false,
    backgroundColor: 'red',
    borderColor: 'red',
  },
  {
    label: 'Ventes',
    data: [500, 100, 400, 200, 300, 100],
    fill: false,
    backgroundColor: 'green',
    borderColor: 'green',
  },
  {
    label: 'Ventes',
    data: [300, 400, 200, 100, 500, 300],
    fill: false,
    backgroundColor: 'yellow',
    borderColor: 'yellow',
  }

]
};

const options = {
  title: {
    display: true,
    text: 'Exemple de Line Chart',
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
      },
    }],
  },
};

const Vente = () => {
  return (
    <div className=' -mt-12 px-5 py-3 w-[100%] h-[500px] '>
        <Line data={data} options={options} />
    </div>
  )
}

export default Vente
