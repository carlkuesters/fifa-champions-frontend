import {DisplayedFact} from '../../../model/displayed-member-info.model';
import {Fact} from '../../../model/fact.model';
import {Member} from '../../../model/member.model';
import {getMemberImage} from '../member/member.util';

export function mapDisplayedFact(fact: Fact, members: Member[]): DisplayedFact {
  const member = members.find(m => m.id === fact.memberId);
  return {
    memberId: member.id,
    memberName: member.name,
    memberImage: getMemberImage(member.id, 32),
    text: fact.text
  };
}
