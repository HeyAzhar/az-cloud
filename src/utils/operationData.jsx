// generate random numbers based on input int

const getRandomNumbers = (length, limit) => {
  const numbers = [];

  while (numbers.length < length) {
    const randomNum = Math.floor(Math.random() * limit);
    if (numbers.indexOf(randomNum) === -1) numbers.push(randomNum);
  }

  return numbers;
};

const storageLineChartData = [
  {
    title: "Memory Usage",
    labels: ["4hr", "5hr", "6hr", "7hr", "8hr", "9hr", "10hr"],
    series: [
      {
        curve: "linear",
        data: getRandomNumbers(7, 10000),
        label: "readBytes",
      },
      {
        curve: "linear",
        data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
        label: "writeBytes",
      },
    ],
  },
  {
    title: "CPU Usage",
    labels: ["4hr", "5hr", "6hr", "7hr", "8hr", "9hr", "10hr"],
    series: [
      {
        curve: "linear",
        data: [0, 0, 5, 0, 11, 5, 1],
        label: "cache transaction",
      },
    ],
  },
  {
    title: "Client Sessions",
    labels: ["4hr", "5hr", "6hr", "7hr", "8hr", "9hr", "10hr"],
    series: [
      {
        curve: "linear",
        data: getRandomNumbers(7, 10000),
        label: "bytes uploaded",
      },
      {
        curve: "linear",
        data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
        label: "bytes downloaded",
      },
    ],
  },
];

