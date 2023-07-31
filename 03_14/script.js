/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);
const harryPotter = new Book(
  "Harry Potter: Deady Hollows",
  "J. K. Rowling",
  "Magic",
  200,
  "United Kingdoms",
  "July 21, 2007 12:00:00 CST",
  100,
  150
)


console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
console.log("Book1",harryPotter)
console.log("Book1",harryPotter.totalPopularity())
console.log("Book1",harryPotter.totalProfit())
