import { IUser } from '@/types/common';
import { faker } from '@faker-js/faker';

export const mockEmployees: IUser[] = [
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    },
    performanceUp: true
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    },
    isBestPerformance: true
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    },
    performanceDown: true
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    },
    performanceDown: true
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    },
    performanceUp: true
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  },
  {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    email: faker.internet.email(),
    score: Number(faker.commerce.price({ min: 10, max: 80, dec: 0 })),
    performance: Number(faker.commerce.price({ min: 2, max: 9, dec: 0 })),
    avatar: {
      url: faker.internet.avatar()
    }
  }
];
