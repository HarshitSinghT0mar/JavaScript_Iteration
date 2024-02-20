//return the book object with matching title
let input = [
  { title: "5 AM Club", author: "Robin Sharma" },
  { title: "Broken Wings", author: "Sarojini Naidu" },
  { title: "Bubble", author: "Mulk Raj Anand" },
];

const findObj = (arrOfObj, target) => {
  const resObj = arrOfObj.find((obj) => {
    return obj.title === target;
  });

  return resObj;
};

console.log(findObj(input, "Broken Wings"));
