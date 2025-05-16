const formatTime = (time: number, type: string) => {
  switch (type) {
    case "hour":
      return Math.floor(time / 60);
    case "minute":
      return time;
    default:
      return time;
  }
}

export default formatTime;