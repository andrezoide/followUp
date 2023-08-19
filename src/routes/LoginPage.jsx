import { useState } from 'react';
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { email, password };

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();
      if (data.success) {
        // Aqui você pode armazenar um token, se tiver um, e redirecionar o usuário
        console.log('Login bem-sucedido:', data.message);
      } else {
        console.error('Erro no login:', data.message);
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  }

  return (
    <div className="login-page">
      <form className="login-form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Link to={"/home"}><button type="submit" className="btn btn-primary login-button">Login</button></Link>
      </form>
    </div>
  );
}

export default LoginPage;
