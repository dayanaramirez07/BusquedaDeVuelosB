const categoriesData: {
  value: string;
  title: string;
  description: string;
  benefits: string[];
}[] = [
  {
    value: "economy",
    title: "Economy",
    description: "Affordable and comfortable seating.",
    benefits: ["Free WiFi", "Snacks included", "Standard legroom"],
  },
  {
    value: "business",
    title: "Business",
    description: "Premium service with extra comfort.",
    benefits: ["Priority boarding", "Extra legroom", "Free meals"],
  },
  {
    value: "first",
    title: "First Class",
    description: "Ultimate luxury and privacy.",
    benefits: ["Private cabin", "Gourmet meals", "VIP service"],
  },
];

export default categoriesData;
