import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { faArrowLeft, faCamera } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'blog-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
})
export class NewArticleComponent implements OnInit {
  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  faArrow = faArrowLeft;
  faCamera = faCamera;

  imageShow: any[] = [];

  articleForm = this.fb.group({
    title: ['', [Validators.required]],
    htmlInput: ['', [Validators.required]],
    images: this.fb.array(
      [],
      [Validators.required, Validators.maxLength(5), Validators.minLength(1)]
    ),
  });

  public options: Object = {
    charCounterCount: true,
    events: {},
    placeholderText: 'Start typing...',
    height: '200px',
  };

  ngOnInit(): void {}

  get images() {
    return this.articleForm.controls['images'] as FormArray;
  }

  onSubmit(): void {
    console.log(this.articleForm.value);
    console.log(this.imageShow);
  }

  addImage(e: any): void {
    if (e.target.files.length < 5) {
      for (let i = 0; i < e.target.files.length; i++) {
        const fileControl = this.fb.control(e.target.files.item(i));
        this.images.push(fileControl);

        const reader = new FileReader();
        reader.onload = () => this.imageShow.push(reader.result);
        reader.onprogress = () => console.log('Cargando');

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
}
