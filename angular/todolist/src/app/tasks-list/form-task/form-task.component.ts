import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTasksService } from '../../services/data-tasks.service';

@Component({
  selector: 'digi-form-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css',
})
export class FormTaskComponent {
  constructor(private dataTasksService: DataTasksService) {}
  register(taskPartial: object) {
    console.log(`Formulaire soumis`, taskPartial);
    // Emet une une notification next via l'observable newTask$
    this.dataTasksService.emitNewTaskObservable(taskPartial);
  }
}