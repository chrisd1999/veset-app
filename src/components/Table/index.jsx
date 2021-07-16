import React, { useEffect, useState } from 'react';
import { TableHead } from './TableHead';
import TableList from './TableList';
import { Button } from '../Button';
import { AddNewMemberModal } from '../Modals/AddNewMemberModal';
import { ConfirmModal } from '../Modals/ConfirmModal';
import { EditMemberModal } from '../Modals/EditMemberModal';
import { useMembers } from '../../hooks/useMembers';
import { useModals } from '../../hooks/useModals';

export function Table() {
  const {
    members,
    createFakeMember,
    createMember,
    editMemberById,
    deleteMemberById,
  } = useMembers();
  const {
    isAddModalOpen,
    isEditModalOpen,
    isConfirmModalOpen,
    toggleAddModal,
    toggleEditModal,
    toggleConfirmModal,
  } = useModals();

  const [memberToDeleteId, setMemberToDeleteId] = useState(null);
  const [memberToEdit, setMemberToEdit] = useState(null);

  return (
    <div>
      <div className='max-w-6xl mx-auto flex justify-end pt-2 space-x-3'>
        <Button
          dataTestId='fake-member-btn'
          handleClick={createFakeMember}
          className='bg-blue-400 tracking-wide text-white hover:bg-blue-500'
        >
          Add fake team member
        </Button>
        <Button
          data-dataTestId='new-member-btn'
          handleClick={toggleAddModal}
          className='bg-green-400 tracking-wide text-white hover:bg-green-500'
        >
          Add team member
        </Button>
      </div>
      <div className='max-w-6xl mx-auto pt-4 flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200 '>
                <TableHead />
                <TableList
                  members={members}
                  deleteMember={(id) => {
                    toggleConfirmModal();
                    setMemberToDeleteId(id);
                  }}
                  editTeamMember={(member) => {
                    setMemberToEdit(member);
                    toggleEditModal();
                  }}
                />
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddNewMemberModal
        title='Add new team member'
        buttonText='Add new team member'
        isOpen={isAddModalOpen}
        handleClick={toggleAddModal}
        handleAction={createMember}
      />
      {memberToEdit && (
        <EditMemberModal
          title='Edit team member'
          buttonText='Edit team member'
          isOpen={isEditModalOpen}
          handleClick={toggleEditModal}
          memberToEdit={memberToEdit}
          handleAction={(id, data) => {
            toggleEditModal();
            editMemberById(id, data);
            setMemberToEdit(null);
          }}
        />
      )}
      {memberToDeleteId && (
        <ConfirmModal
          title='Are you sure you want to delete member?'
          isOpen={isConfirmModalOpen}
          handleClick={toggleConfirmModal}
          handleDelete={() => {
            toggleConfirmModal();
            deleteMemberById(memberToDeleteId);
            setMemberToDeleteId(null);
          }}
        />
      )}
    </div>
  );
}
