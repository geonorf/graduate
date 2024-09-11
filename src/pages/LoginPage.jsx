import './login_form.css'
import IPenco from '../assets/IPenco.ico'

function LoginPage(props){
    return(
      <div>
        { props.state.error && 
          <div className="alert alert-primary d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" 
              viewBox="0 0 16 16" role="img" aria-label="Warning:">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
              {props.state.error}
            </div>
          </div>
        }
        <div className="container mt-3 text-center">
          <form className="form-signin" onSubmit={props.login}>
            <img className="mb-4" src={IPenco} alt="IPEnc" width="100" height="100"/>
            
            <h2 className="h3 mb-3 font-weight-normal">IP Encoder</h2>
            <label hidden htmlFor="username" className="sr-only">Login</label>
            <input type="text" className="form-control" name="username" onChange={props.handleUserNameChange} id="username" 
             autoCapitalize="none" autoComplete="username" maxLength="150" placeholder="Login" required autoFocus/>
            <label hidden htmlFor="password" className="sr-only">Password</label>
            <input type="password" className="form-control" name="password" id="password" onChange={props.handlePasswordChange} 
            autoComplete="current-password" placeholder="Password" required/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          </form>
        </div>
      </div>
    );
}

export default LoginPage;