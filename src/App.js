import { useState } from "react";
import ReactDom from "react-dom";
import "./styles.css";

export default function App() {
  const [isSubmitted, setIsSubmittted] = useState(false);

  const database = [
    {
      username: "jan",
      password: "tajne"
    },
    {
      username: "filip",
      password: "213769"
    }
  ];

  const klikanie = (e) => {
    e.preventDefault();

    var { uname, pass } = document.forms[0];

    console.log(uname.value);

    const userdata = database.find((user) => user.username === uname.value);

    if (userdata) {
      if (userdata.password !== pass.value) {
      } else {
        setIsSubmittted(true);
      }
    } else {
    }
  };

  const formularz = (
    <div className="form">
      <form onSubmit={klikanie}>
        <div className="input-container">
          <label>user</label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>haslo</label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" value="Zaloguj się" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="App">
      <div className="login-form">
        <div className="title">Zaloguj się</div>
        {isSubmitted ? <div>logowanie ...</div> : formularz}
      </div>
    </div>
  );
}
