import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  
  const deleteProject = await prisma.project.delete({
    where: {
      id: req.body.id,
    },
  });

  if (deleteProject) res.status(200).json("project deleted successfully.");
  else res.status(200).send("Internal server Error.");
}
