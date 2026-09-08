export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  challenge: string;
  solution: { heading: string; points: string[] }[];
  impactStory?: { quote: string; author: string };
  longTermImpact: string[];
  goal: string;
}

export const projects: Project[] = [
  {
    id: "vidya-vikas",
    title: "Vidya Vikas",
    subtitle: "Holistic Child Development Initiative",
    summary:
      "Millions of children from underserved communities face barriers to quality education, personal growth, and future opportunities. Vidya Vikas is a holistic child development initiative that provides educational support, nutritious meals, life-skills training, and a safe learning environment, empowering children to become confident learners and future leaders.",
    image:
      "/projects/vidya-vikas.jpg",
    challenge:
      "Across India, thousands of children living in low-income communities struggle with inadequate access to education, poor learning outcomes, and limited opportunities for personal development. Economic hardships often force children to miss school or drop out, reducing their chances of achieving a brighter future and breaking the cycle of poverty.",
    solution: [
      {
        heading: "Education Support",
        points: [
          "After-school tutoring and remedial classes",
          "School enrollment and retention assistance",
          "Digital learning resources and educational materials",
        ],
      },
      {
        heading: "Nutrition & Health",
        points: [
          "Daily nutritious meals and snacks",
          "Health awareness sessions and hygiene education",
          "Distribution of school and hygiene kits",
        ],
      },
      {
        heading: "Personal Growth",
        points: [
          "Leadership and communication skill development",
          "Art, music, sports, and creative learning activities",
          "Confidence-building and personality development workshops",
        ],
      },
      {
        heading: "Future Readiness",
        points: [
          "Career awareness and mentorship programs",
          "Life-skills and financial literacy training",
          "Exposure visits and motivational sessions",
        ],
      },
    ],
    longTermImpact: [
      "100% school enrollment among children enrolled in the program",
      "80% of students demonstrate measurable improvement in reading, writing, and mathematics each year",
      "Reduced school dropout rates in target communities",
      "700+ children supported annually through learning centers and educational activities",
      "Empowering children with the knowledge, confidence, and skills needed to build successful and independent futures",
    ],
    goal: "Our Goal is to create a future where every child, regardless of their background, has access to quality education, opportunities for holistic development, and the confidence to pursue their dreams.",
  },
  {
    id: "harit-sapna",
    title: "Harit Sapna",
    subtitle: "Greener Tomorrow",
    summary:
      "A cleaner, greener India begins with citizens taking responsibility for their surroundings. Harit Sapna empowers communities, schools, and volunteers to lead cleanliness initiatives and tree plantation drives, turning neglected urban spaces into healthier, greener, and more inspiring environments.",
    image:
      "/projects/harit-sapna.jpg",
    challenge:
      "Overcrowded low-income areas suffer from poor sanitation, irregular waste management, and a lack of greenery. This not only spreads disease but also impacts mental health, child development, and community well-being. Without collective action, these neighborhoods remain polluted and deprived of natural spaces.",
    solution: [
      {
        heading: "Cleanliness Drives",
        points: [
          "Weekly campaigns led by youth and volunteers in slums, schools, and public spaces",
        ],
      },
      {
        heading: "Tree Plantation",
        points: [
          "Planting and nurturing native trees, school gardens, and roadside greenery",
        ],
      },
      {
        heading: "Community Awareness",
        points: [
          "Eco-clubs, art, and workshops to spread sustainable habits and pride in clean surroundings",
        ],
      },
    ],
    impactStory: {
      quote:
        "Before, our classroom was dusty and had no plants. Now it feels fresh and we love studying in a green space.",
      author: "Kavya, Class 7",
    },
    longTermImpact: [
      "30+ drives conducted across schools and slum areas",
      "3,000+ native trees planted with a 70% survival rate",
      "35% reduction in garbage dumping in target areas",
      "Increased student participation in eco-clubs, inspiring eco-conscious habits",
      "Cleaner streets, greener neighborhoods, and healthier communities for generations to come",
    ],
    goal: "Our Goal is to build cleaner, greener communities where every citizen takes pride in their surroundings and contributes to a sustainable future.",
  },
  {
    id: "digital-sapna",
    title: "Digital Sapna",
    subtitle: "Empowering Dreams Through Technology",
    summary:
      "In today's world, digital literacy is as essential as basic education. Digital Sapna empowers underserved youth and women with essential technology skills — helping them access opportunities for jobs, education, government services, and financial inclusion. This initiative opens the door to empowerment, dignity, and self-reliance.",
    image:
      "/projects/digital-sapna.jpg",
    challenge:
      "Over 70% of low-income youth in India lack basic digital skills such as operating a computer, using email, or accessing government portals. This digital divide limits their chances of employment and keeps them excluded from the fast-growing digital economy.",
    solution: [
      {
        heading: "Digital Literacy Centers",
        points: [
          "Establishing Digital Literacy Centers in slums and semi-rural areas",
          "Training in computer basics, internet safety, MS Office, and digital payments",
        ],
      },
      {
        heading: "Skills & Certification",
        points: [
          "Guidance on accessing e-governance portals and online opportunities",
          "Certification & mentoring to support learners in applying skills for jobs or entrepreneurship",
        ],
      },
    ],
    impactStory: {
      quote:
        "I was afraid of using online payments. Now I pay bills, book tickets, and help my neighbors do the same.",
      author: "Irfan, 14 years, program beneficiary",
    },
    longTermImpact: [
      "10 centers in 5 cities, reaching 2,500+ learners annually",
      "75% of learners actively use digital tools in daily life or work",
      "30% transition into online income-generating roles",
      "Improved employability and confidence among marginalized youth and women",
      "A generation of digitally empowered citizens ready for tomorrow's opportunities",
    ],
    goal: "Our Goal is to bridge the digital divide and ensure every young person and woman has the digital skills needed to thrive in the modern economy.",
  },
];