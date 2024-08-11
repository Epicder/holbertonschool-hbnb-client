document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        await loginUser(email, password);
    });
  }
});

async function loginUser(email, password) {
    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    await handleApiResponse(response);
}

async function handleApiResponse(response) {
  if (response.ok) {
      const data = await response.json();
      document.cookie = `token=${data.access_token}; path=/`;
      window.location.href = 'index.html';
  } else {
      const errorData = await response.json();
      alert('Login failed: ' + errorData.message);
  }
}