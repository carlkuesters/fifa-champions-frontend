import {DisplayedMemberDetails} from '../../../model/displayed-member-details.model';
import {MemberDetails} from '../../../model/member-details.model';
import {getMemberImage} from '../member/member.util';

export function mapDisplayedMemberDetails(memberDetails: MemberDetails): DisplayedMemberDetails {
  return {
    name: memberDetails.name,
    image: getMemberImage(memberDetails.id),
    description: memberDetails.description
  };
}
