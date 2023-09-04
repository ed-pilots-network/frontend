const credits = new Intl.NumberFormat('en-US');

const formatThousands = (price: number) => credits.format(price);

const formatLocalTime = (date: string) => new Date(date).toLocaleString();

export { formatThousands, formatLocalTime };
