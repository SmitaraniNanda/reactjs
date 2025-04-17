import { useState } from 'react'
import './App.css'
import dashboardIcon from './assets/dashboard.png';
import email from './assets/mail.png';
import calendar from './assets/calendar.png';
import graph from './assets/bar-chart.png';
import form from './assets/exam.png';
import profiles from './assets/profiles.png';
import paint from './assets/paint.png';
import profile1 from './assets/profile1.jpg';
import profile2 from './assets/profile2.jpg';
import profile3 from './assets/profile3.jpeg';
import profile4 from './assets/profile4.jpeg';
import rightArrow from './assets/right-arrow.png';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
    <div className='first-column'>
      <div className='container1'>
        <div className='name'>Smita.</div>
        <div className='role'>UI/UX Designer</div>
        <div className='project-revenue'>
          <div className='about-project'>
            <div className='project-number'>125</div>
            <div className='projects'>Projects</div>
          </div>
          <div className='about-project'>
            <div className='project-number'>$124</div>
            <div className='projects'>Revenue</div>
          </div>
        </div>
      </div>
      <div className='container2'>
        <div className='dashboard2'>
        <img src={dashboardIcon} alt="dashboard-icon" className='dashboard-icon'/>
        <div className='dashboard'>Dashboard</div>
        </div>
        <div className='dashboard2'>
        <img src={email} alt="dashboard-icon" className='dashboard-icon'/>
        <div className='dashboard'>Email</div>
        </div>
        <div className='dashboard2'>
        <img src={calendar} alt="dashboard-icon" className='dashboard-icon'/>
        <div className='dashboard'>Calendar</div>
        </div>
        <div className='dashboard2'>
        <img src={graph} alt="dashboard-icon" className='dashboard-icon'/>
        <div className='dashboard'>Graph</div>
        </div>
        <div className='dashboard2'>
        <img src={form} alt="dashboard-icon" className='dashboard-icon'/>
        <div className='dashboard'>Forms</div>
        </div>
      </div>
      <div className='container3'>
      <div className='goPro'>Go Pro</div>
      <div className='upgrade'>Upgrade your plan to get pro benefits</div>
      <div className='letsStart-div'><span className='letsStart'>Let's Start</span></div>
      </div>
    </div>

    <div className='second-column'>
      <div className='container4'>
        <div className='dollar'><span className='dollar-size'>$</span></div>
        <div className='total'>Total Revenue</div>
        <div className='total-revenue'>$92,983</div>
        <div className="w3-light-grey w3-round progress">
        <div className="w3-container w3-round progress-bar" style={{ width: '70%', backgroundColor: '#332880' }}></div>
        </div>
      </div>
      <div className='container5-6'>
      <div className='container5'>
        <div className='full-travel'>
        <div className='travel'>Travel</div>
        <div className='mobile'>Mobile Application</div>
        <div className='seenBy'>Seen By</div>
        <div>
          <img src={profiles} alt="profiles" className='profile-size'/>
        </div>
        <div className='tour-trip'>
        <div className='tour'>
          <span className='tour-place'>Tour</span>
        </div>
        <div className='trip'>
        <span className='tour-place'>Trip</span>
        </div>
        </div>
        <div className='transport'>
        <span className='tour-place'>Transport</span>
        </div>
        </div>
      </div>

      <div className='container6'>
      <div className='full-travel'>
        <div className='travel'>Hotel</div>
        <div className='mobile'>Dashboard</div>
        <div className='seenBy'>Seen By</div>
        <div>
          <img src={profiles} alt="profiles" className='profile-size'/>
        </div>
        <div className='tour-trip'>
        <div className='tour'>
          <span className='tour-place'>Tour</span>
        </div>
        <div className='trip'>
        <span className='tour-place'>Trip</span>
        </div>
        </div>
        <div className='transport'>
        <span className='tour-place'>Transport</span>
        </div>
        </div>
      </div>
      </div>
      <div className='container7'>
      <div className='freeSlots'>Free Slots Available</div>
      <div className='first-row'>
      <div className='first'>
        <div className='date'>12</div>
        <div className='month'>June</div>
      </div>
      <div className='second'>
      <div className='date'>18</div>
      <div className='month'>June</div>
      </div>
      <div className='third'>
      <div className='date'>20</div>
      <div className='month'>June</div>
      </div>
      </div>

      <div className='first-row'>
      <div className='fourth'>
      <div className='date'>02</div>
      <div className='month'>July</div>
      </div>
      <div className='fifth'>
      <div className='date'>10</div>
      <div className='month'>July</div>
      </div>
      <div className='sixth'>
      <div className='date'>15</div>
      <div className='month'>July</div>
      </div>
      </div>
      </div>
    </div>

    <div className='third-column'>
      <div className='container8'>
        <img src={paint} alt="paint" className='paint-logo'/>
        <div className='client-details'>
          <div className='client'>Dear Client</div>
          <div className='join-community'>Join our online community. It helps In managing your ptojects</div>
          <div className='client'></div>
        </div>
      </div>
      <div className='container9'>
      <div className='transaction'>Transaction Details</div>
      <img src={profile2} alt="profile3" className='profile-logo'/>
      <div className='Hi-name'>Hi Smita</div>
      <div className='earnings'>$4,763.40</div>
      <div className='available-balance'>Available Balance</div>
      <div className='profiles'>
        <div className='profile-logos'><img src={rightArrow} alt="rightArrow" className='arrow'/></div>
        <img src={profile1} alt="profile1" className='profile-logos'/>
        <img src={profile2} alt="profile2" className='profile-logos'/>
        <img src={profile3} alt="profile3" className='profile-logos'/>
        <img src={profile4} alt="profile4" className='profile-logos'/>
      </div>
      <div className='send-button'>
        <div className='send'>Send</div>
      </div>
      </div>

      <div className='container5-6'>
      <div className='container10'>
      <div className='project-details'>Project Details</div>
      <div className='profile-name'>Smita</div>
      <div className='role-name'>UI/UX Designer</div>
      <div className='project-progress'>Projects Progress</div>
      
      <div className="w3-light-grey w3-round progress-project">
        <div className="w3-container w3-round progress-bar-project" style={{ width: '75%', backgroundColor: '#332880' }}></div>
      </div> 

      </div>
      <div className='container11'>
        <div className='project-details'>Projects Progress</div>
        <div className='rounded-progress-full'>
          <div className='progress-circle'>
          <div className='percentage'>
          <span className='number-percentage'>75%</span>
          </div>
          </div>
        </div>
        <div className='remaining-projects'>3 Remaining Projects</div>
 
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
