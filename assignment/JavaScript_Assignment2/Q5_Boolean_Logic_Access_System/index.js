// Q5: Boolean Logic Access System

function checkAccess(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  // Door "closed" is treated as locked; all conditions must be true (&&)
  const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  console.log(
    `Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, ` +
    `Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside} -> ${isSecure ? "Secure" : "Unsafe"}`
  );

  // Same rule using ! and || : any single problem makes the house unsafe
  const somethingWrong = !isDoorLocked || !isWindowClosed || !isAlarmOn || !isOwnerInside;
  console.log(` Check with ! and ||: ${somethingWrong ? "Unsafe" : "Secure"}`);
}

// Test different outcomes
checkAccess(true, true, true, true);   // Secure
checkAccess(false, true, true, true);  // Unsafe (door open)
checkAccess(true, true, false, true);  // Unsafe (alarm off)
checkAccess(true, true, true, false);  // Unsafe (owner not inside)
