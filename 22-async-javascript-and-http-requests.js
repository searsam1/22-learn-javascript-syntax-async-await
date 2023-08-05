let {
  cookBeans,
  steamBroccoli,
  cookRice,
  bakeChicken,
} = require("./library.js");

// Write your code below:

async function serveDinnerAgain() {
  const resultArray = await Promise.all([
    steamBroccoli(),
    cookRice(),
    bakeChicken(),
    cookBeans(),
  ]);
  console.log(
    `Dinner is served. We're having ${resultArray[0]}, ${resultArray[1]}, ${resultArray[2]}, and ${resultArray[3]}.`
  )
}
serveDinnerAgain()
