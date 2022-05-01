import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private fb: FormBuilder, private loginSvc: LoginService) {}

  faUser = faUser;
  faKey = faKey;

  adminForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  loading: boolean = false;

  ngOnInit(): void {}

  onSubmit(): void {
    this.loading = true;

    this.loginSvc.loginAdminUser(this.adminForm.value).subscribe({
      error: (error) => console.log(error),
      next: (user) => console.log(user),
      complete: () => (this.loading = false),
    });
  }
}
