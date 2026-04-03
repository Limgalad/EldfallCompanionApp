import fs from "fs";

const text = fs.readFileSync("RulesEldfall1.6.md", "utf-8");
const lines = text.split("\n").slice(3378, 3390);
for (const line of lines) {
  console.log(JSON.stringify(line));
}
