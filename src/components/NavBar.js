import React from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt, faCogs, faTableColumns, faCalendarPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
      <div className="navbar">
          <h1>Pilot Force</h1>
          
          <div className="user-profile">
              <div className="user-image">
                  <img src='/user.jpg' alt="User" />
              </div>
              <div className="user-info">
                  <div className="user-name">John Doe</div>
                  <div className="user-role">Administrator</div>
              </div>
          </div>
  
          <ul>
              <li><a className="active" href="#dashboard"><FontAwesomeIcon icon={faTableColumns} /> Dashboard</a></li>
              <li><a href="#makebookings"><FontAwesomeIcon icon={faCalendarPlus} /> Make Booking</a></li>
              <li><a href="#bookings"><FontAwesomeIcon icon={faListAlt} /> My Bookings</a></li>
              <li><a href="#assets"><FontAwesomeIcon icon={faCogs} /> My Assets</a></li>
          </ul>

          <div className="logout-icon">
              <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
      </div>
    )
  }
  
  export default NavBar
