import styles from './AlertContainer.module.css';
import { useEffect, useState } from 'react';
import { useAlerts } from '../hooks/useAlerts';
import type { AlertType } from '../model';

function AlertItem({ alert }: { alert: AlertType }) {
  const [isExiting, setIsExiting] = useState(false);
  const alertClasses = [
    styles.alert,
    isExiting ? styles.exit : styles.enter,
    styles[alert.type],
  ];
  const { dispatch } = useAlerts();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsExiting(true);
    }, 2700);

    const timeout2 = setTimeout(() => {
      dispatch({ type: 'REMOVE_ALERT', payload: { id: alert.id } });
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, [alert.id]);

  return <div className={alertClasses.join(' ')}>{alert.message}</div>;
}

export function AlertContainer() {
  const { alerts } = useAlerts();

  return (
    <div className={styles.alertContainer}>
      {alerts.map((alert) => (
        <AlertItem key={alert.id} alert={alert} />
      ))}
    </div>
  );
}
