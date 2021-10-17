import { PrismaClient } from '@prisma/client';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method !== 'POST') {
    res.status(404).json({ err: 'MEtodo nao existe' });
  }

  const { name, email, age } = req.body;

  const saveUser = await prisma.users.create({ data: { name, email, age } });

  res.json(saveUser);
};

export default handler;
