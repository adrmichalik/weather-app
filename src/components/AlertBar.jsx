import Alert from "react-bootstrap/Alert";
import { useAlerts, useDeleteAlert } from "../hooks/AlertProvider";
import { CloseButton } from "react-bootstrap";

function AlertBar() {
  const alerts = useAlerts();
  const deleteAlert = useDeleteAlert();

  if (alerts.length === 0) return;

  return (
    <div className="alerts">
      {alerts.map((alert, ind) => {
        return (
          <Alert
            key={ind}
            variant={alert.type === undefined ? "info" : alert.type}
          >
            <span>{alert.text}</span>
            <CloseButton onClick={() => deleteAlert(ind)} />
          </Alert>
        );
      })}
    </div>
  );
}

export default AlertBar;
