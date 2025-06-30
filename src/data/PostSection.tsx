type PostSection =
  | { type: "intro"; text: string }
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt?: string }
  | { type: "code"; language: string; code: string }
  | { type: "quote"; text: string }
  | { type: "conclusion"; text: string };

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: PostSection[];

}