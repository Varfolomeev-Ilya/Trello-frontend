import React from 'react';

function Header(props) {
  return(
    <header>
      <h1>table</h1>
      <input
        onKeyPress={props.onEnterPress}
        onChange={props.onInputChange}
        value={props.inputValue}
        placeholder="what needs to be done?"
        maxLength="10"
      />
      <button onClick={props.onCheckAllBtnClick}>CHECK ALL</button>
      <button onClick={props.onAddBtnClick}>ADD</button>    
    </header>
  )
}

export default Header;
