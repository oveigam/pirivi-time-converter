import dayjs from "dayjs";

export default function canvioHora (date: Date | null) {
  if (!date) return null;
  const randomNumber = Math.random() * (5 - 1) + 1;

  return dayjs(date).add(randomNumber, "hour").format("HH:mm");
}
