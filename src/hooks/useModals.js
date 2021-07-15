import { useState } from 'react';

export function useModals() {
  const [isAddModalOpen, setisAddModalOpen] = useState(false);
  const [isEditModalOpen, setisEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setisConfirmModalOpen] = useState(false);

  const toggleAddModal = () => setisAddModalOpen(!isAddModalOpen);
  const toggleEditModal = () => setisEditModalOpen(!isEditModalOpen);
  const toggleConfirmModal = () => setisConfirmModalOpen(!isConfirmModalOpen);

  return {
    isAddModalOpen,
    isEditModalOpen,
    isConfirmModalOpen,
    toggleAddModal,
    toggleEditModal,
    toggleConfirmModal,
  };
}
