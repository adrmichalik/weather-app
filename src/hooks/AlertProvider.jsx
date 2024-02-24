import React, { useContext, useState } from "react";

const AlertsContext = React.createContext([]);
const AddAlertContext = React.createContext();

export function useAlerts() {
  return useContext(AlertsContext);
}

export function addAlert() {
  return useContext(AddAlertContext);
}

export function AlertProvider({ children }) {
  const [alerts, setAlerts] = useState([]);

  return (
    <AlertsContext.Provider value={alerts}>
      <AddAlertContext.Provider value={addAlert}>
        {children}
      </AddAlertContext.Provider>
    </AlertsContext.Provider>
  );
}
