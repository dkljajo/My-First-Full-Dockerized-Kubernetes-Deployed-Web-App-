const ctx = document.getElementById('chart').getContext('2d');
let chart;

async function fetchAndRender() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  const products = data.products;
  const shuffled = products.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 10);

  const labels = selected.map(p => p.title);
  const prices = selected.map(p => p.price);

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Price',
        data: prices,
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

document.getElementById('refresh').addEventListener('click', fetchAndRender);

fetchAndRender();
