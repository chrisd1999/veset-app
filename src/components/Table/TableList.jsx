import React from 'react';
import { TableMember } from './TableMember';

function TableList({ members, deleteMember, editTeamMember }) {
  return (
    <tbody className='bg-white divide-y divide-gray-200'>
      {members.map((member) => {
        return (
          <TableMember
            key={member.id}
            deleteMember={deleteMember}
            editTeamMember={editTeamMember}
            teamMember={member}
          />
        );
      })}
    </tbody>
  );
}

export default React.memo(TableList);