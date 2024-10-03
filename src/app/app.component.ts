import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  formGroup = this.fb.group({
    name: this.fb.control('', Validators.required),
    email: this.fb.control('', Validators.email),
    sex: this.fb.control(''),
    state: this.fb.control(''),
    goals: this.fb.control(''),
  });
}
