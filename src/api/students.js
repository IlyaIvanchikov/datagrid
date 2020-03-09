
import faker from 'faker'

faker.seed(74)

const makeFake = idx => {
  return {
    id: 11523 + idx,
    rank: idx,
    name: faker.name.findName(),
    githubId: faker.internet.email(),
    totalScore: 0,
    locationName: faker.address.city(),
    taskResults: [Math.floor(Math.random() * 10)],
    isActive: faker.random.boolean(),
  }
}

const data = [...new Array(1000)].map((_, idx) => makeFake(idx))

export default {
  data
}