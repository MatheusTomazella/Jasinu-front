import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExerciseObject, ExerciseQuery, ExerciseTag } from './exercises-service.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercisesServiceService {

  public apiUrl : string = "http://localhost:3000";

  constructor( private http : HttpClient ) { }

  private fetch ( route : string ) {
    return this.http.get( `${this.apiUrl}${route}` );
  }

  private extractQuery ( query? : ExerciseQuery ) : string {
    console.log(query)
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

  public fetchExercises ( query? : ExerciseQuery ) : Observable<ExerciseObject[]> {
    console.log(`/exercises${this.extractQuery(query)}`)
    return this.fetch( `/exercises${this.extractQuery(query)}` ) as Observable<ExerciseObject[]>;
  }

  public fetchTags ( ) : Observable<ExerciseTag[]> {
    return this.fetch( "/tags" ) as Observable<ExerciseTag[]>;
  }
}
