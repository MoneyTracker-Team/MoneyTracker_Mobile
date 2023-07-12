const formatTime = (dateTime) => {
  const dateObj = new Date(dateTime);
  const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return time;
};

export default formatTime;
