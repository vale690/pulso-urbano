// Mostrar año actual
document.getElementById('year').textContent = new Date().getFullYear();

// Desplazamiento suave a secciones
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Simulación de reserva
function makeReservation() {
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const people = document.getElementById('people').value;

  if (!name || !date || !time) {
    alert('Por favor completa los campos de reserva.');
    return;
  }

  alert(`Reserva confirmada para ${name} el ${date} a las ${time} (${people} personas).`);
  document.querySelector('.reserve-form').reset();
}
