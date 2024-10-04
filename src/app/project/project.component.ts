import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

class Extra {
  img?: string;
  video?: string;
  link?: string; // hyperlink
}

export class ProjectModel {
  name: string;
  mainimage: string;
  description: string;
  year: string;
  client?: string;
  exhibit?: string;
  extraAssets?: Extra[];
  products?: string[];
  technologies?: string[];
}

export class ProjectFile {
  projects: Array<ProjectModel>;
}

@Component({
  selector: 'app-project',
  standalone: true,
  templateUrl: './project.component.html',
  imports: [CommonModule],
  styleUrl: './project.component.scss',
})
export class ProjectComponent {

  @Input() project: ProjectModel;
  @Input() showExtras: boolean = false;

  constructor() {}


}
