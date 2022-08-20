// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { msg } from 'src/app/shared/utils/msg';
import { IUser } from './interfaces/IUser';
import { RegisterService } from './services/register.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(private fb: FormBuilder, private registerService: RegisterService,
        private router: Router) { }

    msg = msg;
    registerForm: FormGroup = this.fb.group({
        userName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    })

    ngOnInit(): void {
    }

    cadastrar() {
        if (this.registerForm.value) {
            let payload: IUser = this.registerForm.value;

            this.registerService.postUser(payload).subscribe(
                (response) => {
                    Swal.fire({
                        title: "Tudo certo!",
                        text: "Cadastro realizado com sucesso!",
                        icon: 'success',
                        confirmButtonText: 'Ok!'
                    }).then((result) => {
                        this.router.navigateByUrl('');
                        if (result.isConfirmed) {
                            localStorage.setItem("userName", response.userName),
                                localStorage.setItem("token", response.token)
                        }

                    })

                }
            )
        } else {
            this.registerForm.markAllAsTouched();
        }
    }


    isInvalid(inputName: string, validatorName: string) {
        const formControl: any = this.registerForm.get(inputName);

        if (formControl.errors !== null) {
            return formControl.errors[validatorName] && formControl.touched;
        }
    }

}