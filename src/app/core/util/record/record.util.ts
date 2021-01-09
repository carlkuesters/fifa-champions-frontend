import {Member} from '../../../model/member.model';
import {OrderedPlayerEntry} from '../../../model/ordered-player-entry.model';
import {Record} from '../../../model/record.model';
import {getMemberImage} from '../member/member.util';

export function mapDisplayedRecords(records: Record[], sortAscOrDesc: boolean, members: Member[]): OrderedPlayerEntry[] {
  const entries = [];
  let rank = 0;
  let lastValue = null;
  const sortedRecords = (sortAscOrDesc ? records.slice().reverse() : records);
  sortedRecords.forEach(record => {
    if (record.value !== lastValue) {
      rank++;
    }
    const member = members.find(m => m.id === record.memberId);
    entries.push({
      id: member.id,
      name: member.name,
      image: getMemberImage(member.id, 32),
      rank,
      rankHint: record.value,
      text: null
    });
    lastValue = record.value;
  });
  return entries;
}
