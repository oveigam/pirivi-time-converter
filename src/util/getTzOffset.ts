import dayjs from "dayjs";

export default function () {
  const offset = dayjs().utcOffset();
  if (!offset || offset === 0) {
    return "+00:00";
  }

  const convertedOffset = offset / 60;
  const decimals = convertedOffset % 1;
  const sign = offset < 0 ? "-" : "+";
  const hours = Math.abs(convertedOffset - decimals)
    .toString()
    .padStart(2, "0");
  const minutes = (Math.abs(decimals) * 60).toString().padStart(2, "0");

  return "UTC" + sign + hours + ":" + minutes;
}
