interface Flight {
  origin: string;
  destination: string;
  date: string;
  time: string;
  scales: number;
  prices: {
    economy: number;
    business: number;
    first: number;
  };
}

export default Flight;
