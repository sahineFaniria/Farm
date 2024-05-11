import React from 'react';
import Mamifere from '../Chartjs/Mamifere';
import Volaille from '../Chartjs/Volaille';
import Caisse from '../Chartjs/Caisse';




const Accueil = () => {
  return (
    <div className= ' w-full h-full px-5 py-3 flex flex-col gap-6'>

        <div className='flex flex-col md:flex-row gap-5'>
            <div className='w-full md:w-[50%]  bg-white rounded-md flex flex-wrap justify-between px-4 py-4'>
                <div className='flex flex-col gap-10 justify-between'>
                    <div className="flex gap-1 flex-col">
                        <div className="flex flex-wrap justify-between gap-10">
                            <p>Mammifères</p>
                            <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.60913 0.0634287C4.39082 0.0088505 4.16575 0.12393 4.08218 0.332867L3.1538 2.6538L0.832866 3.58218C0.702884 3.63417 0.604504 3.7437 0.566705 3.87849C0.528906 4.01329 0.555994 4.158 0.639992 4.26999L2.01148 6.09864L1.06343 9.89085C1.00944 10.1068 1.12145 10.3298 1.32691 10.4154L4.20115 11.613L5.62557 13.7496C5.73412 13.9124 5.93545 13.9864 6.12362 13.9327L9.62362 12.9327C9.62988 12.9309 9.63611 12.929 9.64229 12.9269L12.6423 11.9269C12.7923 11.8769 12.905 11.7519 12.9393 11.5976L13.9393 7.09761C13.9776 6.92506 13.9114 6.74605 13.77 6.63999L11.95 5.27499V2.99999C11.95 2.82955 11.8537 2.67373 11.7012 2.5975L8.70124 1.0975C8.67187 1.08282 8.64098 1.07139 8.60913 1.06343L4.60913 0.0634287ZM11.4323 6.01173L12.7748 7.01858L10.2119 9.15429C10.1476 9.20786 10.0995 9.2783 10.0731 9.35769L9.25382 11.8155L7.73849 10.8684C7.52774 10.7367 7.25011 10.8007 7.11839 11.0115C6.98667 11.2222 7.05074 11.4999 7.26149 11.6316L8.40341 12.3453L6.19221 12.9771L4.87441 11.0004C4.82513 10.9265 4.75508 10.8688 4.67307 10.8346L2.03046 9.73352L2.85134 6.44999H4.99999C5.24852 6.44999 5.44999 6.24852 5.44999 5.99999C5.44999 5.75146 5.24852 5.54999 4.99999 5.54999H2.72499L1.7123 4.19974L3.51407 3.47903L6.35769 4.4269C6.53655 4.48652 6.73361 4.42832 6.85138 4.28111L8.62413 2.06518L11.05 3.27811V5.19533L8.83287 6.08218C8.70996 6.13134 8.61494 6.23212 8.57308 6.35769L8.07308 7.85769C7.99449 8.09346 8.12191 8.34831 8.35769 8.4269C8.59346 8.50549 8.84831 8.37807 8.9269 8.14229L9.3609 6.84029L11.4323 6.01173ZM7.71052 1.76648L6.34462 3.47386L4.09505 2.724L4.77192 1.03183L7.71052 1.76648ZM10.2115 11.7885L12.116 11.1537L12.7745 8.19034L10.8864 9.76374L10.2115 11.7885Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                     
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
                        <Mamifere/>
                    </div>
                </div>
            </div>
            <div className=" w-full md:w-[50%] bg-white rounded-md flex flex-wrap justify-between px-4 py-4">
                <div className='flex flex-col gap-10 justify-between'>
                    <div className="flex gap-1 flex-col">
                        <div className="flex flex-wrap justify-between gap-10">
                            <p>Volailles</p>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
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
                        <Volaille/>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col md:flex-row gap-5'>
            <div className=' w-full md:w-[70%] h-auto  px-4 py-2 bg-white text-neutral-700  rounded-md'>
                <div className="flex flex-wrap justify-between">
                    <div className="flex gap-10">
                        <p>Mouvement de caisse</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-graph" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                          <path d="M7 14l3 -3l2 2l3 -3l2 2"></path>
                        </svg>
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
                    <Caisse/>
                </div>
                
            </div>
            <div className=" w-full md:w-[30%] h-auto  px-4 py-2 bg-white text-neutral-700 rounded-md">
                <div className=' flex gap-4'>
                    <p className='text-lg'>Caisse</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-graph" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                          <path d="M7 14l3 -3l2 2l3 -3l2 2"></path>
                    </svg>
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











