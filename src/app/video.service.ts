import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _getUrl = "/api/videos"
  constructor(private _http:HttpClient) { }

  getVideos(){
    return this._http.get(this._getUrl)
  }
}
