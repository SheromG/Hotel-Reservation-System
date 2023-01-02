months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (date) => {
  return {
    month: monthParser(date.getMonth()),
    monthIndex: date.getMonth(),
    day: date.getDate(),
    year: date.getFullYear(),
    hour: hourFormat(date.getHours()),
    minute: minuteFormat(date.getMinutes()),
    second: date.getSeconds(),
    suffix: hourSuffix(date.getHours()),
    date: function () {
      return (
        this.month +
        " " +
        this.day +
        ", " +
        this.year +
        " " +
        this.hour +
        ":" +
        this.minute +
        " " +
        this.suffix
      );
    },
  };
};

const monthParser = (month) => {
  return months[month];
};

const getDateNow = () => {
  return formatDate(new Date());
};

const getDateAdvance = (month, day) => {
  const date = new Date();
  date.setMonth(date.getMonth() + month, day);
  return formatDate(date);
};

const hourFormat = (hour) => {
  return hour > 12 ? hour - 12 : hour;
};

const hourSuffix = (hour) => {
  return hour > 12 ? "pm" : "am";
};

const minuteFormat = (minute) => {
  return minute > 10 ? minute : "0" + minute;
};
