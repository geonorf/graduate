import React from "react";
import Cookies from "universal-cookie";
import LoginPage from "./pages/LoginPage";
import Encoder from "./pages/Encoder";

const cookies = new Cookies();

class WebControl extends React.Component {

  constructor(props) {
    super(props);

    this.password = "";
    this.username = "",

    this.state = {
      username: "",
      error: "",
      isAuthenticated: false,
      activeSection: "",
      person: { name: "",
                surname: "",
                age: ""
              },
    };
  }

  setActiveSection = (section) => {
    this.setState({ activeSection: section });
    sessionStorage.setItem('activeSection', section);
  };

  componentDidMount = () => {
    this.getSession();
    this.get_card_data();
    this.setActiveSection(sessionStorage.getItem('activeSection'));
  }

  getSession = () => {
    fetch("/webControl/session/", {
      credentials: "same-origin",
    })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (data.isAuthenticated) {
        this.setState({isAuthenticated: true, username: data.username});
        this.username = data.username;
      } else {
        this.setState({isAuthenticated: false});
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // whoami = () => {
  //   fetch("/webControl/user/", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "same-origin",
  //   })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log("You are logged in as: " + data.username);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

  get_card_data = () => {
    fetch("/webControl/card/", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
    .then((res) => res.json())
    .then((data) => {
      // console.log(JSON.stringify(data));
      this.setState({person: data});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  set_parameters = (dataIN) => {
    fetch("/webControl/setData/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": cookies.get("csrftoken"),
      },
      credentials: "same-origin",
      body: JSON.stringify(dataIN),
    })
    .then(this.isResponseOk)
    .then((data) => {
      alert("Server answer: " + data['detail']);
    })
    .catch((err) => {
      console.log(err);
      this.setState({error: "Data received error."});
    });
  }

  handlePasswordChange = (event) => {
    this.password = event.target.value;
  }

  handleUserNameChange = (event) => {
    this.username = event.target.value;
  }

  isResponseOk(response) {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  }

  login = (event) => {
    event.preventDefault();
    fetch("/webControl/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": cookies.get("csrftoken"),
      },
      credentials: "same-origin",
      body: JSON.stringify({username: this.username, password: this.password}),
    })
    .then(this.isResponseOk)
    .then((data) => {
      // console.log(data);
      this.setState({isAuthenticated: true, username: data.username, error: "", activeSection: "statePage"});
      this.setActiveSection("statePage");
      this.password = "";
      this.username = "";
    })
    .catch((err) => {
      console.log(err);
      this.setState({error: "Wrong username or password."});
    });
  }

  logout = () => {
    fetch("/webControl/logout", {
      credentials: "same-origin",
    })
    .then(this.isResponseOk)
    .then((data) => {
      // console.log(data);
      sessionStorage.clear();
      this.setState({isAuthenticated: false, username: "", activeSection: ""});
      this.password = "";
      this.username = "";
    })
    .catch((err) => {
      console.log(err);
    });
  };

  render() {
    if (!this.state.isAuthenticated) {
      return (
        LoginPage(this)
      );
    }
    return (
      Encoder(this)
    )
  }
}

export default WebControl;