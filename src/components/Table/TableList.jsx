import React from 'react';
import { TableMember } from './TableMember';

export function TableList({ members, deleteMember, editTeamMember }) {
  return (
    <tbody className='bg-white divide-y divide-gray-200'>
      {members.map((member) => {
        return (
          <TableMember
            key={member.id}
            deleteMember={deleteMember}
            editTeamMember={editTeamMember}
            {...member}
          />
        );
      })}
    </tbody>
  );
}
