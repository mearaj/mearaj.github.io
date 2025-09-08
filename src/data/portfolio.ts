export type SocialLink = { label: string; href: string };
export type PortfolioData = {
  name: string;
  role: string;
  summary: string;
  skillsGoodAt: string[];
  skillsGained: string[];
  skillsILove: string[];
  email?: string;
  location?: string;
  socials: SocialLink[];
  githubUsername: string;
};

export const portfolio: PortfolioData = {
  name: 'Mearaj',
  role: 'Software Developer',
  summary:
    'I am cross-platform apps developer for Browser • Desktop • Mobile.',
  skillsGoodAt: [
    'TypeScript',
    'React',
    'Vite',
    'Next.js',
    'Material UI',
    'Node.js',
    'REST',
    'HTML',
    'CSS',
    'JavaScript',
    'Flutter & Dart',
    'MongoDB',
    'Solidity',
    'Web3',
    'Rust',
  ],
  skillsGained: [
    'TypeScript',
    'React',
    'Vite',
    'Next.js',
    'Material UI',
    'Node.js',
    'GraphQL',
    'REST',
    'Testing',
    'HTML',
    'CSS',
    'JavaScript',
    'Angular',
    'React Native',
    'Flutter & Dart',
    'Apache Cordova',
    'UI Prototyping',
    'Go',
    'C',
    'C++',
    'Rust',
    'PostgresSQL',
    'MongoDB',
    'NoSQL',
    'Solidity',
    'Web3',
    'REST'
  ],
  skillsILove: [
    'TypeScript',
    'React',
    'Vite',
    'Next.js',
    'Material UI',
    'Node.js',
    'HTML',
    'CSS',
    'JavaScript',
    'Flutter & Dart',
    'Solidity',
    'Web3',
    'Rust',
  ],

  email: 'mearajbhagad@gmail.com',
  location: 'Remote / India',
  socials: [
    {label: 'GitHub', href: 'https://github.com/mearaj'}
    // Add more like { label: 'LinkedIn', href: 'https://linkedin.com/in/...' }
  ],
  githubUsername: 'mearaj'
};
