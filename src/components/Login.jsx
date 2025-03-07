import React, { useState } from "react";

function LoginPage() {

    const [data,setData] = useState({
        username: "",
        password: ""
    })

    const loginuser = (e) => {
        e.preventDefault()
    }

  return (
    <div className="title-head">
      <form onSubmit={loginuser}>
        <h1>POINT OF INTEREST</h1>
        <h3>Login</h3>
        <label>Username</label>
        <input type="text" placeholder="username"></input>
        <label>Password</label>
        <input type="password" placeholder="password"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginPage;
