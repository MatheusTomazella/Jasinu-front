import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExerciseAddObject, ExerciseObject, ExerciseQuery, ExerciseTag } from './exercises-service.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  public apiUrl : string = "http://localhost:3000";

  constructor( private http : HttpClient ) { }

  private fetch ( route : string ) {
    return this.http.get( `${this.apiUrl}${route}` );
  }

  private extractQuery ( query? : ExerciseQuery ) : string {
    if ( !query ) return "";
    const keys = Object.keys(query);
    if ( !keys.length ) return "";
    
    const components : string[] = [];
    keys.forEach( key => {
      let value = query[key];

      if ( key == "tags" ) {
        if ( value == -1 ) return;
        key = "tags_like";
        (value as any[]).forEach(tag => tag = tag.toString());
        value = value.join(",");
      }
      
      components.push(`${key}=${value}`);
    } )

    return "?" + components.join("&");
  }

  private fetchExercises ( query? : ExerciseQuery ) : Observable<ExerciseObject[]> {
    return this.fetch( `/exercises${this.extractQuery(query)}` ) as Observable<ExerciseObject[]>;
  }

  public fetchApprovedExercises ( query? : ExerciseQuery ) : Observable<ExerciseObject[]> {
    query = query || { };
    query.approved = true;
    return this.fetchExercises( query );
  }

  public fetchUnapprovedExercises ( query? : ExerciseQuery ) : Observable<ExerciseObject[]> {
    query = query || { };
    query.approved = false;
    return this.fetchExercises( query );
  }

  public fetchTags ( ) : Observable<ExerciseTag[]> {
    return this.fetch( "/tags" ) as Observable<ExerciseTag[]>;
  }

  public setExerciseApproved ( data : ExerciseObject ) {
    return new Promise( (resolve, reject) => {
      if ( data.id == undefined ) return reject("Id undefined");
      data.approved = true;
      this.http.put(`${this.apiUrl}/exercises/${data.id}`, data)
      .subscribe( 
        data => {
          resolve(data);
        },
        error => {
          reject(error)
        }
      )
    } )
  }

  public deleteExercise ( id : number ) {
    return new Promise( (resolve, reject) => {
      if ( id == undefined ) return reject("Id undefined");
      this.http.delete(`${this.apiUrl}/exercises/${id}`)
      .subscribe( 
        data => {
          resolve(data);
        },
        error => {
          reject(error)
        }
      )
    } )
  }

  public addExercise ( obj : ExerciseAddObject ) {
    return this.http.post(`${this.apiUrl}/exercises`, obj)
  }
}
