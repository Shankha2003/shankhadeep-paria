import React from 'react';
import { Project, Experience, Service, Interest } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'SaaS Landing Page and Design System',
    description: 'Designing a scalable SaaS landing page with a structured design system, reusable components, and clear visual hierarchy for better clarity and consistency.',
    tags: ['UI/UX', 'Design System'],
    image: '/projects/saas-cover.jpg',
    color: '#FEB05D',
    link: 'https://www.behance.net/gallery/243477227/SaaS-Landing-Page-Design-System'
  },
  {
    id: '02',
    title: 'TaskMate — Personalized Productivity AI',
    description: 'A productivity AI experience focused on personalization, trust-driven UX, and adapting workflows for study, work, and life.',
    tags: ['UX Case Study', 'AI/ML'],
    image: '/projects/taskmate-cover.jpg',
    color: '#5A7ACD',
    link: 'https://www.behance.net/gallery/243232673/TaskMate-Designing-a-Personalized-Productivity-AI'
  },
  {
    id: '03',
    title: 'Boxmoji v1 — Hand-drawn Emoji Icons',
    description: 'A playful hand-drawn emoji illustration set designed to bring fun and personality into digital products and interfaces.',
    tags: ['Illustration', 'Icon Design'],
    image: '/projects/boxmoji-cover.jpg',
    color: '#F5F2F2',
    link: 'https://www.behance.net/gallery/163792407/Boxmoji-v1-Hand-drawn-emoji-icons'
  }
];

export const EXPERIENCES: Experience[] = [
    {
    id: 'e1',
    role: 'Mentor & Core Member',
    company: 'WallGodds Project & Open Source Programs',
    period: '2024 - Present',
    achievements: [
      'Served as Core Member at Coding Club & IoT Club, contributing to technical and creative initiatives',
      'Mentored students and contributors across multiple open source programs and design-focused projects'
    ],
    tech: ['WoC 2024', 'JWoC Season 6', 'Apertre 2.0', 'GSSoC 2025', 'Apertre 3.0', 'WoC 5.0']
  },
  {
    id: 'e2',
    role: 'UI/UX Designer',
    company: 'Freelance',
    period: '2023 - Present',
    achievements: [
      'Worked with early-stage teams and personal projects to design intuitive, responsive, and user-focused interfaces',
      'Focused on wireframing, prototyping, and usability improvements using Figma and Adobe XD'
    ],
    tech: ['Figma', 'Adobe XD', 'Prototyping', 'Wireframing']
  },
  {
    id: 'e3',
    role: 'Digital Artist',
    company: 'Freelance & Art Hibe Production',
    period: '2020 - Present',
    achievements: [
      'Started as a personal passion and evolved into freelance work—creating custom illustrations, digital portraits, and visual content',
      'Collaborated with Art Hibe Production to deliver visual assets, storyboards, and character concepts for digital projects'
    ],
    tech: ['Illustration', 'Digital Art', 'Storyboarding', 'Character Design']
  },

];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'UI/UX Design',
    description: 'Research, wireframing, prototyping, and interaction design for intuitive user experiences.',
    icon: 'Layout',
    image: '/images/service-uiux.jpg',
    link: 'https://www.behance.net/shankhaparia'
  },
  {
    id: 's2',
    title: 'Digital Illustration',
    description: 'Custom artwork, character designs, posters, and visual content for brands and personal projects.',
    icon: 'Feather',
    image: '/images/service-illustration.jpg',
    link: 'https://www.behance.net/shankhaparia'
  },
];
export const INTERESTS: Interest[] = [
  {
    id: 'music',
    title: 'Music',
    coverImage: '/music/mon.jpg',
    items: [
      { name: 'Mon - Chandrabindu', image: '/music/mon.jpg' },
      { name: 'Bhalo Theko - Cactus', image: '/music/bhalo-theko.jpg' },
      { name: 'Bondhu Tomay - Chandrabindu', image: '/music/bondhu-tomay.jpg' },
      { name: 'Hasnuhana - Fossils', image: '/music/hasnuhana.jpg' },
      { name: 'Ekla Ghor - Fossils', image: '/music/ekla-ghor.jpg' },
      { name: 'Punorjonmo - Encore', image: '/music/punorjonmo.jpg' }
    ]
  },
  {
    id: 'anime',
    title: 'Anime',
    coverImage: '/anime/Your_Name.jpg',
    items: [
      { name: 'Your Name', image: '/anime/Your_Name.jpg' },
      { name: 'Summer Time Rendering', image: '/anime/summer-time-rendering.jpg' },
      { name: 'Hajime no Ippo', image: '/anime/Hajime-no-ippo.jpg' },
      { name: 'Tataima Galaxy', image: '/anime/Tataima galaxy.jpeg' },
      { name: 'Grave of the Fireflies', image: '/anime/Grave-of-fireflies.jpg' }
    ]
  },
  {
    id: 'books',
    title: 'Books',
    coverImage: '/books/Kafka on the shore.jpg',
    items: [
      { name: 'Graphic Design for Everyone', image: '/books/graphic design for everyone.jpg' },
      { name: 'Do Epic Shit', image: '/books/Do epic shit.jpg' },
      { name: 'Kafka on the Shore', image: '/books/Kafka on the shore.jpg' },
      { name: 'Freedom of the Known', image: '/books/freedom of the known.jpg' },
      { name: 'Heaven', image: '/books/heaven.jpg' }
    ]
  }
];