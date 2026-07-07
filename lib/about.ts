export const founder = {
  name: 'Mr. Sivakumar V K',
  foundedYear: 1996,
  experience: '30+ years',
  photo: {
    src: '/images/about/founder.webp',
    alt: 'Founder of Omegaa Construction',
  },
  philosophy:
    'With over three decades in the construction industry, Mr. Sivakumar V K has built Omegaa Construction on a simple belief—that every structure must reflect uncompromising quality, honest workmanship, and a deep commitment to the clients who trust us with their vision.',
  philosophySecondary:
    'We deliver 2D floor plans and 3D SketchUp designs that help you visualize every detail before construction begins.',
} as const;

export const journeyTimeline = [
  {
    year: '1996',
    title: 'Omegaa Construction Founded',
    description:
      'Mr. Sivakumar V K established Omegaa Construction in Kanchipuram with a vision to deliver dependable, quality-driven construction services.',
  },
  {
    year: '2000',
    title: 'Siva Aruna Theatre Construction',
    description:
      'Successfully executed the construction of Siva Aruna Theatre in 2000.',
  },
  {
    year: '2003–2011',
    title: 'Bakthavachalam Polytechnic (Self Financing College)',
    description:
      'Led the construction of Bakthavachalam Polytechnic, a self-financing college, contributing to the development of a major educational institution.',
  },
  {
    year: '2018–2020',
    title: 'Mahindra & Mahindra Vehicle Test Track Project',
    description:
      'Served as a Construction Engineer on the Mahindra & Mahindra Vehicle Test Track Project in association with Larsen & Toubro (L&T).',
  },
  {
    year: 'Today',
    title: 'Residential & Commercial Projects',
    description:
      'Delivered lots of residential and commercial projects and building a reputation for reliability and craftsmanship.',
  },
] as const;

export const coreValues = [
  {
    title: 'Integrity',
    description:
      'Honest dealings and ethical practices in every engagement, from the first consultation to final handover.',
  },
  {
    title: 'Quality',
    description:
      'Superior materials, skilled workmanship, and rigorous standards that produce structures built to last.',
  },
  {
    title: 'Transparency',
    description:
      'Clear communication and detailed cost estimation with no hidden charges throughout the project.',
  },
  {
    title: 'Safety',
    description:
      'Rigorous on-site safety practices that protect our team, our clients, and every structure we build.',
  },
  {
    title: 'Customer Satisfaction',
    description:
      'Your requirements and peace of mind guide every decision we make at every stage of construction.',
  },
] as const;

export const missionVision = {
  mission:
    'To deliver reliable, high-quality construction solutions that exceed client expectations while maintaining transparency, safety, and timely execution.',
  vision:
    'To become the preferred construction partner for homeowners and businesses by delivering projects with quality, transparency, and lasting value.',
} as const;

export const aboutCta = {
  heading: 'Planning Your Next Construction Project?',
  subtext: "Let's discuss your ideas and help you build with confidence.",
  buttonLabel: 'Contact Us',
  buttonHref: '/contact',
} as const;
