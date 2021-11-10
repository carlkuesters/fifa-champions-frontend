import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {MemberStoreFacadeService} from '../../core/services/member-store-facade/member-store-facade.service';
import {RecordSettingStoreFacadeService} from '../../core/services/record-setting-store-facade/record-setting-store-facade.service';
import {RecordStoreFacadeService} from '../../core/services/record-store-facade/record-store-facade.service';
import {DropdownOption} from '../../model/dropdown-option.model';
import {OrderedPlayerEntry} from '../../model/ordered-player-entry.model';

const RECORD_TYPES: DropdownOption[] = [
  { value: 'elo', title: 'Elo' },
  { value: 'winrate', title: 'Siegesrate' },
  { value: 'tournament_place', title: 'Platzierung / Turnier' },
  { value: 'tournament_participations', title: 'Turnierteilnahmen' },
  { value: 'matches', title: 'Spiele' },
  { value: 'wins', title: 'Siege' },
  { value: 'draws', title: 'Unentschieden' },
  { value: 'losses', title: 'Niederlagen' },
  { value: 'goals_shot', title: 'Tore' },
  { value: 'goals_shot_per_game', title: 'Tore / Spiel' },
  { value: 'goals_shot_in_1_game', title: 'Tore in 1 Spiel' },
  { value: 'goals_received', title: 'Gegentore' },
  { value: 'goals_received_per_game', title: 'Gegentore / Spiel' },
  { value: 'goals_received_in_1_game', title: 'Gegentore in 1 Spiel' },
  { value: 'best_ranking', title: 'Höhepunkt Weltrangl.' },
  { value: 'awards', title: 'FC Awards' },
  { value: 'member_since', title: 'Mitglied seit' }
];

@Component({
  selector: 'fc-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  RECORD_TYPES = RECORD_TYPES;

  selectedType: Observable<string>;
  sortAscOrDesc: Observable<boolean>;
  records: Observable<OrderedPlayerEntry[]>;

  constructor(private recordSettingStoreFacadeService: RecordSettingStoreFacadeService,
              private recordStoreFacadeService: RecordStoreFacadeService,
              private memberStoreFacadeService: MemberStoreFacadeService) {
  }

  ngOnInit(): void {
    this.selectedType = this.recordSettingStoreFacadeService.getSelectedRecordType();
    this.sortAscOrDesc = this.recordSettingStoreFacadeService.isRecordSortAscOrDesc();
    this.records = this.recordStoreFacadeService.getDisplayedRecords();

    this.memberStoreFacadeService.loadMembers();
  }

  selectType(recordType: string): void {
    this.recordSettingStoreFacadeService.selectType(recordType);
  }

  sort(sortAscOrDesc: boolean): void {
    this.recordSettingStoreFacadeService.sort(sortAscOrDesc);
  }
}
