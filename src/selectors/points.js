export default (friends, user) => {
  if (!user.points) {
    return {};
  }

  let userIndex = -1;
  const sorted = friends.concat(user)
    .sort((a, b) => (a.points < b.points ? 1 : -1)).map((friend, index) => {
      if (friend.points === user.points && userIndex === -1) {
        userIndex = index + 1;
        return {
          ...friend,
          highlight: true,
          index: index + 1,
        };
      }
      return {
        ...friend,
        index: index + 1,
      };
    });
  if (userIndex === -1) { userIndex = sorted.length + 1; }
  return {
    friends: sorted,
    user: {
      ...user,
      index: userIndex,
    },
  };
};
