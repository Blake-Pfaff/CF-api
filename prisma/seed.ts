import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const fighterData: Prisma.FighterCreateInput[] = [
  {
    name: 'Castor Troy',
    movie: 'Face/Off',
    strength: 3,
    endurance: 3,
    url: 'https://www.imdb.com/title/tt0119094/?ref_=nm_flmg_act_79',
    health: 3,
    image: 'place holder',
  },
  {
    name: 'Ronny Cammareri',
    movie: 'Moonstruck',
    strength: 2,
    endurance: 5,
    url: 'https://www.imdb.com/title/tt0093565/?ref_=nm_flmg_act_98',
    health: 2,
    image: 'place holder',
  },
  {
    name: 'Benjamin Franklin Gates',
    movie: 'National Treasure',
    strength: 3,
    endurance: 3,
    url: 'https://www.imdb.com/title/tt0368891/?ref_=nm_flmg_act_66',
    health: 5,
    image: 'place holder',
  },
  {
    name: 'Big Daddy',
    movie: 'Kick Ass',
    strength: 9,
    endurance: 9,
    url: 'https://www.imdb.com/title/tt1250777/?ref_=nm_flmg_act_50',
    health: 9,
    image: 'place holder',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of fighterData) {
    const user = await prisma.fighter.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
