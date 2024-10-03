import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PoContainerModule, PoFieldModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PoContainerModule,
    ReactiveFormsModule,
    PoFieldModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  formGroup = this.fb.group({
    fullName: this.fb.control('', Validators.required),
    birthDate: this.fb.control(''),
    email: this.fb.control('', Validators.email),
    sex: this.fb.control(''),
    state: this.fb.control(''),
    goals: this.fb.control(''),
  });
}
