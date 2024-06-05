function getRandomMembers(members, count) {
  const shuffled = members.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function displaySpotlightAdvertisements(membersData) {
  const qualifiedMembers = membersData.filter(member => 
      member.membership_level.toLowerCase() === 'silver' || 
      member.membership_level.toLowerCase() === 'gold'
    );

  const selectedMembers = getRandomMembers(qualifiedMembers, Math.min(qualifiedMembers.length, 3)); // Ensure a maximum of 3 members are selected


  const spotlightContainer = document.getElementById('spotlight-container');
  spotlightContainer.innerHTML = ''; // Clear existing content

  selectedMembers.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.classList.add('member-card');

      const name = document.createElement('h3');
      name.textContent = member.name;

      const link = document.createElement('a');
      link.href = member.website;
      link.target = "_blank"; // Opens the link in a new tab

      const image = document.createElement('img');
      image.src = member.image;
      image.alt = member.name;

      const description = document.createElement('p');
      description.textContent = member.description;

      link.appendChild(image);
      memberCard.appendChild(name);
      memberCard.appendChild(link);
      memberCard.appendChild(description);

      spotlightContainer.appendChild(memberCard);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetch('data/members.json')
      .then(response => {
          return response.json();
      })
      .then(membersData => {
          displaySpotlightAdvertisements(membersData.members);
      })
      .catch(error => console.error("Error fetching JSON data:", error));
});
