export type Category = "dog-treats" | "cat-products" | "pet-care" | "gift-sets" | "diy";

export type Product = {
  slug: string;
  name: string;
  price: number;
  category: Category;
  tagline: string;
  description: string;
  details?: string[];
  image: string; // filename in /public/images
  featured?: boolean;
};

export const categories: Record<Category, { title: string; blurb: string; href: string }> = {
  "dog-treats": {
    title: "Dog Treats",
    blurb: "Organic, homemade treats your dog will love.",
    href: "/dog-treats",
  },
  "cat-products": {
    title: "Cat Products",
    blurb: "Premium organic catnip for your feline friends.",
    href: "/cat-products",
  },
  "pet-care": {
    title: "Pet Care",
    blurb: "Natural shampoos and balms for happy, healthy pets.",
    href: "/pet-care",
  },
  "gift-sets": {
    title: "Gift Sets",
    blurb: "Bundles for the dog lover in your life.",
    href: "/products#gift-sets",
  },
  diy: {
    title: "DIY Kits",
    blurb: "Bake your own organic treats at home.",
    href: "/treat-mix",
  },
};

export const products: Product[] = [
  {
    slug: "rods-rewards",
    name: "Rod's Rewards Training Treats",
    price: 8.99,
    category: "dog-treats",
    tagline: "Small, bite-sized organic treats for training.",
    description:
      "Made for training sessions. The small, bite-sized shape makes them quick to hand out, and real peanut butter keeps dogs motivated and focused.",
    details: ["Organic ingredients", "Made with real peanut butter", "Bite-sized for repeat rewards"],
    image: "rods-rewards-front.jpeg",
    featured: true,
  },
  {
    slug: "peanut-butter-treats",
    name: "Peanut Butter Dog Treats",
    price: 8.99,
    category: "dog-treats",
    tagline: "Homemade organic treats with real peanut butter.",
    description:
      "Made with real, high-quality peanut butter. The crunchy texture helps promote dental health, and the rectangular shape suits dogs of all sizes.",
    details: ["Organic ingredients", "Crunchy texture", "Good for dogs of all sizes"],
    image: "peanut-butter-treats-front.jpeg",
    featured: true,
  },
  {
    slug: "vegetarian-treats",
    name: "Vegetarian Dog Treats",
    price: 8.99,
    category: "dog-treats",
    tagline: "Plant-based organic treats.",
    description:
      "Formulated for dogs with meat allergies or sensitivities, and for vegetarian or vegan households. Made with plant-based ingredients like sweet potato, peas and lentils.",
    details: ["No meat", "Sweet potato, peas and lentils", "Organic ingredients"],
    image: "vegetarian-treats-package.jpeg",
  },
  {
    slug: "organic-catnip",
    name: "Auntie Robin's 100% Organic Catnip",
    price: 7.99,
    category: "cat-products",
    tagline: "Absolutely Catatonic!",
    description:
      "Organically grown catnip, free of pesticides and harvested at peak strength, packed in a metal tin that keeps it fresh.",
    details: [
      "100% organic catnip",
      "How to use: put catnip in an old sock, tie it tight, inform kitty, stay alert!",
    ],
    image: "catnip-tin-top-detail.jpeg",
    featured: true,
  },
  {
    slug: "pet-shampoo",
    name: "Organic Pet Shampoo",
    price: 12.99,
    category: "pet-care",
    tagline: "Gentle, all-natural formula for dogs and cats.",
    description:
      "Gentle on your pet's skin while it cleans and conditions the coat. Safe for dogs and cats, with no harsh chemicals or artificial fragrances.",
    details: ["Safe for dogs and cats", "No harsh chemicals", "No artificial fragrances"],
    image: "pet-shampoo-bottle.jpeg",
  },
  {
    slug: "four-paws-butter-bar",
    name: "Four Paws Butter Bar",
    price: 9.99,
    category: "pet-care",
    tagline: "Soothing balm for paws and noses.",
    description: "A soothing butter bar for dry or cracked paws and noses, from the Rod's Pawz Spa Collection.",
    image: "catnip-butter-bar-side.jpeg",
  },
  {
    slug: "diy-treat-kit",
    name: "Make Your Own Dog Treat Kit",
    price: 18.99,
    category: "diy",
    tagline: "Fun for the whole family.",
    description:
      "Everything you need to bake healthy treats at home: pre-measured organic ingredients, a bone-shaped cookie cutter, a recipe card and a Rod's Pawz burlap bag to store them in.",
    details: ["Pre-measured organic ingredients", "Bone-shaped cookie cutter", "Recipe card", "Burlap storage bag"],
    image: "diy-kit-burlap-bag-standing.jpeg",
    featured: true,
  },
  {
    slug: "complete-product-lineup",
    name: "Complete Rod's Pawz Collection",
    price: 39.99,
    category: "gift-sets",
    tagline: "The whole family of Rod's Pawz products.",
    description:
      "Our full line of organic dog treats, pet shampoo and accessories, including our signature burlap bag.",
    image: "rods-pawz-complete-lineup.jpeg",
  },
  {
    slug: "treat-variety-pack",
    name: "Treat Variety Pack",
    price: 24.99,
    category: "gift-sets",
    tagline: "Three flavors to try.",
    description: "A sampler of Rod's Rewards, Peanut Butter and Vegetarian treats.",
    image: "rods-pawz-product-lineup.jpeg",
  },
  {
    slug: "burlap-bag-scoop",
    name: "Premium Treat Bag with Scoop",
    price: 15.99,
    category: "gift-sets",
    tagline: "Assorted treats in our burlap bag.",
    description: "A burlap bag of assorted treats with a metal measuring scoop.",
    image: "diy-kit-burlap-bag-standing.jpeg",
  },
];

export const byCategory = (c: Category) => products.filter((p) => p.category === c);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const money = (n: number) => `$${n.toFixed(2)}`;

export const contact = {
  company: "Rod's Pawz, Inc.",
  town: "Newmarket, NH",
  phone: "603-659-1070",
  email: "info@rodspawz.com",
};
