export type CustomArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<any>;
  currentSlide?: number;
  slideCount?: number;
  site?: string;
};

export type ProductExtended = {
  product: {
    title: string;
    price: number;
    id: number;
    photo: {
      url: string;
    };
    description: {
      vision: string;
      smell: string;
      taste: string;
      finish: string;
    };
  };
};

export type Recomendeds = {
  recomendeds: Product[];
};

export type Products = {
  products: Product[];
};

export type Navigations = {
  data: NavigationTypes[];
};

export type Baners = {
  baners: Baner[];
};

export type News = {
  news: Baner[];
};

export type Product = {
  title: string;
  price: number;
  id: number;
  photo: {
    url: string;
  };
  quantity?: number;
};

export type NavigationTypes = {
  name: string;
  id: number;
  slug: string;
  item: MenuItem[];
};

export type MenuItem = {
  id: number;
  name: string;
  slug: string;
};

export type Baner = {
  name: string;
  photo: {
    url: string;
  };
  slug: string;
};
