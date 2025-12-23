
function toggleForm() {
  const form = document.getElementById('pressForm');
  form.classList.toggle('hidden');
}

function handleSubmit(e) {
  e.preventDefault();

  const form = document.getElementById('pressConfigForm');
  const data = new FormData(form);

  console.log('FORM DATA SUBMITTED:');
  for (let [key, value] of data.entries()) {
    console.log(key + ': ' + value);
  }

  alert('Form submitted successfully (check console)');
  form.reset();
}
