function TimeSlot({ status, time, changeSlotState }: any) {
  const classes = `time-slot ${status || "available"}`;

  const checkAndSaveSlot = (time: string) => {
    changeSlotState(time);
  }
  return (
    <div onClick={() => checkAndSaveSlot(time)} className={classes}>
      {time}
    </div>
  );
}

export default TimeSlot;
