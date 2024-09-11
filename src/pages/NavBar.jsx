import "./nav_style.css"
import IPenco from "../assets/IPenco.ico"

function Navbar(props) {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" onClick={ () => props.setActiveSection('statePage') } >
              <img src={ IPenco } alt="Logo_ipencoder" width="50" height="50"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsElem"
                    aria-controls="navbarsElem" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse custom_nav" id="navbarsElem">
              <ul className="navbar-nav mr-auto">
              </ul>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <button className="nav-link" onClick={ () => props.setActiveSection('statePage') }>Information</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={ () => props.setActiveSection('networkPage') }>Network</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={ () => alert("Page unavailable") }>Indicator</button>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle active" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="navbar-text" style={{ 'color': 'rgb(44, 173, 216)' }}>Welcome, </span> { props.state.username }
                  </a>
                  <div className="dropdown-menu">
                    <button className="dropdown-item" onClick={ () => alert("Page unavailable") }>Settings</button>
                    <button className="dropdown-item" onClick={props.logout}>Logout</button>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
  export default Navbar;


