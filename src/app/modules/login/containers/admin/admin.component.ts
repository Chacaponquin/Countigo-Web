import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  faUser = faUser;
  faKey = faKey;

  adminForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  loading: boolean = false;

  ngOnInit(): void {
    this.loginService.loading.subscribe((value) => (this.loading = value));
  }

  onSubmit(): void {
    this.loginService.loginAdminUser(this.adminForm.value).subscribe((user) => {
      if (user) console.log(user);
    });
  }
}
