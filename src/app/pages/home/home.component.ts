import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITeam } from 'src/app/shared/interfaces/ITeam';
import { TeamService } from 'src/app/shared/services/team-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeamInfo();
  }

  team!: ITeam;

  getTeamInfo() {
    this.teamService.getTeamById(environment.teamId).subscribe(
      (result: ITeam) => {
        this.team = result;
      }
    )
  }

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
