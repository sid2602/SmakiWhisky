export type Products = {
  products: Product[];
};

export type Navigations = {
  data: NavigationTypes[];
};

export type Product = {
  title: string;
  price: number;
  description: string;
};

export type NavigationTypes = {
  name: string;
  id: number;
  slug: string;
  item: MenuItem | any;
};

export type MenuItem = {
  id: number;
  name: string;
  slug: string;
};
