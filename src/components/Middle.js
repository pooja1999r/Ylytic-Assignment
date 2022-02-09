import React from 'react';
import '../css/middle.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ErrorIcon from '@mui/icons-material/Error';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export default function Middle() {
  return <div>
    <div className='card1 row'>
      <div class="card card-common col-lg-6">
        <div class="card-heade row ">
          <div className='header-right col-8'>
            <CheckCircleOutlineIcon className='yellow' />
            Today's Task
          </div>
          <div className='header-left col-4 '>
            Conversion
          </div>
        </div>
        <div class="card-body ">
          <ul>
            <li className='list-item'> Must in thumbnails: Subject of the vedio
              (baby), large font text, short title reference
            </li>
            <li className='colored list-item'>
              <strong> Improves Impression click-through rate  </strong>
            </li>
          </ul>
        </div>
      </div>

      <div class="card card-common col-lg-6 ">
        <div class="card-heade row ">
          <div className='header-right col-8 '>
            <WatchLaterIcon className='clock'/>
            Watch Time
          <CheckCircleIcon className='correct' />  
          </div>
          <div className='header-left col-4 '>
            Last 7 days
          </div>
        </div>
        <div class="card-body">
          <div className='row center-card'>
            <div className='col-6 card-margin'>
              <div className='line'>
                <h2 className=' num1'>14.8<sub className='light'>hr</sub> </h2>

              </div>
              <p className=' num-para1'>Watch Time</p>
            </div>
            <div className='col-6 card-margin'>
              <div className='line'>
                <p className='num-para'>Total</p>
                <h2 className='num'>90.6 <sub className='light'>hr</sub> </h2>

              </div>
              <div className='line'>
                <p className='num-para'>Goal</p>
                <h2 className='num'>4000 <sub className='light'>hr</sub> </h2>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='card1 row'>
      <div class="card card-common col-lg-6">
        <div class="card-heade row ">
          <div className='header-right col-8 '>
           <span className='display-none'> Impressions</span>  click-through
            <ErrorIcon className='red error' />
          </div>
          <div className='header-left col-4'>
            last 7 days
          </div>
        </div>
        <div class="card-body">
          <p class="card-title colored"> <strong>Improve clicks by using good thumbnails, title </strong></p>
          <p class="card-text ">
            <div className=' row'>
              <div className='col-6 ctr'>
                <p>Impression clicks through rate (CTR)</p>

              </div>
              <div className='col-6 '>

                <div className='line'>
                  <h2 className='num3'>2.7% </h2>
                </div>
              </div>

            </div>

            <div className='row'>
              <div className='col-6 ctr'>
                <p>click through rate </p>
              </div>
              <div className='col-6 '>
                <div className='line'>
                  <h2 className='num3 color-red'>17% <DownloadForOfflineIcon className='red' /> </h2>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>

      <div class="card card-common col-lg-6">
        <div class="card-heade row  ">
          <div className='header-right col-8 '>
            <VisibilityIcon className='white' />
            Views
            <ErrorIcon className='red error' />
          </div>
          <div className='header-left col-4 '>
            last 7 days
          </div>
        </div>
        <div class="card-body">
          <p class="card-title colored"> <strong>  Impressions went up, but lower CTR meant less views </strong></p>
          <p class="card-text">

            <div className=' row'>
              <div className='col-6 ctr'>
                <p>Views</p>

              </div>
              <div className='col-6 '>
                <div className='line'>
                  <h2 className='num3'>1.6K </h2>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-6 ctr'>
                <p>Views compared to last week</p>
              </div>
              <div className='col-6 '>
                <div className='line'>
                  <h2 className='num3 color-red'>55% <DownloadForOfflineIcon className='red' /> </h2>
                </div>
              </div>
            </div>

          </p>
        </div>
      </div>
    </div>
  </div>;
}
