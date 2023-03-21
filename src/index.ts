import { FromSchema } from "json-schema-to-ts";
import * as fs from "fs";

const dogSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "integer" },
    hobbies: { type: "array", items: { type: "string" } },
    favoriteFood: { enum: ["pizza", "taco", "fries"] },
  },
  required: ["name", "age"],
} as const;

type Dog = FromSchema<typeof dogSchema>;
const prueba: Dog = {
  name: '30',
  age: 55,
  hobbies: ['otro'],
  favoriteFood: 'pizza'
}
console.log(typeof prueba)
console.log(prueba)
//console.log(Dog)
// fs.appendFile("dos.log", Dog, (err) => {
//   if (err) {
//     console.error(err);
//   }
// });
