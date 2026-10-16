import courseImage1 from '../public/assets/courses/1.webp'
import courseImage2 from '../public/assets/courses/2.webp'
import courseImage3 from '../public/assets/courses/3.webp'
import courseImage4 from '../public/assets/courses/4.webp'
import courseImage5 from '../public/assets/courses/5.webp'
import courseImage6 from '../public/assets/courses/6.webp'
import courseImage7 from '../public/assets/courses/7.webp'
import courseImage8 from '../public/assets/courses/8.webp'
import courseImage9 from '../public/assets/courses/9.webp'
import courseImage10 from '../public/assets/courses/10.webp'

import { type StaticImageData } from 'next/image';

export type Course = {
  id: number;
  title: string;
  category: string;
  description: string;
  instructor: string;
  image: StaticImageData;
  video: string;
  poster: StaticImageData;
  progress:number;
};

export const courses: Course[] = [
  {
    id: 1,
    title: "Starting SEO as Your Home-Based Business",
    category: "Marketing",
    description: "Learn how search engines work and how to turn SEO into a small business you can run from your living room.",
    instructor: "Sarah Mitchell",
    image: courseImage1,
    video: "./assets/course.mp4",
    poster: courseImage1,
    progress: 49,
  },
  {
    id: 2,
    title: "Social Media Marketing for Beginners",
    category: "Marketing",
    description: "Plan, post, and grow an audience on the main social platforms without spending money on ads.",
    instructor: "Daniel Carter",
    image: courseImage2,
    video: "/assets/course.mp4",
    poster: courseImage2,
    progress: 67,
  },
  {
    id: 3,
    title: "Email Marketing Basics: Your First 1,000 Subscribers",
    category: "Marketing",
    description: "Build an email list, write emails people actually open, and understand the numbers that matter.",
    instructor: "Emily Brooks",
    image: courseImage3,
    video: "/assets/course.mp4",
    poster: courseImage3,
    progress: 91,
  },
  {
    id: 4,
    title: "JavaScript Basics: Variables, Functions and Loops",
    category: "Programming",
    description: "A gentle start to JavaScript with simple examples you can run in your browser right away.",
    instructor: "Omar Haddad",
    image: courseImage4,
    video: "/assets/course.mp4",
    poster: courseImage4,
    progress: 37,
  },
  {
    id: 5,
    title: "Build Your First Website with HTML and CSS",
    category: "Programming",
    description: "Go from an empty file to a clean, good-looking web page using only HTML and CSS.",
    instructor: "Laura Jensen",
    image: courseImage5,
    video: "/assets/course.mp4",
    poster: courseImage5,
    progress: 47,
  },
  {
    id: 6,
    title: "Git and GitHub for Absolute Beginners",
    category: "Programming",
    description: "Save your code history, undo mistakes, and share projects with others using Git and GitHub.",
    instructor: "Kevin Alvarez",
    image: courseImage6,
    video: "/assets/course.mp4",
    poster: courseImage6,
    progress: 76,
  },
  {
    id: 7,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    description: "Understand users, layout, and spacing so the apps you design are easy and pleasant to use.",
    instructor: "Nina Petrova",
    image: courseImage7,
    video: "/assets/course.mp4",
    poster: courseImage7,
    progress: 68,
  },
  {
    id: 8,
    title: "Color Theory for Beginners",
    category: "Design",
    description: "Learn how to choose color palettes that look balanced and communicate the right mood.",
    instructor: "Marcus Lee",
    image: courseImage8,
    video: "/assets/course.mp4",
    poster: courseImage8,
    progress: 72,
  },
  {
    id: 9,
    title: "Freelancing 101: Land Your First Client",
    category: "Business",
    description: "Set up your profile, price your work, and send proposals that win your first paid project.",
    instructor: "Rachel Adams",
    image: courseImage9,
    video: "/assets/course.mp4",
    poster: courseImage9,
    progress: 54,
  },
  {
    id: 10,
    title: "Personal Budgeting Made Simple",
    category: "Business",
    description: "Track your income and spending, set savings goals, and build a budget you can stick to.",
    instructor: "Hassan Ibrahim",
    image: courseImage10,
    video: "/assets/course.mp4",
    poster: courseImage10,
    progress: 89,
  },
];