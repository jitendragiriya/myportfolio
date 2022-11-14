import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const contacts = await prisma.contact.findMany({});
    console.log(contacts);
    res.status(200).json(contacts);
  } else {
    res.status(200).send("Internal server Error.");
  }
}
