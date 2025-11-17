import { useEffect, useState } from "react";

export default function EventTime() {
  const [date, setdate] = useState({ day1: 0, month: 0, year: 0 });

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    setdate({
      day1: today.getDate(),
      month: tomorrow.getMonth() + 1,
      year: tomorrow.getFullYear(),
    });
  }, []);

  return (
    <h1>
      {date.day1} / {date.month} / {date.year}
    </h1>
  );
}
