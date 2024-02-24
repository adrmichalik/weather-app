import React, { useContext, useState } from "react";

const AlertsContext = React.createContext([]);
const AddAlertContext = React.createContext();
const DeleteAlertContext = React.createContext();

/**
 * Returns array state with alerts
 */
export function useAlerts() {
  return useContext(AlertsContext);
}

/**
 * Returns function to add alert to `AlertsContext`
 * - to get current state use `useAlerts()`
 * @param {string} text - returning function param
 * @param {string} type - returning function param - see bootstrap types of alerts
 * @return {function}
 */
export function useAddAlert() {
  return useContext(AddAlertContext);
}

/**
 * Returns function to delete alert in `AlertsContext`
 * - to get current state use `useAlerts()`
 * @param {string} id - returning function param - id of alert
 * @return {function}
 */
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
