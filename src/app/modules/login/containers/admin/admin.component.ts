import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private loginSvc: LoginService,
    private router: Router
  ) {}

  faUser = faUser;
  faKey = faKey;

  adminForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  loading: boolean = false;
  error: string = '';

  ngOnInit(): void {}

  onSubmit(): void {
    this.loading = true;

    this.loginSvc.loginAdminUser(this.adminForm.value).subscribe({
      error: (error: Error) => {
        this.error = error.message;
        this.loading = false;

        setTimeout(() => {
          this.error = '';
        }, 8000);
      },
      next: () => {
        this.router.navigateByUrl('/');
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
