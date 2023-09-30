import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Aaa\n");
writer.write("Bbb\n");
writer.write("Ccc\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});