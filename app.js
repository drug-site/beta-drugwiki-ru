async function loadData() {
  const res = await fetch('index.json');
  const data = await res.json();

  const list = document.getElementById('list');
  list.innerHTML = '';

  data.forEach(drug => {
    const el = document.createElement('div');
    el.className = 'item';
    el.innerHTML = `
      <strong>${drug.name}</strong><br>
      <span class="cat">${drug.category}</span>
    `;
    el.onclick = () => openCard(drug);
    list.appendChild(el);
  });
}

function openCard(drug) {
  const body = document.body;
  body.innerHTML = `
    <h2>${drug.name}</h2>
    <p><b>Категория:</b> ${drug.category}</p>
    <p><b>Эффекты:</b> ${drug.effects}</p>
    <p><b>Риски:</b> ${drug.risk}</p>
    <p><b>Форма:</b> ${drug.form}</p>
    <p><b>Зависимость:</b> ${drug.addiction}</p>
    <button onclick="location.reload()">Назад</button>
  `;
}

loadData();
