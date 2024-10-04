import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectComponent, ProjectFile } from './project/project.component';
import { take } from 'rxjs';
import { ProjectService } from './product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnChanges {
  title = 'portfolio2024';
  @Input() pfile: ProjectFile;
  constructor(private ps: ProjectService) {}

  ngOnInit(): void {
    this.ps
      .getProjects()
      .pipe(take(1))
      .subscribe((pros) => {
        this.pfile = pros;
      });
  }

  ngOnChanges(): void {
    console.debug(this.pfile);
  }
}
