export class Post {
    _id: string;
    title: string;
    banner: string; 
    half_banner: string;
    square_banner: string;
    square_thumbnail: string;
    big_card: string;
    half_big_card: string;
    card: string;
    half_card: string;
    short_content: string;
    content: string;
    category: string;
    tags: Array<string>;
    comments: Array<number>;
    created_by: string;
    created_at: Date;
    slug: string;
  }