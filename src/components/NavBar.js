import React,{useState}  from 'react';
import ReactDOM from 'react-dom'
//const element=<NavBar brand="Audi"/ 
import PropTypes from 'prop-types'


function NavBar(props) {
  const darkmodefunction=()=>{
    console.log("enabled dark mode")
    
    }
    
  
  const [styling, setstyling] = useState({backgrounColor:"black",
  color:"white"});
  return (
    
    <>
        
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Health and supplement</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Herbal Juice</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
          <div className="form-check form-switch ">
        <input onClick={darkmodefunction}className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label style={{color:"white"}}className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
      </div>
                
    
   
  </div>
  
</nav>
        
            
</>
        
    )
}

export default NavBar

 NavBar.propTypes = { title: PropTypes.string,}