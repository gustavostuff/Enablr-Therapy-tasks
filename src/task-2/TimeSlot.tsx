function TimeSlot({ status, owned, time, changeSlotState }: any) {
  const classes = `time-slot ${status || "available"} ${owned ? "owned" : ""}`;

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
