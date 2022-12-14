import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Helpers } from 'src/app/shared/utils/helpers';
import { msg } from 'src/app/shared/utils/msg';
import Swal from 'sweetalert2';
import { ILogin } from './interfaces/ILogin';
import { LoginService } from './services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  msg = msg;
  helpers = Helpers;

  loginForm: FormGroup = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  login() {
    if (this.loginForm.value) {
      let payload: ILogin = this.loginForm.value;

      this.loginService.login(payload).subscribe(
        (response: any) => {
          Swal.fire({
            title: "Tudo certo!",
            text: "Login realizado com sucesso!",
            icon: 'success',
            confirmButtonText: 'Ok!'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigateByUrl('carreiras');
            }
        })
        }
      )
    }
  }
}
