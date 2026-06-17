function formatTime([hh, mm, ss]) {
  if (
    hh < 0 || hh > 23 ||
    mm < 0 || mm > 59 ||
    ss < 0 || ss > 59
  ) {
    throw new Error("Invalid time");
  }

  return [hh, mm, ss]
    .map(n => String(n).padStart(2, "0"))
    .join(":");
}

console.log(formatTime([23, 45, 56])); // 23:45:56