import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs';

// tslint:disable:max-line-length
import {MemberStoreFacadeService} from '../../core/services/member-store-facade/member-store-facade.service';
import {TournamentMetaOverviewStoreFacadeService} from '../../core/services/tournament-meta-overview-store-facade/tournament-meta-overview-store-facade.service';
import {DisplayedIsolatedTournamentMeta} from '../../model/displayed-isolated-tournament-meta.model';
import {TOURNAMENT_META_CONSTANTS} from '../../model/tournament-meta.constants';
// tslint:enable:max-line-length

@Component({
  selector: 'fc-tournament-meta-overview',
  templateUrl: './tournament-meta-overview.component.html',
  styleUrls: ['./tournament-meta-overview.component.scss']
})
export class TournamentMetaOverviewComponent implements OnInit {

  tournamentMetaTotalCount: Observable<number>;
  displayedIsolatedTournamentMeta: Observable<DisplayedIsolatedTournamentMeta>;

  constructor(private activatedRoute: ActivatedRoute,
              private tournamentMetaOverviewStoreFacadeService: TournamentMetaOverviewStoreFacadeService,
              private memberStoreFacadeService: MemberStoreFacadeService) {
  }

  ngOnInit(): void {
    this.tournamentMetaTotalCount = this.tournamentMetaOverviewStoreFacadeService.getTournamentMetaTotalCount(this.metaType);
    this.displayedIsolatedTournamentMeta = this.tournamentMetaOverviewStoreFacadeService.getDisplayedIsolatedTournamentMeta(this.metaType);

    this.tournamentMetaOverviewStoreFacadeService.loadTournamentMetaOverview(this.metaType);
    this.memberStoreFacadeService.loadMembers();
  }

  displayNewRandomMeta(): void {
    this.tournamentMetaOverviewStoreFacadeService.displayNextRandomTournamentMeta(this.metaType);
  }

  private get title(): string {
    return TOURNAMENT_META_CONSTANTS[this.metaType].titlePlural;
  }

  private get metaType(): string {
    return this.activatedRoute.snapshot.data.metaType;
  }
}
