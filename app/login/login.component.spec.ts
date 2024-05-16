import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from './login.component';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const authSpy = jasmine.createSpyObj('AuthService', ['login']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login successfully with valid credentials', () => {
    // Arrange
    authService.login.and.returnValue(true);
    component.form.setValue({ username: 'testuser', parola: 'password123' });

    // Act
    component.onSubmit();

    // Assert
    expect(authService.login).toHaveBeenCalledWith('testuser', 'password123');
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should show error message with invalid credentials', () => {
    // Arrange
    authService.login.and.returnValue(false);
    component.form.setValue({ username: 'wronguser', parola: 'wrongpassword' });

    // Act
    component.onSubmit();

    // Assert
    expect(authService.login).toHaveBeenCalledWith('wronguser', 'wrongpassword');
    expect(component.errorMessage).toBe('User sau parola gresite!');
  });
});
