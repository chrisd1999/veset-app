import { useEffect, useState } from 'react';
import axios from 'axios';
import faker from 'faker';

const apiLink =
  'https://60d1820c5b017400178f3bd5.mockapi.io/api/1/team-members';

export function useMembers() {
  const [members, setMembers] = useState([]);

  const getMembers = async () => {
    const res = await axios.get(apiLink);
    setMembers(await res.data);
  };

  const getMemberById = async (id) => {
      const res = await axios.get(`${apiLink}/${id}`);
      return res.data;
  }

  const createMember = async (data) => {
    const res = await axios.post(apiLink, data);
    setMembers([...members, await res.data]);
  };

  const createFakeMember = async () => {
    const fakeData = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      position: faker.lorem.words(5),
      description: faker.lorem.sentence(10),
    };

    const res = await axios.post(apiLink, fakeData);
    const newFakeMember = await res.data;
    setMembers([...members, newFakeMember]);
  };

  const editMemberById = async (id, data) => {
    const res = await axios.put(`${apiLink}/${id}`, data);
    const editedMember = await res.data;
    setMembers(
      members.map((member) =>
        member.id === editedMember.id ? { ...editedMember } : member
      )
    );
  };

  const deleteMemberById = async (id) => {
    const res = await axios.delete(`${apiLink}/${id}`);
    const deletedMember = await res.data;
    setMembers(members.filter((member) => member.id !== deletedMember.id));
  };

  useEffect(() => {
      getMembers();
  }, []);

  return {
    members,
    getMembers,
    createMember,
    createFakeMember,
    editMemberById,
    deleteMemberById,
    getMemberById,
  };
}
