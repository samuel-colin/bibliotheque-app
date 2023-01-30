import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Book } from '../model/book';
import { BOOKS } from '../mock/mock-books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styles: [
  ]
})
export class DetailBookComponent implements OnInit {

  bookList: Book[];
  book: Book|undefined;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private bookService: BookService) { }
  
  ngOnInit(): void {
    const bookId: string|null = this.route.snapshot.paramMap.get('id');

    if(bookId) {
      this.bookService.getBookById(+bookId).subscribe(bookElt => this.book = bookElt);
    }
  }

  goBack() {
    this.router.navigate(['/books']);
  }

  modify(bookAlter: Book) {
    this.router.navigate(['/book/edit', bookAlter.id]);
  }

  delete(bookAlter: Book) {
    this.bookService.deleteBook(bookAlter)?.subscribe(() => this.goBack());
  }

}
