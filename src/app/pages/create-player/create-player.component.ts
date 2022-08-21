import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPosition } from 'src/app/shared/interfaces/IPosition';
import { PlayerService } from 'src/app/shared/services/player.service';
import { msg } from 'src/app/shared/utils/msg';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {

  constructor(private fb: FormBuilder, private playerService: PlayerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getValues();
  }

  msg = msg;
  positions: IPosition[] = [];

  createPlayerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    age: [15, [Validators.required]],
    overallRating: [1, [Validators.required]],
    kitNumber: [1, Validators.required],
    position: [0, Validators.required]
  });

  createPlayer() {
    if (this.createPlayerForm.value) {
      const payload = this.createPlayerForm.value;

      this.playerService.postPlayer(payload).subscribe(
        (response) => {
          Swal.fire({
            title: "Tudo certo!",
            text: "Jogador registrado com sucesso!",
            icon: 'success',
            confirmButtonText: 'Ok!'
          }).then(response => {
            this.router.navigateByUrl('players')
          })
        }
      )
    } else {
      this.createPlayerForm.markAllAsTouched();
    }
  }

  getValues() {
    this.playerService.getPostitions().subscribe(
      (response: IPosition[]) => {
        this.positions = response;
      }
    )
  }

  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.createPlayerForm.get(inputName);

    if (formControl.errors !== null) {
      return formControl.errors[validatorName] && formControl.touched;
    }
  }
}
