import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  homeForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.homeForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }
  ngOnInit(): void {}
  onSubmit(): void {
    if (this.homeForm.valid) {
      this.router.navigate(['/resume'], { queryParams: this.homeForm.value });
    }}
}
