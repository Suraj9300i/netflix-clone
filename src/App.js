import "./App.css";
import { useState, useEffect } from "react";
import Homepage from "./Homepage";
import Login from "./login/Login"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
  }, []);

  let LoginUser = (user) =>{
    setUser(user);
  }

  let LogoutUser = () =>{
    setUser(null);
  }

  return (
    <div className="App">
      {user===null ? <Login LoginUser={LoginUser} LogoutUser={LogoutUser}></Login> : <Homepage></Homepage>}
    </div>
  );
}

export default App;
