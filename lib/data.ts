import type { NavLink, StatItem, WorkArea, Testimonial, GalleryImage, FeatureItem } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Vision & Mission", href: "/vision-mission" },
  { label: "Impact", href: "/#impact" },
  { label: "Our Work", href: "/#our-work" },
  { label: "Gallery", href: "/gallery" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
];

export const heroSlides = [
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1920&auto=format&fit=crop",
];

export const heroStats: StatItem[] = [
  { label: "People Helped", value: 8000, suffix: "+" },
  { label: "Women Empowered", value: 600, suffix: "+" },
  { label: "Meals Distributed", value: 10000, suffix: "+" },
  { label: "Students Supported", value: 1200, suffix: "+" },
];

export const aboutFocus: string[] = [
  "Health Awareness",
  "Emotional Well-being",
  "Organic Living",
  "Education",
  "Skill Development",
  "Women Empowerment",
  "Environmental Sustainability",
  "Community Welfare",
];

export const workAreas: WorkArea[] = [
  {
    id: "health",
    title: "Promote Health & Well-being",
    description:
      "Promoting health and well-being means ensuring that every individual has access to quality healthcare, nutritious food, clean water, and opportunities for physical and mental wellness.",
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "empowerment",
    title: "Women, Youth & Community Empowerment",
    description:
      "We empower women, youth, and marginalized communities by equipping them with skills, opportunities, and confidence to lead change.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "sustainability",
    title: "Sustainable & Organic Living",
    description:
      "Promote eco-friendly practices, organic farming and sustainable lifestyles that protect the planet for future generations.",
    icon: "Sprout",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "education",
    title: "Education & Skill Development",
    description:
      "Provide education, vocational training and practical skills for long-term self-reliance and dignity.",
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "culture",
    title: "Indian Culture & Arts",
    description:
      "Support traditional arts, dance, music, crafts and cultural heritage that keep our roots alive.",
    icon: "Palette",
    image: "https://images.unsplash.com/photo-1583225214464-9296029427aa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "community",
    title: "Community Welfare",
    description:
      "Strengthen communities through social welfare, awareness campaigns and grassroots outreach programs.",
    icon: "HandHeart",
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=1200&auto=format&fit=crop",
  },
];

export const impactStats: StatItem[] = [
  // { label: "Years of Service", value: 10, suffix: "+" },
  { label: "Lives Impacted", value: 8000, suffix: "+" },
  { label: "Meals Distributed", value: 10000, suffix: "+" },
  { label: "Children Educated", value: 1200, suffix: "+" },
  { label: "Volunteers", value: 300, suffix: "+" },
  // { label: "Villages Reached", value: 50, suffix: "+" },
];

export const whyChooseUs: FeatureItem[] = [
  { title: "Transparent NGO", description: "Every rupee is tracked and reported with full financial transparency.", icon: "ShieldCheck" },
  { title: "Dedicated Volunteers", description: "150+ passionate volunteers working directly with communities.", icon: "Users" },
  { title: "Community Driven", description: "Programs designed with and for the communities we serve.", icon: "HandHeart" },
  { title: "Sustainable Solutions", description: "Long-term impact through eco-friendly, self-sustaining models.", icon: "Sprout" },
  { title: "Education Focused", description: "Building futures through literacy, skills and vocational training.", icon: "GraduationCap" },
  { title: "Healthcare Support", description: "Regular health camps bringing care to underserved villages.", icon: "HeartPulse" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Sharma",
    role: "Volunteer",
    quote:
      "Working with Modern Dream Foundation showed me what real grassroots change looks like. Every visit to the villages left me inspired.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Ramesh Kumar",
    role: "Beneficiary",
    quote:
      "The skill development program helped me start my own tailoring business. My family's life has completely changed for the better.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Teacher",
    quote:
      "The foundation's education kits and mentorship reached children who had never held a storybook before. It's transformative work.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    rating: 4,
  },
  {
    name: "Dr. Arvind Mehta",
    role: "Doctor",
    quote:
      "I've run health camps with dozens of NGOs. Modern Dream Foundation's logistics and follow-up care are consistently the best.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop",
    rating: 5,
  },
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop", alt: "Doctor examining a patient at a rural health camp", category: "Health Camps" },
  { id: "g2", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", alt: "Children studying together in a classroom", category: "Education" },
  { id: "g3", src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=800&auto=format&fit=crop", alt: "Women learning tailoring skills", category: "Women Empowerment" },
  { id: "g4", src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop", alt: "Volunteers planting saplings", category: "Environment" },
  { id: "g5", src: "https://images.unsplash.com/photo-1583225214464-9296029427aa?q=80&w=800&auto=format&fit=crop", alt: "Traditional folk dance performance", category: "Culture" },
  { id: "g6", src: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=800&auto=format&fit=crop", alt: "Community gathering and awareness drive", category: "Community Events" },
  { id: "g7", src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop", alt: "Free medicine distribution at health camp", category: "Health Camps" },
  { id: "g8", src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop", alt: "Vocational training session", category: "Education" },
  { id: "g9", src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop", alt: "Women's self-help group meeting", category: "Women Empowerment" },
  { id: "g10", src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop", alt: "Organic farming demonstration", category: "Environment" },
  { id: "g11", src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop", alt: "Cultural festival celebration", category: "Culture" },
  { id: "g12", src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop", alt: "Village outreach and welfare camp", category: "Community Events" },
];

export const galleryCategories: GalleryImage["category"][] = [
  "Health Camps",
  "Education",
  "Women Empowerment",
  "Environment",
  "Culture",
  "Community Events",
];

export const donationAmounts = [500, 1000, 2500, 5000];

export const timeline = [
  { year: "2016", title: "Foundation Established", description: "Modern Dream Foundation registered as a trust with a mission to serve." },
  { year: "2018", title: "First Health Camp", description: "Launched our first rural health camp, treating 200+ patients." },
  { year: "2020", title: "Women Empowerment Program", description: "Started skill-development and self-help groups for women." },
  { year: "2022", title: "50 Villages Reached", description: "Expanded outreach across 50 villages with education & welfare drives." },
  { year: "2024", title: "2000+ Students Supported", description: "Crossed a major milestone in our education support programs." },
  { year: "2026", title: "Growing Forward", description: "Continuing to build a healthier, happier, sustainable society." },
];
