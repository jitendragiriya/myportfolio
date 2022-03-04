import * as fs from "fs";

export default function handler(req, res) {
  fs.readdir("blogPost", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Internal server Error" });
    }
    res.status(200).json(data);
  });
}
