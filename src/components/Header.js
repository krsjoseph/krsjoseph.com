import React from 'react';

const Header = (props) =>{
  return(
    <h1>{props.name} - {props.title}</h1>
  )
}

export default Header;