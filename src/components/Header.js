import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(props) {
  const getDisplayEnableOfflineOption = () => props.displayEnableOfflineOption ?
    <button className="enable-offline">Enable Offline</button> :
    null;

  const getBackButton = () => props.displayBackButton ? 
    <Link to="/people"><button>Back</button></Link> :
    null;

  return (<div className={props.componentClassName}>
        {getBackButton()}
        <label>{props.headerLabel}</label>
        {getDisplayEnableOfflineOption()}
      </div>
  );
}