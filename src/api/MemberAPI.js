import axios from 'axios';
import faker from 'faker';

export const apiLink =
  'https://60d1820c5b017400178f3bd5.mockapi.io/api/1/team-members';

export async function getMembers() {
  return await axios
    .get(apiLink)
    .then((res) => res.data)
    .catch((e) => console.log(e));
}

export async function getMemberById(id) {
  return await axios
    .get(`${apiLink}/${id}`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
}

export async function editMemberById(id, data) {
  return await axios
    .put(`${apiLink}/${id}`, data)
    .then((res) => res.data)
    .catch((e) => console.log(e));
}

export async function deleteMemberById(id) {
  return await axios
    .delete(`${apiLink}/${id}`)
    .then((res) => res.data)
    .catch((e) => console.log(`errror ${e}`));
}

export async function createNewMember(data) {
  return await axios.post(apiLink, data).then((res) => res.data);
}

export async function createFakeMember() {
  const data = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    position: faker.lorem.words(5),
    description: faker.lorem.sentence(10),
  };

  return await axios.post(apiLink, data).then((res) => res.data);
}
