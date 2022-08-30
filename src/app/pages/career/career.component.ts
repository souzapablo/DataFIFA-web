import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICareer } from './interfaces/ICareer';
import { CareerService } from './services/career.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateCareerComponent } from './dialog-create-career/dialog-create-career.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor(private careerService: CareerService, private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUserCareers()
  }

  careers: ICareer[] = [];
  isLoadingTable = true;

  getUserCareers() {
    this.careerService.getUsersCareer(Number(localStorage.getItem("userId"))).subscribe(
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

  openDialog() {
    let dialogRef = this.dialog.open(DialogCreateCareerComponent, {data: {id: 1}})

    dialogRef.afterClosed().subscribe(result => {
      if (result === "true"){
        this.getUserCareers()
      } 
    });
  }

  redirectTo(url: string, teamId: number) {
    environment.teamId = teamId;
    this.router.navigateByUrl(url);
  }

  reloadCurrentPage(){
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]);
    });
  }
  
}
