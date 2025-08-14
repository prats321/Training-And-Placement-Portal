// Utility to create card
function createCard(content) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = content;
  return card;
}

// Student Registration Logic
document.getElementById('studentForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const branch = document.getElementById('branch').value.trim();
  const cgpa = document.getElementById('cgpa').value.trim();
  const studentCard = createCard(`<strong>${name}</strong><br>${email}<br>Branch: ${branch}<br>CGPA: ${cgpa}`);
  document.getElementById('studentList').appendChild(studentCard);
  this.reset();
});

// Job Posting Logic
document.getElementById('jobForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const title = document.getElementById('jobTitle').value.trim();
  const company = document.getElementById('company').value.trim();
  const criteria = document.getElementById('criteria').value.trim();
  const jobCard = createCard(`<strong>${title}</strong> at ${company}<br>Eligibility: ${criteria}`);
  document.getElementById('jobList').appendChild(jobCard);
  this.reset();
});

// Search functionality for students
document.getElementById('studentSearch').addEventListener('input', function () {
  const term = this.value.toLowerCase();
  document.querySelectorAll('#studentList .card').forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(term) ? '' : 'none';
  });
});

// Search functionality for jobs
document.getElementById('jobSearch').addEventListener('input', function () {
  const term = this.value.toLowerCase();
  document.querySelectorAll('#jobList .card').forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(term) ? '' : 'none';
  });
});
