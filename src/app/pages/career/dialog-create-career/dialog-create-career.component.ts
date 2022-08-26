import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { msg } from 'src/app/shared/utils/msg';
import Swal from 'sweetalert2';
import { CareerService } from '../services/career.service';

@Component({
  selector: 'app-dialog-create-career',
  templateUrl: './dialog-create-career.component.html',
  styleUrls: ['./dialog-create-career.component.scss']
})
export class DialogCreateCareerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,
  private careerService: CareerService) { }

  ngOnInit(): void {
  }

  msg = msg;

  createCareerForm: FormGroup = this.fb.group({
    userId: this.data.id,
    managerName: ['', Validators.required],
    teamName: ['', Validators.required],
    teamStadium: ['', Validators.required],
    teamLogoURl: ['', Validators.required]
  })

  createCareer() {
    let payload = this.createCareerForm.value;

    this.careerService.postCareer(payload).subscribe(
      (response) => {
        Swal.fire({
          title: "Tudo certo!",
          text: "Carreira criada com sucesso!",
          icon: 'success',
          confirmButtonText: 'Ok!'
        })
      }
    );
  }


  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.createCareerForm.get(inputName);

    if (formControl.errors !== null) {
      return formControl.errors[validatorName] && formControl.touched;
    }
  }
}
