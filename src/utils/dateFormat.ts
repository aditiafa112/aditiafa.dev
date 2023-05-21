export const dateFormat = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