const storageBarChartData = [
  {
    title: "Lambda Traffic",
    series: [
      { dataKey: "one", label: "new-edge" },
      { dataKey: "two", label: "crown" },
    ],
    dataset: [
      {
        one: getRandomNumbers(1, 5000)[0],
        two: getRandomNumbers(1, 5000)[0],
        three: getRandomNumbers(1, 5000)[0],
        four: getRandomNumbers(1, 5000)[0],
        five: getRandomNumbers(1, 5000)[0],
        key: "08:30",
      },
      {
        one: getRandomNumbers(1, 5000)[0],
        two: getRandomNumbers(1, 5000)[0],
        three: getRandomNumbers(1, 5000)[0],
        four: getRandomNumbers(1, 5000)[0],
        five: getRandomNumbers(1, 5000)[0],
        key: "09:30",
      },
      {
        one: getRandomNumbers(1, 5000)[0],
        two: getRandomNumbers(1, 5000)[0],
        three: getRandomNumbers(1, 5000)[0],
        four: getRandomNumbers(1, 5000)[0],
        five: getRandomNumbers(1, 5000)[0],
        key: "10:30",
      },
      {
        one: getRandomNumbers(1, 5000)[0],
        two: getRandomNumbers(1, 5000)[0],
        three: getRandomNumbers(1, 5000)[0],
        four: getRandomNumbers(1, 5000)[0],
        five: getRandomNumbers(1, 5000)[0],
        key: "11:30",
      },
      {
        one: getRandomNumbers(1, 5000)[0],
        two: getRandomNumbers(1, 5000)[0],
        three: getRandomNumbers(1, 5000)[0],
        four: getRandomNumbers(1, 5000)[0],
        five: getRandomNumbers(1, 5000)[0],
        key: "12:30",
      },
      {
        one: getRandomNumbers(1, 5000)[0],
        two: getRandomNumbers(1, 5000)[0],
        three: getRandomNumbers(1, 5000)[0],
        four: getRandomNumbers(1, 5000)[0],
        five: getRandomNumbers(1, 5000)[0],
        key: "13:30",
      },
      {
        one: getRandomNumbers(1, 5000)[0],
        two: getRandomNumbers(1, 5000)[0],
        three: getRandomNumbers(1, 5000)[0],
        four: getRandomNumbers(1, 5000)[0],
        five: getRandomNumbers(1, 5000)[0],
        key: "14:30",
      },
      {
        one: getRandomNumbers(1, 5000)[0],
        two: getRandomNumbers(1, 5000)[0],
        three: getRandomNumbers(1, 5000)[0],
        four: getRandomNumbers(1, 5000)[0],
        five: getRandomNumbers(1, 5000)[0],
        key: "15:30",
      },
      {
        one: getRandomNumbers(1, 5000)[0],
        two: getRandomNumbers(1, 5000)[0],
        three: getRandomNumbers(1, 5000)[0],
        four: getRandomNumbers(1, 5000)[0],
        five: getRandomNumbers(1, 5000)[0],
        key: "16:30",
      },
      {
        one: getRandomNumbers(1, 5000)[0],
        two: getRandomNumbers(1, 5000)[0],
        three: getRandomNumbers(1, 5000)[0],
        four: getRandomNumbers(1, 5000)[0],
        five: getRandomNumbers(1, 5000)[0],
        key: "17:30",
      },
    ],
  },
  {
    title: "Client Traffic",
    series: [
      { dataKey: "one", label: "Fluid" },
      { dataKey: "two", label: "Mork" },
      { dataKey: "three", label: "Krain" },
      { dataKey: "four", label: "Ninja" },
    ],
    dataset: [
      {
        one: getRandomNumbers(1, 20000)[0],
        two: getRandomNumbers(1, 20000)[0],
        three: getRandomNumbers(1, 20000)[0],
        four: getRandomNumbers(1, 20000)[0],
        five: getRandomNumbers(1, 20000)[0],
        key: "Jan",
      },
      {
        one: getRandomNumbers(1, 20000)[0],
        two: getRandomNumbers(1, 20000)[0],
        three: getRandomNumbers(1, 20000)[0],
        four: getRandomNumbers(1, 20000)[0],
        five: getRandomNumbers(1, 20000)[0],
        key: "Fev",
      },
      {
        one: getRandomNumbers(1, 20000)[0],
        two: getRandomNumbers(1, 20000)[0],
        three: getRandomNumbers(1, 20000)[0],
        four: getRandomNumbers(1, 20000)[0],
        five: getRandomNumbers(1, 20000)[0],
        key: "Mar",
      },
      {
        one: getRandomNumbers(1, 20000)[0],
        two: getRandomNumbers(1, 20000)[0],
        three: getRandomNumbers(1, 20000)[0],
        four: getRandomNumbers(1, 20000)[0],
        five: getRandomNumbers(1, 20000)[0],
        key: "Apr",
      },
      {
        one: getRandomNumbers(1, 20000)[0],
        two: getRandomNumbers(1, 20000)[0],
        three: getRandomNumbers(1, 20000)[0],
        four: getRandomNumbers(1, 20000)[0],
        five: getRandomNumbers(1, 20000)[0],
        key: "May",
      },
      {
        one: getRandomNumbers(1, 20000)[0],
        two: getRandomNumbers(1, 20000)[0],
        three: getRandomNumbers(1, 20000)[0],
        four: getRandomNumbers(1, 20000)[0],
        five: getRandomNumbers(1, 20000)[0],
        key: "June",
      },
      {
        one: getRandomNumbers(1, 20000)[0],
        two: getRandomNumbers(1, 20000)[0],
        three: getRandomNumbers(1, 20000)[0],
        four: getRandomNumbers(1, 20000)[0],
        five: getRandomNumbers(1, 20000)[0],
        key: "July",
      },
      {
        one: getRandomNumbers(1, 20000)[0],
        two: getRandomNumbers(1, 20000)[0],
        three: getRandomNumbers(1, 20000)[0],
        four: getRandomNumbers(1, 20000)[0],
        five: getRandomNumbers(1, 20000)[0],
        key: "Aug",
      },
      {
        one: getRandomNumbers(1, 20000)[0],
        two: getRandomNumbers(1, 20000)[0],
        three: getRandomNumbers(1, 20000)[0],
        four: getRandomNumbers(1, 20000)[0],
        five: getRandomNumbers(1, 20000)[0],
        key: "Sept",
      },
      {
        one: getRandomNumbers(1, 20000)[0],
        two: getRandomNumbers(1, 20000)[0],
        three: getRandomNumbers(1, 20000)[0],
        four: getRandomNumbers(1, 20000)[0],
        five: getRandomNumbers(1, 20000)[0],
        key: "Oct",
      },
      {
        one: getRandomNumbers(1, 20000)[0],
        two: getRandomNumbers(1, 20000)[0],
        three: getRandomNumbers(1, 20000)[0],
        four: getRandomNumbers(1, 20000)[0],
        five: getRandomNumbers(1, 20000)[0],
        key: "Nov",
      },
      {
        one: getRandomNumbers(1, 20000)[0],
        two: getRandomNumbers(1, 20000)[0],
        three: getRandomNumbers(1, 20000)[0],
        four: getRandomNumbers(1, 20000)[0],
        five: getRandomNumbers(1, 20000)[0],
        key: "Dec",
      },
    ],
  },
  {
    title: "Cloud Traffic",
    series: [
      { dataKey: "one", label: "HiDay" },
      { dataKey: "two", label: "Rouk" },
    ],
    dataset: [
      {
        one: getRandomNumbers(1, 15000)[0],
        two: getRandomNumbers(1, 15000)[0],
        three: getRandomNumbers(1, 15000)[0],
        four: getRandomNumbers(1, 15000)[0],
        five: getRandomNumbers(1, 15000)[0],
        key: "Jan",
      },
      {
        one: getRandomNumbers(1, 15000)[0],
        two: getRandomNumbers(1, 15000)[0],
        three: getRandomNumbers(1, 15000)[0],
        four: getRandomNumbers(1, 15000)[0],
        five: getRandomNumbers(1, 15000)[0],
        key: "Fev",
      },
      {
        one: getRandomNumbers(1, 15000)[0],
        two: getRandomNumbers(1, 15000)[0],
        three: getRandomNumbers(1, 15000)[0],
        four: getRandomNumbers(1, 15000)[0],
        five: getRandomNumbers(1, 15000)[0],
        key: "Mar",
      },
      {
        one: getRandomNumbers(1, 15000)[0],
        two: getRandomNumbers(1, 15000)[0],
        three: getRandomNumbers(1, 15000)[0],
        four: getRandomNumbers(1, 15000)[0],
        five: getRandomNumbers(1, 15000)[0],
        key: "Apr",
      },
      {
        one: getRandomNumbers(1, 15000)[0],
        two: getRandomNumbers(1, 15000)[0],
        three: getRandomNumbers(1, 15000)[0],
        four: getRandomNumbers(1, 15000)[0],
        five: getRandomNumbers(1, 15000)[0],
        key: "May",
      },
      {
        one: getRandomNumbers(1, 15000)[0],
        two: getRandomNumbers(1, 15000)[0],
        three: getRandomNumbers(1, 15000)[0],
        four: getRandomNumbers(1, 15000)[0],
        five: getRandomNumbers(1, 15000)[0],
        key: "June",
      },
      {
        one: getRandomNumbers(1, 15000)[0],
        two: getRandomNumbers(1, 15000)[0],
        three: getRandomNumbers(1, 15000)[0],
        four: getRandomNumbers(1, 15000)[0],
        five: getRandomNumbers(1, 15000)[0],
        key: "July",
      },
      {
        one: getRandomNumbers(1, 15000)[0],
        two: getRandomNumbers(1, 15000)[0],
        three: getRandomNumbers(1, 15000)[0],
        four: getRandomNumbers(1, 15000)[0],
        five: getRandomNumbers(1, 15000)[0],
        key: "Aug",
      },
      {
        one: getRandomNumbers(1, 15000)[0],
        two: getRandomNumbers(1, 15000)[0],
        three: getRandomNumbers(1, 15000)[0],
        four: getRandomNumbers(1, 15000)[0],
        five: getRandomNumbers(1, 15000)[0],
        key: "Sept",
      },
      {
        one: getRandomNumbers(1, 15000)[0],
        two: getRandomNumbers(1, 15000)[0],
        three: getRandomNumbers(1, 15000)[0],
        four: getRandomNumbers(1, 15000)[0],
        five: getRandomNumbers(1, 15000)[0],
        key: "Oct",
      },
      {
        one: getRandomNumbers(1, 15000)[0],
        two: getRandomNumbers(1, 15000)[0],
        three: getRandomNumbers(1, 15000)[0],
        four: getRandomNumbers(1, 15000)[0],
        five: getRandomNumbers(1, 15000)[0],
        key: "Nov",
      },
      {
        one: getRandomNumbers(1, 15000)[0],
        two: getRandomNumbers(1, 15000)[0],
        three: getRandomNumbers(1, 15000)[0],
        four: getRandomNumbers(1, 15000)[0],
        five: getRandomNumbers(1, 15000)[0],
        key: "Dec",
      },
    ],
  },
];

export { storageLineChartData, storageBarChartData };
