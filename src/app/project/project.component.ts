import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input({ required: true }) mainimage: string = 'assets/images/test.jpg';
  @Input() description: string = 'Test description of this project.';
  @Input() name: string = 'Project Name';
  @Input() year: string = '2021';
  @Input() client: string = 'client name, if there is one.';
  @Input() exhibit: string = "If there's an exhibit.";
}
