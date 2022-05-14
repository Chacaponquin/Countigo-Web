import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/shared/services/blog/blog.service';

@Component({
  selector: 'blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css'],
})
export class BlogHeaderComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private blogSvc: BlogService,
    private toastr: ToastrService
  ) {}

  emailForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });
  loading: boolean = false;

  onSubmit() {
    this.loading = true;
    this.blogSvc.blogSubscribe(this.emailForm.value).subscribe({
      next: () => {
        this.toastr.success(
          'Le llegaran actualizaciones de nuestros articulos cuando sean subidos',
          'Gracias por suscribirse',
          {
            toastClass: 'ngx-toastr !bg-success_color',
          }
        );
      },
      error: (error) => {
        this.loading = false;
        this.toastr.error(error.message, 'Hubo un Error', {
          toastClass: 'ngx-toastr !bg-error_color',
        });
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  ngOnInit(): void {}
}
