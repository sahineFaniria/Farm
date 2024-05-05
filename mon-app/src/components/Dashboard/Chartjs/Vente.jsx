import React from 'react';
import { Line} from 'react-chartjs-2';


const data = {
  labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
  datasets: [{
    label: 'Animaux',
    data: [100, 200, 300, 500, 450, 400],
    fill: false,
    backgroundColor: '#605DFF',
    borderColor: '#605DFF',
  },
  {
    label: 'Ouefs',
    data: [200, 250, 400, 200, 300, 500],
    fill: false,
    backgroundColor: '#62ce6b',
    borderColor: '#62ce6b',
  },
  {
    label: 'Lait',
    data: [300, 150, 200, 250, 500, 600],
    fill: false,
    backgroundColor: '#ffe713',
    borderColor: '#ffe713',
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
