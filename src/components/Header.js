import React from 'react';

export default function Header(props) {
  const getDisplayEnableOfflineOption = () => props.displayEnableOfflineOption ?
    <button className="enable-offline">Enable Offline</button> :
    null;

  return (<div className={props.componentClassName}>
        <label>{props.headerLabel}</label>
        {getDisplayEnableOfflineOption()}
      </div>
  );
}