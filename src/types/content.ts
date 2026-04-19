export interface SiteInfo {
  name: string;
  domain: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Newsletter {
  placeholder: string;
  buttonText: string;
}

export interface Hero {
  title: string;
  description: string;
  newsletter: Newsletter;
}

export type FeaturedLayout = 'tall' | 'wide';

export interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  layout: FeaturedLayout;
}

export type CategoryColor = 'green' | 'blue' | 'purple' | 'orange' | 'red';

export interface ArticleCategory {
  label: string;
  color: CategoryColor;
}

export interface Author {
  name: string;
  avatar: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  category: ArticleCategory;
  author: Author;
  date: string;
  tag: string;
}

export interface ArticleTab {
  label: string;
  value: string;
}

export interface ArticlesSection {
  title: string;
  categories: ArticleTab[];
  items: Article[];
}

export interface SiteData {
  site: SiteInfo;
  navigation: NavItem[];
  hero: Hero;
  featured: FeaturedItem[];
  articles: ArticlesSection;
}
