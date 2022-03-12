import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExerciseQuery } from './exercises-service.model';

@Injectable({
  providedIn: 'root'
})
export class ExercisesServiceService {

  public apiUrl : string = "http://localhost:3000";

  constructor( private http : HttpClient ) { }

  private fetch ( route : string ) {
    return this.http.get( `${this.apiUrl}${route}` );
  }

  public fetchExercises ( query? : ExerciseQuery ) {
    return this.fetch( "/exercises" );
  }
}
