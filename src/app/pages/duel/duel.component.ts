import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs';

import {DuelStoreFacadeService} from '../../core/services/duel-store-facade/duel-store-facade.service';
import {MemberStoreFacadeService} from '../../core/services/member-store-facade/member-store-facade.service';
import {DisplayedDuel} from '../../model/displayed-duel.model';

@Component({
  selector: 'fc-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.scss']
})
export class DuelComponent implements OnInit {

  displayedDuel: Observable<DisplayedDuel>;

  constructor(private activatedRoute: ActivatedRoute,
              private duelStoreFacadeService: DuelStoreFacadeService,
              private memberStoreFacadeService: MemberStoreFacadeService) {
  }

  ngOnInit(): void {
    const duelSeoId = this.activatedRoute.snapshot.paramMap.get('duelSeoId');
    this.displayedDuel = this.duelStoreFacadeService.getDisplayedDuel(duelSeoId);

    this.duelStoreFacadeService.loadDuel(duelSeoId);
    this.memberStoreFacadeService.loadMembers();
  }
}
