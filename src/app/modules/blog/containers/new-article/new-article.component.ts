import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { faArrowLeft, faCamera, faX } from '@fortawesome/free-solid-svg-icons';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/shared/services/blog/blog.service';

@Component({
  selector: 'blog-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NewArticleComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private blogSvc: BlogService
  ) {}

  //ICONOS
  faArrow = faArrowLeft;
  faCamera = faCamera;
  faClose = faX;

  ///IMAGENES A MOSTRAR
  imageShow: any[] = [];

  //LOADING
  loading: boolean = false;

  articleForm = this.fb.group({
    title: ['', [Validators.required]],
    htmlInput: ['', [Validators.required]],
    images: this.fb.array(
      [],
      [Validators.required, Validators.maxLength(5), Validators.minLength(1)]
    ),
    resume: ['', [Validators.required]],
  });

  editorConfig: AngularEditorConfig = {
    editable: true,
    placeholder: 'Article...',
    height: '200px',
    toolbarHiddenButtons: [
      [
        'insertImage',
        'insertVideo',
        'removeFormat',
        'toggleEditorMode',
        'fontSize',
        'backgroundColor',
        'fontName',
      ],
    ],
  };

  ngOnInit(): void {}

  get images() {
    return this.articleForm.controls['images'] as FormArray;
  }

  onSubmit(): void {
    console.log(this.articleForm.value);
    this.loading = true;

    this.blogSvc.createArticle(this.articleForm.value).subscribe({
      error: (error: Error) => {
        this.toastr.error(error.message, 'Hubo un error', {
          toastClass: 'ngx-toastr !bg-error_color',
        });
      },
      next: () =>
        this.toastr.success('Articulo creado con exito', 'Felicidades', {
          toastClass: 'ngx-toastr !bg-success_color',
        }),
      complete: () => (this.loading = false),
    });
  }

  //FUNCION PARA AÑADIR IMAGENES
  addImage(e: any): void {
    if (
      e.target.files.length < 6 &&
      this.imageShow.length + e.target.files.length < 6
    ) {
      for (let i = 0; i < e.target.files.length; i++) {
        const fileControl = this.fb.control(e.target.files.item(i));
        this.images.push(fileControl);

        const reader = new FileReader();
        reader.onload = () => this.imageShow.push(reader.result);

        reader.readAsDataURL(e.target.files.item(i));
      }
    } else {
      this.toastr.error(
        'No puedes subir mas de 5 imagenes',
        'Demasiadas imagenes',
        {
          toastClass: 'ngx-toastr !bg-error_color',
        }
      );
    }
  }

  //FUNCION PARA ELIMINAR UNA IMAGEN
  deleteImage(pos: number) {
    this.imageShow.splice(pos, 1);
    this.images.removeAt(pos);
  }
}
