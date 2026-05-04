export interface Game {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  source: 'self' | 'external';
  gameUrl: string;
  tags: string[];
  featured: boolean;
  createdAt: string;
}
