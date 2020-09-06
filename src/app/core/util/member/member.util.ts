import {DisplayedMember} from '../../../model/displayed-member.model';
import {Member} from '../../../model/member.model';

const MEMBER_IDS_WITHOUT_OWN_IMAGE = [16, 21, 25, 32, 33, 34, 35, 36, 37];

export function mapDisplayedMember(member: Member): DisplayedMember {
  return {
    id: member.id,
    name: member.name,
    description: member.description,
    image: getMemberImage(member.id)
  };
}

export function getMemberImage(memberId: number, size?: number): string {
  const imageName = (MEMBER_IDS_WITHOUT_OWN_IMAGE.includes(memberId) ? 'icon1' : memberId);
  return 'assets/images/members/' + imageName + (size ? '_' + size : '') + '.png';
}
