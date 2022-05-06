import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'home-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private userSvc: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  loading: boolean = false;

  clientMessageForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email]],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(300),
      ],
    ],
  });

  onSubmit() {
    this.loading = true;

    //this.clientMessageForm.reset();
    this.userSvc.sendClientMessage(this.clientMessageForm.value).subscribe({
      next: () => {
        this.toastr.success('Por su mensaje', 'Gracias', {
          timeOut: 8000,
          toastClass: 'ngx-toastr !bg-success_color',
        });
      },
      error: (error) => {
        this.toastr.error(error.message, 'Hubo un Error', {
          timeOut: 8000,
          toastClass: 'ngx-toastr !bg-error_color',
        });
        this.loading = false;
      },
      complete: () => (this.loading = false),
    });
  }
}
