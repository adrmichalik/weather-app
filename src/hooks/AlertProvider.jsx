import React, { useContext, useState } from "react";

const AlertsContext = React.createContext([]);
const AddAlertContext = React.createContext();
const DeleteAlertContext = React.createContext();

export function useAlerts() {
  return useContext(AlertsContext);
}

export function useAddAlert() {
  return useContext(AddAlertContext);
}

export function useDeleteAlert() {
  return useContext(DeleteAlertContext);
}

export function AlertProvider({ children }) {
  const [alerts, setAlerts] = useState([]);

  function addAlert({ text, type }) {
    setAlerts((previousAlerts) => [...previousAlerts, { text, type }]);
  }

  function deleteAlert(id) {
    let newAlerts = alerts.filter((alert, ind) => ind != id);
    setAlerts(newAlerts);
  }

  return (
    <AlertsContext.Provider value={alerts}>
      <AddAlertContext.Provider value={addAlert}>
        <DeleteAlertContext.Provider value={deleteAlert}>
          {children}
        </DeleteAlertContext.Provider>
      </AddAlertContext.Provider>
    </AlertsContext.Provider>
  );
}
