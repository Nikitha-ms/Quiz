import Register from "../components/Register";
import Login from "../components/Login";
import { useState } from "react";
import BG from  "../login.jpeg";

function Auth() {
  const [Registered, setRegistered] = useState(false);
  return (
    <div className="auth-container"style={
        {
          backgroundImage: `url(${BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }
        
    }>
      {Registered ? (
        <Login setRegistered={setRegistered} />
      ) : (
        <Register setRegistered={setRegistered} />
      )}
    </div>
  );
}
export default Auth;
