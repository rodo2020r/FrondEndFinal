import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Libro } from '../models/libro';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
 
 // libro: Libro[];
  //selectedLibro: Libro;
   
  constructor(private http: HttpClient){
   // this.selectedLibro= new Libro();
  }

  getLibros() {
    const headers = new HttpHeaders({
      'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM2NTE1MWQ3MmQ4ZjAwMTdhZTc3ZTEiLCJpYXQiOjE2MDY4MzI0NjYsImV4cCI6MTYwNjg3NTY2Nn0._JHmDdb0EhV6_YXFd1RnrntwEF1fLi_zT7Jay4Jmu4c"
    });
    return this.http.get<Libro[]>('https://ramosproyectodb.herokuapp.com/api/libros',{headers}).pipe(
      map(res => {
        return Object.values(res);
      })
    );
    
  }
  postLibros(libro: Libro) {
    console.log("libro");
    console.log(libro);
    const headers = new HttpHeaders({
      'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM2NTE1MWQ3MmQ4ZjAwMTdhZTc3ZTEiLCJpYXQiOjE2MDY4MzI0NjYsImV4cCI6MTYwNjg3NTY2Nn0._JHmDdb0EhV6_YXFd1RnrntwEF1fLi_zT7Jay4Jmu4c"
    });

    const trm = {
      ...libro
    }
    delete trm._id;
  
    return this.http.post('https://ramosproyectodb.herokuapp.com/api/libros', trm, { headers })
    .pipe(
      map((res:any) => {
        return Object.values(res);
      })
    );
    
  }
  putLibros(libro: Libro) {
    const headers = new HttpHeaders({
      'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM2NTE1MWQ3MmQ4ZjAwMTdhZTc3ZTEiLCJpYXQiOjE2MDY4MzI0NjYsImV4cCI6MTYwNjg3NTY2Nn0._JHmDdb0EhV6_YXFd1RnrntwEF1fLi_zT7Jay4Jmu4c"
    });
    return this.http.put<Libro[]>( `https://ramosproyectodb.herokuapp.com/api/libros/${libro._id}`,libro,{headers}).pipe(
      map(res => {
        return Object.values(res);
      })
    );
    
  }

  deleteLibros(id:string) {
    const headers = new HttpHeaders({
      'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM2NTE1MWQ3MmQ4ZjAwMTdhZTc3ZTEiLCJpYXQiOjE2MDY4MzI0NjYsImV4cCI6MTYwNjg3NTY2Nn0._JHmDdb0EhV6_YXFd1RnrntwEF1fLi_zT7Jay4Jmu4c"
    });
    return this.http.delete(`https://ramosproyectodb.herokuapp.com/api/libros/${id}`, { headers });
  }

}
