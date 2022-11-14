import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const contactData = await req.body;

    const savedContact = await prisma.contact.create({
      data: contactData,
    });

    savedContact &&
      res.status(200).json({ message: "Thank you for connection with us." });
  } else {
    res.status(200).send("Internal server Error.");
  }
}
