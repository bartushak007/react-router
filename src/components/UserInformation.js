import React from "react";

const UserInformation = props => {
  const ListOfUsers = () => {
    const arr = props.usersList || [];
     let size = 4;
    return arr.map(elem => {
      size = size + 8;
      return <h2 style={{ fontSize: size }} key={elem.name}>{elem.name}</h2>
    });
  };

  const List = () => {
    let arr = [],
     size = 4;
    for (let key of Object.keys(props.information)) {
      size = size + 4;
      arr.push(
        <h2 key={key} style={{ fontSize: size }}>
          <span>{key}</span> {props.information[key]}
        </h2>
      );
    }
    return arr;
  };

  const InformationOfUser = () => {
    if (Object.keys(props.information).length) {
      return (
        <>
          <List />
        </>
      );
    } else {
      return(        
          <ListOfUsers/>        
      ) 
        
    }
  };

  return <div>{<InformationOfUser />}</div>;
};

export default UserInformation;
