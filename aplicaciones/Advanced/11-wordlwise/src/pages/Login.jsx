import { useEffect, useState } from "react";

import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import Button from "../components/Button";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      // con replace, reemplazamos en el stack login for /app, de modo que
      // cuando damos click en 'atras' no vuelve a login donde
      // automaticamente nos redirife a /app si estamos autenticados
      // y en cambio, nos manda a / si esa era la pagina anterior.
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
