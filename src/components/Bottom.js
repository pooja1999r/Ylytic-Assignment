import React from 'react';
import '../css/bottom.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MessageIcon from '@mui/icons-material/Message';
import AppsIcon from '@mui/icons-material/Apps';

export default function Bottom() {
  return <div>
    <div className='row'>
            <div className='col-12 bottom-row top2-row ' >
                <p> < MessageIcon className='message' /> If you find the nudge useful, reply with
                   <ThumbUpIcon className='thumb' /> </p>
            </div>
        </div>
        <div className='text-center ylyti'>
          <h2> 
         <AppsIcon className='dots' /> Ylyti<span className='yellow-span'>c</span>
         </h2>
        </div>
  </div>;
}
