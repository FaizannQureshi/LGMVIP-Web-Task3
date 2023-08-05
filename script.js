const registrationForm = document.getElementById('registrationForm');
const output = document.getElementById('output');

registrationForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const website = document.getElementById('website').value;
  const imageLink = document.getElementById('image-link').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const selectedSkills = [];
  const skillsCheckboxes = document.querySelectorAll('input[name="language"]:checked');
  skillsCheckboxes.forEach((checkbox) => {
    selectedSkills.push(checkbox.value);
  });

  const userData = `
  <div style= "border: 1px solid black; padding: 30px font; font-size: small; max-width: 500px">
  <h1>Student Card</h1>
  <div style = " display: flex; flex-direction: row">
  <div style = "flex-direction: column; padding-left: '20px'">
  <p style = margin-left: '20px'><strong>Name:</strong> ${name}</p>
  <p><strong>Gender:</strong> ${gender}</p>

  <p ><strong>Email:</strong> ${email}</p>
  <p><strong>Skills:</strong> ${selectedSkills.join(', ')}</p>

  <p><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></p>
  </div>
  
  <img src="${imageLink}" alt="User Image" style="max-width: 100px; max-height: 100px; padding-left: 70px; padding-right: '20px'">
  
  </div>
  </div>
  `;
  
  output.innerHTML = userData;
  registrationForm.reset();
});

