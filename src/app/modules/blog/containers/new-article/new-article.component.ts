import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { faArrowLeft, faCamera, faX } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { toolbarOptions } from 'src/app/data/const/froala/toolbarOptions';
import { toolbarOptionsXS } from 'src/app/data/const/froala/toolbarOptionsXS';
import { BlogService } from 'src/app/shared/services/blog/blog.service';

@Component({
  selector: 'blog-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
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

  //OPCIONES DEL EDITOR DE TEXTO
  toolbarOptions = toolbarOptions;
  toolbarOptionsXS = toolbarOptionsXS;

  articleForm = this.fb.group({
    title: ['', [Validators.required]],
    htmlInput: ['', [Validators.required]],
    images: this.fb.array(
      [],
      [Validators.required, Validators.maxLength(5), Validators.minLength(1)]
    ),
    resume: ['', [Validators.required]],
  });

  public options: Object = {
    key: 'ERB2zA2C2A4B5B3D3qYFd1UQRFQIVb1MSMc2IWPNe1IFg1yD4C3D2E2C4B1F1H4C2C1==',
    charCounterCount: true,
    events: {},
    placeholderText: 'Start typing...',
    height: '200px',
    htmlExecuteScripts: false,
    theme: 'light',
    pluginsEnabled: null,

    toolbarButtons: toolbarOptions,
    toolbarButtonsSM: toolbarOptions,
    toolbarButtonsXS: toolbarOptionsXS,
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
