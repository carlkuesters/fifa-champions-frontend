import {Award} from '../../../model/award.model';
import {AwardYear} from '../../../model/awards-year.model';
import {Member} from '../../../model/member.model';
import {getMemberImage} from '../member/member.util';

export function mapAwardYears(awards: Award[], members: Member[]): AwardYear[] {
  const awardYears: AwardYear[] = [];
  awards.forEach(award => {
    let awardYear = awardYears.find(ay => ay.year === award.year);
    if (!awardYear) {
      awardYear = {
        year: award.year,
        awards: []
      };
      awardYears.push(awardYear);
    }
    const member = members.find(m => m.id === award.memberId);
    awardYear.awards.push({
      type: award.type,
      memberId: member.id,
      memberName: member.name,
      memberImage: getMemberImage(member.id, 32),
    });
  });
  awardYears.sort((a, b) => (b.year - a.year));
  awardYears.forEach(awardYear => {
    awardYear.awards.sort((a, b) => a.type.localeCompare(b.type));
  });
  return awardYears;
}
