import faker from "faker";

export default function generateItems(count = 5) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push({
      user: faker.internet.userName(),
      title: faker.lorem.sentence(),
      totalComments: faker.random.number(1000),
      subreddit: faker.random.word(),
      submittedAt: faker.date.between(
        Date.now(),
        Date.now() - 3 * 24 * 60 * 60 * 1000
      ),
      upvotes: faker.random.number(10000),
    });
  }
  return items;
}
