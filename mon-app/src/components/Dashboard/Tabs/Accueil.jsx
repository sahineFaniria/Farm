import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { Doughnut, Line, Pie } from 'react-chartjs-2';


const data = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
    datasets: [{
      label: 'Entrant',
      data: [100, 200, 300, 450, 400, 600],
      fill: true, // Enable area fill for rounded curves
      backgroundColor: 'transparent', // Semi-transparent red
      borderColor: '#3b9633',
      tension: 0.4, // Adjust tension for curve smoothness (0-1)
    },
    {
        label: 'Sortant',
        data: [50, 150, 100, 500, 200, 550],
        fill: true, // Enable area fill for rounded curves
        backgroundColor: 'transparent', // Semi-transparent red
        borderColor: '#e63f3f',
        tension: 0.4, // Adjust tension for curve smoothness (0-1)
    },
    {
        label: 'Restart',
        data: [600, 200, 400, 100, 400, 100],
        fill: true, // Enable area fill for rounded curves
        backgroundColor: 'transparent', // Semi-transparent red
        borderColor: '#605DFF',
        tension: 0.4, // Adjust tension for curve smoothness (0-1)
    }
    ],
  };
  
  const options = {
    scales: {
      x: {
        ticks: {
          beginAtZero: true,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
    title: {
      display: true,
      text: 'Exemple de Line Chart (Courbe)',
    },
    elements: {
      line: {
        // Customize line styling
        borderWidth: 2,
      },
    },
  };


const Accueil = () => {
  return (
    <div className= ' w-full h-full px-5 py-3 flex flex-col gap-6'>

        <div className='flex  gap-5'>
            <div className='w-[50%]  bg-white rounded-md flex flex-wrap justify-between px-4 py-4'>
                <div className='flex flex-col gap-10 justify-between'>
                    <div className="flex gap-1 flex-col">
                        <div className="flex flex-wrap justify-between gap-10">
                            <p>Mammifères</p>
                            <p>ICO</p>
                        </div>
                        <div className=''>
                            <h1 className=' text-2xl font-bold'>50</h1>
                            <p className='text-sm'>Totaux</p>
                        </div>
                        
                    </div>
                    <div className=' text-sm'>
                        <div className='flex gap-2 justify-start items-center'>
                            <div className=' w-2 h-2 bg-purple-700 rounded'></div>
                            <p>Zebu(20)</p>
                        </div>
                        <div className='flex gap-2 justify-start items-center'>
                            <div className=' w-2 h-2 bg-red-400 rounded'></div>
                            <p>Mouton(35)</p>
                        </div>
                        <div className='flex gap-2 justify-start items-center'>
                            <div className=' w-2 h-2 bg-yellow-400 rounded'></div>
                            <p>Chèvre(10)</p>
                        </div>
                    </div>
                </div>
                <div className=' pr-10'>
                    <div className=' w-40'>
                        <Doughnut data={data3} options={options3} className='' />
                    </div>
                </div>
            </div>
            <div className="w-[50%] bg-white rounded-md flex flex-wrap justify-between px-4 py-4">
                <div className='flex flex-col gap-10 justify-between'>
                    <div className="flex gap-1 flex-col">
                        <div className="flex flex-wrap justify-between gap-10">
                            <p>Volailles</p>
                            <p>ICO</p>
                        </div>
                        <div className=''>
                            <h1 className=' text-2xl font-bold'>180</h1>
                            <p className='text-sm'>Totaux</p>
                        </div>
                        
                    </div>
                    <div className=' text-sm'>
                        <div className='flex gap-2 justify-start items-center'>
                            <div className=' w-2 h-2 bg-green-500 rounded'></div>
                            <p>Poulets(20)</p>
                        </div>
                        <div className='flex gap-2 justify-start items-center'>
                            <div className=' w-2 h-2 bg-neutral-400 rounded'></div>
                            <p>Canards(35)</p>
                        </div>
                        <div className='flex gap-2 justify-start items-center'>
                            <div className=' w-2 h-2 bg-neutral-900 rounded'></div>
                            <p>Dindes(10)</p>
                        </div>
                    </div>
                </div>
                <div className=' pr-10'>
                    <div className=' w-40'>
                        <Doughnut data={data2} options={options2} className='' />
                    </div>
                </div>
            </div>
        </div>

        <div className='flex gap-5'>
            <div className=' w-[70%] h-auto  px-4 py-2 bg-white text-neutral-700  rounded-md'>
                <div className="flex flex-wrap justify-between">
                    <div className="flex gap-10">
                        <p>Mouvement de caisse</p>
                        <p>ICO</p>
                    </div>
                    <div className='flex gap-4 text-sm'>
                        <div className='flex gap-1 justify-start items-center'>
                            <div className=' w-2 h-2 bg-green-500 rounded'></div>
                            <p>Entrant</p>
                        </div>
                        <div className='flex gap-2 justify-start items-center'>
                            <div className=' w-2 h-2 bg-red-500 rounded'></div>
                            <p>Sortant</p>
                        </div>
                        <div className='flex gap-2 justify-start items-center'>
                            <div className=' w-2 h-2 bg-[#605DFF] rounded'></div>
                            <p>Restart</p>
                        </div>
                    </div>
                </div>
                <div className="h-[20rem]">
                    <Line data={data} options={options} />
                </div>
                
            </div>
            <div className=" w-[30%] h-auto  px-4 py-2 bg-white text-neutral-700 rounded-md">
                <div className=' flex gap-4'>
                    <p className='text-lg'>Caisse</p>
                    <p>ICO</p>
                </div>
                <h1 className=' text-neutral-700 font-bold text-2xl mb-8'>150 890 Ar</h1>
                <h2 className=" text-lg">Sources de revenus</h2>
                <p className=' text-sm mb-5'>les barres de progression suivant montrent les revenus générés par chaque canal de revenus dans le ferme.</p>
                <div className="flex justify-between">
                    <h3 className=' text-sm font-bold'>Vente d'oeufs</h3>
                    <p className=' text-sm text-[#605DFF]'>700ar</p>
                </div>
                <div className=' w-14 h-2 bg-[#605DFF] rounded-lg mb-2'></div>

                <div className='flex justify-between'>
                    <h3 className=' text-sm font-bold'>Vente d'animaux</h3>
                    <p className=' text-sm text-red-400'>18 000ar</p>
                </div>
                <div className=' w-40 h-2 bg-red-400 rounded-lg mb-2'></div>

                <div className='flex justify-between'>
                    <h3 className=' text-sm font-bold'>Vente de laits</h3>
                    <p className=' text-sm text-slate-800'>3 000ar</p>
                </div>
                <div className=' w-32 h-2 bg-slate-800 rounded-lg mb-2'></div>
            </div>
        </div>


    </div>
  )
}

export default Accueil



const data2 = {
    labels: false,
    datasets: [{
      label: 'Ventes annuelles',
      data: [300, 400, 200],
      backgroundColor: ['#62ce6b', '#1d2041', '#5f6697'],
      hoverBackgroundColor: ['#62ce6b', '#1d2041', '#5f6697'],
    }],
    
  };
  
  const options2 = {
    title: {
      display: true,
      text: 'Répartition des ventes annuelles',
    },
    legend: {
      display: true,
      position: 'right',
      labels: {
        fontColor: 'black',
      },
    },
  };

  const data3 = {
    labels: false,
    datasets: [{
      label: 'Ventes annuelles',
      data: [300, 700, 200],
      backgroundColor: ['#605DFF', '#e63f3f', '#ffe713'],
      hoverBackgroundColor: ['#605DFF', '#e63f3f', '#ffe713'],
    }],
    
  };
  
  const options3 = {
    title: {
      display: true,
      text: 'Répartition des ventes annuelles',
    },
    legend: {
      display: true,
      position: 'right',
      labels: {
        fontColor: 'black',
      },
    },
  };









