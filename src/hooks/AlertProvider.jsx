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
