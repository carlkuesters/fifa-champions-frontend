import {Component, OnInit} from '@angular/core';

import {BackendInformationService} from '../../core/services/backend-information/backend-information.service';
import {TournamentYear} from './model/tournament-year.model';

@Component({
  selector: 'fc-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  tournamentYears: TournamentYear[];

  constructor(private backendInformationService: BackendInformationService) {
  }

  ngOnInit(): void {
    this.backendInformationService.getTournaments().then(tournaments => {
      this.tournamentYears = [];
      tournaments.forEach(tournament => {
        const year = new Date(tournament.date * 1000).getFullYear();
        let tournamentYear = this.tournamentYears.find(ty => ty.year === year);
        if (!tournamentYear) {
          tournamentYear = {
            year,
            dfcCup: null,
            internationalTournament: null,
            euroLeague: null,
            championsLeague: null,
            otherTournaments: []
          };
          this.tournamentYears.push(tournamentYear);
        }
        switch (tournament.type) {
          case 'dfc_cup':
            tournamentYear.dfcCup = tournament;
            break;
          case 'european_championship':
          case 'world_championship':
            tournamentYear.internationalTournament = tournament;
            break;
          case 'euro_league':
            tournamentYear.euroLeague = tournament;
            break;
          case 'champions_league':
            tournamentYear.championsLeague = tournament;
            break;
          case 'monthly_tournament':
          case 'fun_tournament':
          case 'team_tournament':
            tournamentYear.otherTournaments.push(tournament);
            break;
        }
      });
      this.tournamentYears.sort((a, b) => (b.year - a.year));
    });
  }
}
