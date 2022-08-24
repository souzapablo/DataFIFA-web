import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IPostOpponent } from 'src/app/shared/interfaces/IPostOpponent';
import { OpponentService } from 'src/app/shared/services/opponent-service.service';
import { msg } from 'src/app/shared/utils/msg';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-create-opponent',
  templateUrl: './dialog-create-opponent.component.html',
  styleUrls: ['./dialog-create-opponent.component.scss']
})
export class DialogCreateOpponentComponent implements OnInit {

  constructor(private fb: FormBuilder, private opponentService: OpponentService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  msg = msg;
  
  createOpponentForm: FormGroup = this.fb.group({
    name: [''],
    stadium: [''],
    opponentLogoUrl: ['']
  })
  
  postOpponent() {
    let payload: IPostOpponent = this.createOpponentForm.value;

    this.opponentService.postOpponent(payload).subscribe(
      (response) => {
        Swal.fire({
          title: "Tudo certo!",
          text: "Adversário adicionado com sucesso!",
          icon: 'success',
          confirmButtonText: 'Ok!'
        })
      }
    )
  }

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }

}
