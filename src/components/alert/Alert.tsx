import React, { useState } from 'react'
import { Message } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
const AlertComponent = () => {


  //Redux state
  const {
    alert: { alertContent: { isVisibleAlert, type, severity, message } },
  }: {
    alert: {
      alertContent: {
        isVisibleAlert:boolean,
        type: string;
        severity: string;
        message: string;
      };
    }
  } = useSelector((state: RootState) => state);
  

  return (
    <>
      {isVisibleAlert && <Message
        icon={severity}
        header={type}
        content={message}
      />}
    </>
  );
}

export default AlertComponent;