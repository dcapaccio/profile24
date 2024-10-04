import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ProjectFile } from './project/project.component';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  private url = 'projects.json';

  getProjects(): Observable<ProjectFile> {
    const prom = fetch(this.url)
      .then((response) => response.json())
      .then((resJSON) => {
        return resJSON as ProjectFile;
      });
    return from(prom);
  }
}
