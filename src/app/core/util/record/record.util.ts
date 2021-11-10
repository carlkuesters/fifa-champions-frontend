import {Member} from '../../../model/member.model';
import {OrderedPlayerEntry} from '../../../model/ordered-player-entry.model';
import {Record} from '../../../model/record.model';
import {getMemberImage} from '../member/member.util';
import {getFormattedDate_JoinDate} from '../member-details/member-details.util';

export function mapDisplayedRecords(records: Record[], type: string, sortAscOrDesc: boolean, members: Member[]): OrderedPlayerEntry[] {
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
      rankHint: getFormattedValue(record.value, type),
      text: null
    });
    lastValue = record.value;
  });
  return entries;
}

function getFormattedValue(value: number, type: string): string {
  if (type === 'elo') {
    return Math.round(value).toString();
  } else if (type === 'winrate') {
    return (value * 100).toFixed(2) + '%';
  } else if (type === 'member_since') {
    return getFormattedDate_JoinDate(value);
  }
  return value.toString();
}
