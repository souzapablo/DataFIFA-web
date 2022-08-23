import { Component, OnInit } from '@angular/core';
import { NavigationBehaviorOptions, Router } from '@angular/router';
import { ICareer } from './interfaces/ICareer';
import { CareerService } from './services/career.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor(private careerService: CareerService, private router: Router) { }

  ngOnInit(): void {
    this.getUserCareers()
  }

  careers: ICareer[] = [];
  isLoadingTable = true;

  getUserCareers() {
    this.careerService.getUsersCareer(1).subscribe(
      (response: ICareer[]) => {
        this.careers = response;
        this.isLoadingTable = false;
      }
    );
  }

  deleteCareer(careerId: number){
    this.careerService.deleteCareer(careerId).subscribe(
      (response) => {
        this.careers = this.careers.filter((career: ICareer) => career.careerId != careerId);
      }
    );
  }

  createCareer() {
    alert("clicou")
  }

  redirectTo(url: string) {
    console.log(url)
    this.router.navigateByUrl(url);
  }

  redirectToWithParams(url: string, id: number) {
    const dataParams: NavigationBehaviorOptions = {
      state: {
        id: id
      }
    };
    this.router.navigate([`${url}/`], dataParams)
  }
}
