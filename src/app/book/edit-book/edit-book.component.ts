import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html'
})
export class EditBookComponent implements OnInit {
  book: Book|undefined;
  
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }
  
  ngOnInit(): void {
    const bookId: string|null = this.route.snapshot.paramMap.get('id');

    if(bookId) {
      this.bookService.getBookById(+bookId).subscribe(newBook => this.book = newBook);
    }
  }
    

}
