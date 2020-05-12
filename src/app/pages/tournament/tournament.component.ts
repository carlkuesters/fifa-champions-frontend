import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {BackendInformationService} from '../../core/services/backend-information/backend-information.service';
import {Tournament} from '../../model/tournament.model';
import {TOURNAMENT_TYPES} from '../../model/tournament.constants';

const GROUP_NAMES = ['A', 'B', 'C', 'D'];

@Component({
  selector: 'fc-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  tournament: Tournament;

  constructor(private activatedRoute: ActivatedRoute,
              private backendInformationService: BackendInformationService) {
  }

  ngOnInit(): void {
    const tournamentSeoId = this.activatedRoute.snapshot.paramMap.get('tournamentSeoId');
    const tournamentId = Number(tournamentSeoId);
    this.backendInformationService.getTournament(tournamentId).then(tournament => {
      this.tournament = tournament;
      console.log(tournament);
    });
  }

  getTitle(): string {
    const tournamentType = TOURNAMENT_TYPES[this.tournament.type];
    let title = tournamentType.title + ' (';
    const date = new Date(this.tournament.date * 1000);
    if (!tournamentType.isYearly) {
      title += date.getMonth() + ' ';
    }
    title += date.getFullYear() + ')';
    return title;
  }

  getGroupName(groupIndex: number): string {
    return ((this.tournament.results.groups.length > 1) ? GROUP_NAMES[groupIndex] : null);
  }
}
