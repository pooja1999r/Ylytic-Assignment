import React from 'react';
import '../css/top.css'

export default function Top() {
    return <div>
        <div className='row top1-row'>
            <div className='col-md-12 col-12   top1-col '>

                <div className='row'>
                    <div className='col-7  head heading offset-1 '>
                        <h1 className=''>Avnita's Daily Nudge </h1>
                    </div>
                    <div className=' col-3  five'>
                        <div className='hr-vt green'> </div>
                        <div className='hr-vt green'> </div>
                        <div className='hr-vt green'> </div>
                        <div className='hr-vt green'> </div>
                        <div className='hr-vt white'> </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-7 heading days5 offset-1'>
                        5 Days
                    </div>
                    <div className=' col-3 effort  '>
                        <div className=''>Effort </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='row'>
            <div className='col-12 top2-row' >
                <p>You got a subscriber boost as a result of task!!
                (WhatsApp status) </p>
            </div>
        </div>
    </div>;
}
