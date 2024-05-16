// src/app/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      username: [null],
      password: [null],
    });
  }

  onSubmit(): void {
    const { username, password } = this.form.value;
    console.log(username);
    if (this.authService.login(username, password)) {
      this.router.navigate(['/home']); // Redirecționează către pagina de home
    } else {
      this.errorMessage = 'Utilizator sau parolă incorectă!';
    }
  }
}
