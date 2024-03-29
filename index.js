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
} ;

type Dog = FromSchema<typeof dogSchema>;

const content: Dog = {
  name: 'a',
  age: 'o',
  hobbies: ['al'],
  favoriteFood: 'pizz'
};

fs.appendFile("dos.log", content, (err) => {
  if (err) {
    console.error(err);
  }
});
