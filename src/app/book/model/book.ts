export class Book {
    id: number;
    title: string;
    author: string;
    picture: string;
    types: Array<string>;
    publishDate: number;

    constructor(
      title: string = 'Entrer un titre ...',
      author: string =  'Entrer un auteur ...',
      types: Array<string> = ['Roman'],
      picture: string = '',
      publishDate: number = 2023) {
        this.title = title;
        this.author = author;
        this.types = types;
        this.picture = picture;
        this.publishDate = publishDate;
    }
  }