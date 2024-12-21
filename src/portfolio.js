const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://discord.gg/JsZruPsq',
  title: 'IT.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sami Bentaiba',
  role: 'Full stack developer',
  description:
    'I am a developer and educator with a passion for web development and knowledge sharing. The three projects in my portfolio showcase ideas and problem-solving concepts. My goal is to make an impact in the workplace while continuing to learn and inspire others.',
  resume:
    'https://drive.google.com/file/d/1BN5K94nFJiDu7mSS5eDgSeU9JZ4tod-g/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/samibentaiba',
    github: 'https://github.com/samibentaiba',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Computer Science Engineering Hub (CSE HUB)',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Express', 'React'],
    sourceCode: 'https://github.com/samibentaiba/cse-hub',
    //  livePreview: 'https://github.com/samibentaiba/cse-hub',
  },
  {
    name: 'Information Technology Competitive Programming (ITCP)',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Django', 'React'],
    sourceCode: 'https://github.com/samibentaiba/itcp-prv',
    //   livePreview: 'https://github.com/samibentaiba/itcp-prv',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'MERN STACK',
  'LINUX & VIRTUALIZATION EXPERTISE',
  'CODE EDITORS MASTERY',
  'TEAM LEADERSHIP & COLLABORATION',
  'OPEN SOURCE LITERACY',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'samibentaiba25@gmail.com',
}

export { header, about, projects, skills, contact }
