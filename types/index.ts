export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  icon?: string;
}

export interface WorkArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: "Volunteer" | "Beneficiary" | "Teacher" | "Doctor";
  quote: string;
  image: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
}

export type GalleryCategory =
  | "Health Camps"
  | "Education"
  | "Women Empowerment"
  | "Environment"
  | "Culture"
  | "Community Events";

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}
