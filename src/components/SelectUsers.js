import React from 'react';

const SelectUsers = (props) => {
  const selectName = (e) => {
    
    for (let i = 0; i < users.length; i++) {
      if(users[i].name === e.target.value) {
        fetch( users[i].url )
        .then((response) => {          
          return response.json(); 
        })
        .then((res) => {
          props.changeState({curent: res});          
        });
      }
    }    
  }
  
  const users = props.usersList || [];
    
  return (
    <select onChange={selectName}>          
      { users.map((elem) => {
        return <option key={elem.name}>{elem.name}</option>
      }) }
    </select>
  );  
    
    
  
}

export default SelectUsers