import {DisplayedMember} from '../../../model/displayed-member.model';
import {Member} from '../../../model/member.model';

const MEMBER_IDS_WITHOUT_OWN_IMAGE = [16, 21, 25, 33, 37, 39, 40, 41];

export function mapDisplayedMember(member: Member): DisplayedMember {
  return {
    id: member.id,
    name: member.name,
    description: member.description,
    image: getMemberImage(member.id)
  };
}

export function getMemberImage(memberId: number | null, size?: number): string {
  let imageName;
  if (memberId === null) {
    imageName = 'unknown';
  } else if (MEMBER_IDS_WITHOUT_OWN_IMAGE.includes(memberId)) {
    imageName = 'default';
  } else {
    imageName = memberId;
  }
  return 'assets/images/members/' + imageName + (size ? '_' + size : '') + '.png';
}
