document.addEventListener("DOMContentLoaded", function () {
  let isCardView = true; // Initial view is set to card
  let membersData; // To store fetched members data

  // Function to display members based on current view mode
  function displayMembers() {
      const membersDisplay = document.getElementById("members-display");
      membersDisplay.innerHTML = ''; // Clear previous content

      const memberList = document.createElement("ul");
      memberList.classList.add("members-list"); // Add the members-list class

      membersData.members.forEach(member => {
          const memberElement = document.createElement("li");
          memberElement.classList.add(isCardView ? 'member-card' : 'member-list-item');

          // Create HTML elements to display the JSON data
          memberElement.innerHTML = `
              <img src="${member.image}" alt="${member.name}" class="member-image">
              <h2>${member.name}</h2>
              <p>${member.address}</p>
              <p>${member.phone}</p>
              <p><a href="${member.website}">Website</a></p>
              <p>${member.description}</p>
              <p>Membership Level: ${member.membership_level}</p>
          `;

          memberList.appendChild(memberElement);
      });

      membersDisplay.appendChild(memberList);
  }

  // Fetch JSON data and display members
  fetch('data/members.json')
    .then(response => response.json())
    .then(members => {
      membersData = members; // Store fetched members data
      displayMembers(); // Display members

      // Toggle view mode on button click
      const toggleButton = document.getElementById("toggleView");
      toggleButton.addEventListener("click", function() {
          isCardView = !isCardView; // Toggle between card and list view
          displayMembers(); // Redisplay members based on new view mode
      });
  })
  .catch(error => console.error("Error fetching JSON data:", error));
});
