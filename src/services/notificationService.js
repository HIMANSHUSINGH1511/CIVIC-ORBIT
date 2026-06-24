const KEY = "civic_notifications";

export const getNotifications = () => {
  return (
    JSON.parse(
      localStorage.getItem(KEY)
    ) || []
  );
};

export const addNotification = (
  message
) => {

  const notifications =
    getNotifications();

  notifications.unshift({
    id: Date.now(),
    message,
    time:
      new Date().toLocaleString(),
  });

  localStorage.setItem(
    KEY,
    JSON.stringify(notifications)
  );
};