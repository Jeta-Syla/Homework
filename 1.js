let st = "0631111234 3334568768 4446575547";

let numbers = st.split(" ");

numbers.forEach(function(num) {
  let operator = num.slice(0, 3);
  let part1 = num.slice(3, 6);
  let part2 = num.slice(6);
  console.log(`(${operator}) ${part1} ${part2}`);
});
