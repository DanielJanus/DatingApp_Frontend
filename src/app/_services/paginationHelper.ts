// @ts-ignore
import {PaginatedResult} from "../_models/pagination";
import {map} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";

// @ts-ignore
export function getPaginatedResult<T>(url: string, params: any, http: HttpClient) {
  const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();
  return http.get<T>(url,{observe: 'response', params}).pipe(
    map(response => {
      // @ts-ignore
      paginatedResult.result = response.body;
      if (response.headers.get('Pagination') !== null) {
        // @ts-ignore
        paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
      }
      return paginatedResult;
    })
  );
}

export function getPaginationHeaders(pageNumber: number, pageSize: number){

  let params = new HttpParams();

  params = params.append('pageNumber', pageNumber.toString());
  params = params.append('pageSize', pageSize.toString());

  return params;
}
