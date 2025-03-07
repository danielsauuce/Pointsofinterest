import { useState } from "react";


function SignUp() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const signupuser = (e) => {
        e.preventDefault()
    }


  return (
    <div className="signup-form">
      <form onSubmit={signupuser}>
        <h1>Point Of Interest</h1>
        <h3>Sign up</h3>
        <label>Username</label>
        <input type="text" placeholder="Enter Username" value={data.username} onChange={(e) => setData({...data,username: e.target.value})}/>
        <label>Password</label>
        <input type="password" placeholder="Enter Password" value={data.password} onChange={(e) => setData({...data,password: e.target.value})} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default SignUp;
