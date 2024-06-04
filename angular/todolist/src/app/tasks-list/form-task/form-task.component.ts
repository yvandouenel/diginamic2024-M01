import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'digi-form-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css',
})
export class FormTaskComponent {
  register(taskPartial: object) {
    console.log(`Formulaire soumis`, taskPartial);
  }
}
