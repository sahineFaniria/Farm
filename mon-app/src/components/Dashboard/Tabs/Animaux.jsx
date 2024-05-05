import React from 'react';
import Bonne from '../Table/Bonne';
import Traite from '../Table/Traite';
import Vendu from '../Table/Vendu';
import Mort from '../Table/Mort';

const Animaux = () => {
  return (
    <div className='test h-full overflow-x-hidden px-5 py-2'>
        <aside className="sidebar">
            <div className="tabs ">
                <input id="tab-1" type="radio" name="group" />
                <input id="tab-2" type="radio" name="group" />
                <input id="tab-3" type="radio" name="group" />
                <input id="tab-4" type="radio" name="group" />

                <div className="buttons flex gap-8  mx-5">
                    <label className=" text-neutral-900 text-lg " for="tab-1">En bonne santé</label>
                    <label className=" text-neutral-900 text-lg" for="tab-2">En traitement</label>
                    <label className=" text-neutral-900 text-lg" for="tab-3">Vendu</label>
                    <label className=" text-neutral-900 text-lg" for="tab-4">Mort</label>

                    <div className="underline"></div>
                </div>

                <div className="contents">
                    <div className="content-inner">
                        <div className='px-5 py-2'>
                            <Bonne/>
                        </div >
                        <div className='px-5 py-2'>
                            <Traite/>
                        </div>
                        <div className='px-5 py-2'>
                            <Vendu/>
                        </div>
                        <div className='px-5 py-2'>
                            <Mort/>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </div>
  )
}

export default Animaux
