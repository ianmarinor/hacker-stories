import { useEffect, useState } from "react";


export const userList = [];

export const Button2 = (props) => {
    const [user, setUser] = useState({});
    
    const handleChange = ({ target }) => {
        let { lang, value } = target;
        
        setUser((prev) => ({ ...prev, [lang]: value }));
    };
    
    const sendInfo = (e) => {
        e.preventDefault()
        userList.push(user);
        console.log('userList: ', userList);
        
  };

    // useEffect(
    //   ()=> console.log(userList)
    // )

  return (
    <div>
      <form onSubmit={sendInfo}>
        <label>
          Nome:
          <input lang="nome" onChange={handleChange}></input>
        </label>

        <label>
          Sobrenome:
          <input lang="sobrenome" onChange={handleChange}></input>
        </label>

        <label>
          Email:
          <input lang="email" onChange={handleChange}></input>
        </label>

        <label>
          Idade:
          <input lang="idade" onChange={handleChange}></input>
        </label>

        <label>
          <button type="submit">SUBMIT</button>
        </label>
      </form>
    </div>
  );
};
