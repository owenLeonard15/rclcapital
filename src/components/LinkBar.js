import React from 'react';
import './LinkBar.css';


const LinkBar = ({title, linkClicked}) => {


    const carouselLinks = [
        {
          id: 0,
          text: "Asset Allocation" 
        },
        {
          id: 1,
          text: "Investment Tax Planning"
        },
        {
          id: 2,
          text: "Retirement Planning"
        },
        {
          id: 3,
          text: "IRAs and 401K Rollovers"
        },
        {
          id: 4,
          text: "College Planning"
        },
        {
          id: 5,
          text: "Estate Planning"
       }
      ];
      


    return(
        <div>
            <div className="row container-fluid">
                <h2>{title}</h2>
            </div >
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            
                <div className="navbar" id="navbarNav1">
                    <ul className="navbar-nav" id='navlist'>
                        <li className="nav-item active">
                            <a className="nav-link" onClick={linkClicked} id="0">{carouselLinks[0].text}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={linkClicked} id="1">{carouselLinks[1].text}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={linkClicked} id="2">{carouselLinks[2].text}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={linkClicked} id="3">{carouselLinks[3].text}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={linkClicked} id="4">{carouselLinks[4].text}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={linkClicked} id="5">{carouselLinks[5].text}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default LinkBar;