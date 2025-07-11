
// Authentication check (temporarily disabled)
/*
if (!window.localStorage.getItem('userAuth')) {
  window.location.href = '/login.html';
}
*/

function logout() {
  // Temporarily simplified logout
  window.location.href = '/';
}

// Animations
gsap.from('.dashboard__title', {
  y: -50,
  opacity: 0,
  duration: 1
});

gsap.from('.dashboard__stat', {
  scale: 0.8,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2
});

// Sample data - Replace with actual API calls
const orders = [
  { id: 1, service: 'Web Development', status: 'In Progress', progress: 65 },
  { id: 2, service: 'Branding', status: 'Review', progress: 90 }
];

const history = [
  { id: 1, service: 'Digital Marketing', date: '2024-01-15', status: 'Completed' },
  { id: 2, service: 'Logo Design', date: '2023-12-20', status: 'Completed' }
];

// Populate orders
const orderCards = document.querySelector('.order-cards');
orders.forEach(order => {
  const card = document.createElement('div');
  card.className = 'dashboard__order-card';
  card.innerHTML = `
    <h4>${order.service}</h4>
    <div class="progress-bar">
      <div class="progress" style="width: ${order.progress}%"></div>
    </div>
    <p>Status: ${order.status}</p>
  `;
  orderCards.appendChild(card);
});

// Populate history
const historyTimeline = document.querySelector('.history-timeline');
history.forEach(item => {
  const entry = document.createElement('div');
  entry.className = 'history-entry';
  entry.innerHTML = `
    <div class="history-date">${item.date}</div>
    <div class="history-content">
      <h4>${item.service}</h4>
      <p>${item.status}</p>
    </div>
  `;
  historyTimeline.appendChild(entry);
});
