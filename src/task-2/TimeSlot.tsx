function TimeSlot({ status, time }: any) {
  const classes = `time-slot ${status || "available"}`;
  return (
    <div className={classes}>
      {time}
    </div>
  );
}

export default TimeSlot;
