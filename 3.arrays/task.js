"use strict";
function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length &&
     arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  const filteredUsers = users.filter(user => user.gender === gender);
  return filteredUsers.length === 0
    ? 0
    : filteredUsers.reduce((sum, user) => sum + user.age, 0) / filteredUsers.length;
}