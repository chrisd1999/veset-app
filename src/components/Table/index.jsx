import React, { useEffect, useState } from 'react';
import { TableHead } from './TableHead';
import { TableList } from './TableList';
import {
  getMembers,
  deleteMemberById,
  createFakeMember,
  createNewMember,
  getMemberById,
  editMemberById,
} from '../../api/MemberAPI';
import { Button } from '../Button';
import { AddNewMemberModal } from '../Modals/AddNewMemberModal';
import { ConfirmModal } from '../Modals/ConfirmModal';
import { EditMemberModal } from '../Modals/EditMemberModal';

export function Table() {
  const [members, setMembers] = useState([]);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const [memberToEdit, setMemberToEdit] = useState(null);
  const [isAddMemberModalOpen, setisAddMemberModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toogleAddMemberModal = () => {
    setisAddMemberModalOpen(!isAddMemberModalOpen);
  };

  const toogleConfirmModal = () => {
    setIsConfirmModalOpen(!isConfirmModalOpen);
  };

  const toogleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const deleteTeamMember = () => {
    deleteMemberById(memberToDelete).then((res) => {
      if (res) {
        setMembers(members.filter((member) => member.id !== res.id));
      }
    });
    setMemberToDelete(null);
    toogleConfirmModal();
  };

  const deleteMember = (id) => {
    toogleConfirmModal();
    setMemberToDelete(id);
  };

  const createNewFakeMember = () => {
    createFakeMember().then((res) => {
      if (res) {
        setMembers([...members, res]);
      }
    });
  };

  const createNewTeamMember = (data) => {
    createNewMember(data).then((res) => {
      if (res) {
        setMembers([...members, res]);
      }
    });
  };

  const editTeamMember = (id) => {
    getMemberById(id).then((res) => {
      if (res) {
        setMemberToEdit(res);
        toogleEditModal();
      }
    });
  };

  const handleEditTeamMember = (data) => {
    editMemberById(data.id, data).then((res) => {
      if (res) {
        setMembers(
          members.map((member) => {
            return member.id === res.id ? { ...res } : member;
          })
        );
      }
    });
  };
  useEffect(() => {
    getMembers().then((res) => {
      if (res) setMembers(res);
    });
  }, []);

  return (
    <div>
      <div className='max-w-6xl mx-auto flex justify-end pt-2 space-x-3'>
        <Button
          handleClick={(e) => {
            e.preventDefault();
            createNewFakeMember();
          }}
          className='bg-blue-400 tracking-wide text-white hover:bg-blue-500'
        >
          Add fake team member
        </Button>
        <Button
          handleClick={(e) => {
            e.preventDefault();
            toogleAddMemberModal();
          }}
          className='bg-green-400 tracking-wide text-white hover:bg-green-500'
        >
          Add team member
        </Button>
      </div>
      <div className='max-w-6xl mx-auto pt-4 flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <TableHead />
                <TableList
                  members={members}
                  deleteMember={deleteMember}
                  editTeamMember={editTeamMember}
                />
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddNewMemberModal
        title='Add new team member'
        buttonText='Add new team member'
        isOpen={isAddMemberModalOpen}
        handleClick={toogleAddMemberModal}
        handleAction={createNewTeamMember}
      />
      {memberToEdit && (
        <EditMemberModal
          title='Edit team member'
          buttonText='Edit team member'
          isOpen={isEditModalOpen}
          handleClick={toogleEditModal}
          memberToEdit={memberToEdit}
          handleAction={handleEditTeamMember}
        />
      )}
      <ConfirmModal
        title='Are you sure you want to delete member?'
        isOpen={isConfirmModalOpen}
        handleClick={toogleConfirmModal}
        handleAction={deleteTeamMember}
      />
    </div>
  );
}
