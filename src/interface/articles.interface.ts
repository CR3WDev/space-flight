export interface Article {
  id?: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  lauches: Launche[];
  events: Events[];
}

export interface Launche {
  id?: string;
  provider: string;
  articleId?: number;
}

export interface Events {
  id?: string;
  provider: string;
  articleId?: number;
}
