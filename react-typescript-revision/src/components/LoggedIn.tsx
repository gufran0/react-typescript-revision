import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const LoggedIn = () => {
  // const [isLoggedIn, setLoggedIn] = useState<AuthUser | null>(null);
  const [isLoggedIn, setLoggedIn] = useState<AuthUser>({} as AuthUser);
  // type assercion

  const handleLogin = () => {
    setLoggedIn({
      name: "vishwas",
      email: "@gmail.com",
    });
  };
  // const handleLogout = () => {
  //   setLoggedIn(null);
  // };

  return (
    <div>
      <button onClick={handleLogin}>LOGIN</button>
      {/* <button onClick={handleLogout}>LOGOUT</button> */}
      <div>user name is {isLoggedIn?.name}</div>
      <div>user email is {isLoggedIn?.email}</div>
      <div>user is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};

export default LoggedIn;
