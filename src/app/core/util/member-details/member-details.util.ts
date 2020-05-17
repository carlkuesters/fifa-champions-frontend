import {DisplayedMemberDetails} from '../../../model/displayed-member-details.model';
import {MemberDetails} from '../../../model/member-details.model';
import {getMemberImage} from '../member/member.util';

export function mapDisplayedMemberDetails(memberDetails: MemberDetails): DisplayedMemberDetails {
  return {
    name: memberDetails.name,
    description: memberDetails.description,
    joinDate: memberDetails.joinDate,
    image: getMemberImage(memberDetails.id),
    tournaments: memberDetails.tournaments,
    matches: memberDetails.matches,
    wins: memberDetails.wins,
    draws: memberDetails.draws,
    losses: memberDetails.losses,
    goalsShot: memberDetails.goalsShot,
    goalsReceived: memberDetails.goalsReceived,
  };
}
