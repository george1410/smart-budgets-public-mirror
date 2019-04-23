// creates the array of badges to display with correct images
// i.e. if the badge is locked the image is replaced with a padlock
const createDisplay = (userBadges, allBadges) => {
  if (userBadges.length < 1 || allBadges.length < 1) {
    return [];
  }
  const badges = [];
  allBadges.forEach((badge) => {
    const newBadge = {
      ...badge,
      src: './badges/0.png',
    };
    userBadges.forEach((userBadge) => {
      if (badge.id === userBadge.id) {
        newBadge.src = `./badges/${badge.id}.png`;
      }
    });
    badges.push(newBadge);
  });
  return badges;
};

export default createDisplay;
