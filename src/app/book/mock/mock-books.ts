import { Book } from '../model/book';
  
export const BOOKS: Book[] = [
    {
        id: 1,
        title: "Les Misérables",
        author: "Victor Hugo",
        picture: "https://static.fnac-static.com/multimedia/Images/FR/NR/94/61/04/287124/1507-0/tsp20191023070101/Les-Miserables-Les-Miserables-Tome-1.jpg",
        types: ["Roman"],
        publishDate: 1862
    },
    {
        id: 2,
        title: "Du côté de chez Swann",
        author: "Marcel Proust",
        picture: "https://m.media-amazon.com/images/I/71Kh6wVouIL.jpg",
        types: ["Roman"],
        publishDate: 1913
    },
    {
        id: 3,
        title: "Les Enfants de la liberté",
        author: "Marc Levy",
        picture: "https://m.media-amazon.com/images/I/71WPzwAhQlL.jpg",
        types: ["Roman", "Biographie"],
        publishDate: 2007
    },
    {
        id: 4,
        title: "L'Étranger",
        author: "Albert Camus",
        picture: "https://m.media-amazon.com/images/I/8130inT26AL.jpg",
        types: ["Roman"],
        publishDate: 1942
    },
    {
        id: 5,
        title: "Les Fleurs du mal",
        author: "Charles Baudelaire",
        picture: "http://www.folio-lesite.fr/var/storage/images/product/062/product_9782072930164_195x320.jpg",
        types: ["Poésie"],
        publishDate: 1840
    },

];