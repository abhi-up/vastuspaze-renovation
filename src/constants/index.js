import hero from "../assets/hero.webp"
import kitchenImage from "../assets/kitchen.webp"
import bathroomImage from "../assets/bathroom.webp"
import livingRoomImage from "../assets/living-room.webp"

import portfolio1 from "../assets/portfolio1.webp"
import portfolio2 from "../assets/portfolio2.webp"
import portfolio3 from "../assets/portfolio3.webp"
import portfolio4 from "../assets/portfolio4.webp"
import portfolio5 from "../assets/portfolio5.webp"
import portfolio6 from "../assets/portfolio6.webp"

import user1 from "../assets/user1.webp"
import user2 from "../assets/user2.webp"
import user3 from "../assets/user3.webp"
import user4 from "../assets/user4.webp"
import user5 from "../assets/user5.webp"
import user6 from "../assets/user6.webp"

export const LINKS = [
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Reviews",
    link: "#reviews",
  },
  {
    name: "Contact",
    link: "#contact",
  },
]

export const HERO_CONTENT = {
  title: "Homespire",
  subtitle: "Inspiring Modern Living Through Smart Renovation",
  image: hero,
}

export const SERVICES_CONTENT = [
  {
    title: "Kitchen Renovation",
    description:
      "Turn your kitchen into the heart of your home with Homespire’s design expertise. From modular storage to elegant finishes and lighting, we craft functional, beautiful spaces built for everyday living.",
    image: kitchenImage,
    alt: "Kitchen Renovation",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Refresh and elevate your bathroom with Homespire’s spa-inspired makeovers. We blend modern fixtures, luxurious tiles, and efficient layouts to bring comfort and elegance to your daily routine.",
    image: bathroomImage,
    alt: "Bathroom Remodeling",
  },
  {
    title: "Living Room Transformation",
    description:
      "Reimagine your living room with warm tones, ambient lighting, and modern interiors. Homespire designs spaces that reflect your personality while ensuring functionality and aesthetic harmony.",
    image: livingRoomImage,
    alt: "Living Room Transformation",
  },
]

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Contemporary Kitchen Upgrade",
    description:
      "A full kitchen redesign featuring sleek cabinetry, quartz countertops, and energy-efficient appliances for a clean, modern aesthetic.",
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "Luxury Bathroom Oasis",
    description:
      "A relaxing sanctuary with rainfall showers, marble textures, and ambient lighting—crafted to deliver a resort-like experience at home.",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: "Outdoor Lounge & Deck",
    description:
      "Designed a cozy outdoor retreat complete with wooden decking, greenery, and smart lighting—perfect for family evenings and gatherings.",
    image: portfolio3,
    link: "#",
  },
  {
    id: 4,
    name: "Modern Living Room Makeover",
    description:
      "A complete redesign featuring layered lighting, premium flooring, and bespoke furniture to create a welcoming and elegant living area.",
    image: portfolio4,
    link: "#",
  },
  {
    id: 5,
    name: "Smart Basement Conversion",
    description:
      "Transformed an unused basement into a multifunctional entertainment zone featuring a home theatre, bar area, and workout space.",
    image: portfolio5,
    link: "#",
  },
  {
    id: 6,
    name: "Productive Home Office Setup",
    description:
      "Optimized a small space into a stylish, ergonomic home office designed for comfort, focus, and productivity.",
    image: portfolio6,
    link: "#",
  },
]

export const REVIEWS = {
  text: "Discover how Homespire has transformed homes and improved the way our clients live. Every project reflects our passion for design, precision, and customer satisfaction.",
  reviews: [
    {
      name: "Ritika Sharma",
      title: "Homeowner",
      review:
        "Homespire completely redefined our kitchen! Their team understood our lifestyle and delivered a design that’s both practical and stunning. We absolutely love cooking here now.",
      image: user1,
    },
    {
      name: "Arjun Patel",
      title: "Homeowner",
      review:
        "From concept to completion, Homespire made our bathroom remodel effortless. The attention to detail and quality of materials exceeded expectations.",
      image: user2,
    },
    {
      name: "Meera Nair",
      title: "Homeowner",
      review:
        "Homespire transformed our backyard into a peaceful retreat. The creativity, professionalism, and timely execution were truly impressive.",
      image: user3,
    },
    {
      name: "Rahul Mehta",
      title: "Homeowner",
      review:
        "Our living room looks straight out of a magazine! Homespire brought our ideas to life with a perfect blend of comfort and modern design.",
      image: user4,
    },
    {
      name: "Sneha Verma",
      title: "Homeowner",
      review:
        "Homespire designed our home office beautifully—minimal, comfortable, and highly functional. It’s become my favorite space in the house.",
      image: user5,
    },
    {
      name: "Karan Gupta",
      title: "Homeowner",
      review:
        "The basement conversion was handled with utmost professionalism. Homespire’s team turned it into a cozy family lounge that we now use every day.",
      image: user6,
    },
  ],
}

export const CONTACT_INFO = {
  text: "Ready to transform your space? Reach out to Homespire today for a free consultation and personalized renovation guidance.",
  phone: {
    label: "Phone",
    value: "+91 98765 43210",
  },
  email: {
    label: "Email",
    value: "info@homespire.in",
  },
  address: {
    label: "Address",
    value: "21 Skyline Residency, Sector 42, Gurugram, Haryana 122002",
  },
}
