document.addEventListener("DOMContentLoaded", function () {
    fetch('data/members.json')
      .then(response => {
        console.log("Response received:", response);
        return response.json();
      })
      .then(members => {
        console.log("Members data:", members);
        const membersDisplay = document.getElementById("members-display");
  
        members.members.forEach(member => {
          // Create a container for each member's data
          const memberCard = document.createElement("div");
          memberCard.classList.add("member-card"); // Add the member-card class
  
          // Create HTML elements to display the JSON data
          const name = document.createElement("p");
          name.textContent = member.name;
  
          const address = document.createElement("p");
          address.textContent = "Address: " + member.address;
  
          const phone = document.createElement("p");
          phone.textContent = "Phone: " + member.phone;
  
          const website = document.createElement("a");
          website.textContent = "Website";
          website.href = member.website;
  
          const image = document.createElement("img");
          image.src = member.image;
          image.alt = "Image of " + member.name;
  
          const membership_level = document.createElement("p");
          membership_level.textContent = "Membership Level: " + member.membership_level;
  
          const description = document.createElement("p");
          description.textContent = member.description;
  
          // Append the elements to the member card container
          memberCard.appendChild(name);
          memberCard.appendChild(image);
          memberCard.appendChild(description);
          memberCard.appendChild(membership_level);
          memberCard.appendChild(address);
          memberCard.appendChild(phone);
          memberCard.appendChild(website);
  
          // Append the member card container to the members display
          membersDisplay.appendChild(memberCard);
        });
      })
      .catch(error => console.error("Error fetching JSON data:", error));
  });
  