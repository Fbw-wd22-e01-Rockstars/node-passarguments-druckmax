const getStars = (num = 10, string = "hi") => {
  const starRow = "".padStart(num, "*");

  console.log(`${starRow}\n${string}\n${starRow}`);
};

export default getStars;
