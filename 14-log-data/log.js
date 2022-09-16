/* challenge 1 */
const surprisingFact = "The bumblebee bat is the world's smallest mammal";

console.log("surprisingFact:", surprisingFact);
console.log({surprisingFact});



/* challenge 2 */
const familyTree = [
  {
    name: "Person 1",
    children: [
      {
        name: "Person 2",
        children: [
          {
            name: "Person 3",
            children: [
              {
                name: "Person 4",
              },
            ],
          },
        ],
      },
    ],
  },
];


console.log(JSON.stringify(familyTree, null, 2));
console.dir(familyTree, {depth: null});



/* challenge 3 */
function importantTask() {
  console.count("counter");
}

importantTask();
importantTask();
importantTask();
importantTask();
console.countReset("counter");
importantTask();
importantTask();
