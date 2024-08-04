const interests = [
  'branding',
  'design',
  'photography',
  'artificial intelligence',
  'illustration',
  'typography',
  'social networks',
  'research',
  'dron pilot',
  'games',
];

export function createInterestsBox() {
  const interestsContainer = document.createElement('div');
  interestsContainer.classList.add('resume__interests', 'box');

  const title = document.createElement('h2');
  title.textContent = 'Interests';

  const interestsList = document.createElement('div');
  interestsList.classList.add('interests__list');

  interests.forEach((interest, index) => {
    const interestItem = document.createElement('span');
    interestItem.id = `interest-${index + 1}`;
    interestItem.classList.add('interests__item');
    interestItem.contentEditable = true;
    interestItem.textContent = interest;
    interestsList.appendChild(interestItem);
  });

  interestsContainer.append(title, interestsList);
  return interestsContainer;
}
