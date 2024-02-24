import React, { useContext, useState } from "react";

const AlertsContext = React.createContext([]);

export function useAlerts() {
  return useContext(AlertsContext);
}

export function AlertProvider({ children }) {
  const [alerts, setAlerts] = useState([]);

  return (
    <AlertsContext.Provider value={alerts}>{children}</AlertsContext.Provider>
  );
}
