import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const updateProject = await prisma.project.update({
      where: {
        id: Number(req.query.id),
      },
      data: {
        stack: req.body.stack,
        title: req.body.title,
        description: req.body.description,
        techs: {
          create: [
            { name: req.body.techs.react },
            { name: req.body.techs.nodejs },
          ],
        },
      },
    });

    updateProject && res.status(200).json(updateProject);
  } else {
    res.status(200).send("Internal server Error.");
  }
}
