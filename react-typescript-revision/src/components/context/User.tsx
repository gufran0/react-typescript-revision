import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "VISHWAS",
        email: "@gmail.com",
      });
    }
  };
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
      
    }
  };
  return (
    <div>
      <button onClick={handleLogin}></button>
      <button onClick={handleLogout}></button>
      <div>user name is {userContext?.user?.name}</div>
      <div>user email is {userContext?.user?.email}</div>
    </div>
  );
};

export default User;
