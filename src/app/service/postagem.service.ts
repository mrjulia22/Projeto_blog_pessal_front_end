import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { observable, Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Postagem } from "../model/Postagem";


@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagem(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://blogpessoalmaju.herokuapp.com/postagens', this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://blogpessoalmaju.herokuapp.com/postagens/${id}`, this.token)
  }

  getByTituloPostagem (titulo: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://blogpessoalmaju.herokuapp.com/postagens/titulo/${titulo}`, this.token)

  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://blogpessoalmaju.herokuapp.com/postagens', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://blogpessoalmaju.herokuapp.com/postagens', postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://blogpessoalmaju.herokuapp.com/postagens/${id}`, this.token)
  }}
