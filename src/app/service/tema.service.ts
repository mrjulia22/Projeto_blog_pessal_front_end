import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  constructor(private htpp: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  gatAllTema(): Observable<Tema[]> {
    return this.htpp.get<Tema[]>(
      'https://blogpessoalmaju.herokuapp.com/temas',
      this.token
    );
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.htpp.get<Tema>(
      `https://blogpessoalmaju.herokuapp.com/temas/${id}`,
      this.token
    );
  }

  getByNomeTema(nome: string): Observable<Tema[]>{
    return this.htpp.get<Tema[]> (`https://blogpessoalmaju.herokuapp.com/temas/nome/${nome}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.htpp.post<Tema>(
      'https://blogpessoalmaju.herokuapp.com/temas',
      tema,
      this.token
    );
  }

  putTema(tema: Tema): Observable<Tema> {
    return this.htpp.put<Tema>(
      'https://blogpessoalmaju.herokuapp.com/temas',
      tema,
      this.token
    );
  }

  deleteTema(id: number) {
    return this.htpp.delete(
      `https://blogpessoalmaju.herokuapp.com/temas/${id}`,
      this.token
    );
  }
}
