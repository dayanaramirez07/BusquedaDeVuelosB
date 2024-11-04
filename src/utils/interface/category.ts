interface CategoryProps {
  categories: {
    value: string;
    title: string;
    description: string;
    benefits: string[];
  }[];
  setSelectedCategory: (category: {
    value: string;
    title: string;
    description: string;
    benefits: string[];
  }) => void;
  prices: {
    economy: number;
    business: number;
    first: number;
  };
}

export default CategoryProps;
