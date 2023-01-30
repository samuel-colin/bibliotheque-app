import { Injectable } from '@angular/core';
import { Book } from './model/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, of, catchError} from 'rxjs';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  getBookList(): Observable<Book[]> {
    return this.http.get<Book[]>('api/books').pipe(
      tap((bookList) => this.log(bookList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getBookById(bookId: number): Observable<Book|undefined> {
    return this.http.get<Book>(`api/books/${bookId}`).pipe(
      tap((book) => this.log(book)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  getBookTypeList(): string[] {
    return ['Roman', 'Biographie', 'Poésie'];
  }

  updateBook(book: Book): Observable<Book>|undefined {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.http.put<Book>(`api/books`, book, httpOptions).pipe(
      tap((reponse) => this.log(reponse)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteBook(book: Book): Observable<Book>|null {
    return this.http.delete<Book>(`api/books/${book.id}`).pipe(
      tap((book) => this.log(book)),
      catchError((error) => this.handleError(error, null))
    );
  }

  addBook(book: Book): Observable<Book>|null {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.http.post<Book>(`api/books`, book, httpOptions).pipe(
        tap((book) => this.log(book)),
        catchError((error) => this.handleError(error, null))
      );
  }

  searchBookList(term: string): Observable<Book[]> {
    if(term.length <=1) {
      return of([]);
    }

    return this.http.get<Book[]>(`api/books/?title=${term}`).pipe(
        tap((book) => this.log(book)),
        catchError((error) => this.handleError(error, []))
      );
  }

  private log(response: Book[]|Book|undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
