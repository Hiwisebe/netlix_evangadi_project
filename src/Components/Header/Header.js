import React from 'react'
import "./header.css"
import NetflixLogo from "../../assests/images/Netflix-Logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li>
              <img
                className="nav-logo"
                src={NetflixLogo}
                alt="NetflixLogo"
                width="100"
              />
            </li>
            <li className='home'>Home</li>
            <li className='none'>TVShows</li>
            <li className='none'>Movies</li>
            <li className='none'>Latest</li>
            <li className='none'>MyList</li>
            <li className='none'>Browse by Languages</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header
