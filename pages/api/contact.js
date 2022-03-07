import * as fs from "fs";

export default function handler(req, res) {
  if (req.method === "POST") {
    let data = fs.readdirSync("database/contactData");
    fs.writeFile(
      `database/contactData/contact${data.length + 1}.json`,
      JSON.stringify(req.body),
      () => {
        res.status(200).json({ message: `your contact is send successfully.${data.length}` });
      }
    );
  } else {
    res.status(200).send("");
  }
}
