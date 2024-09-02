import { api } from "../../services/api";
import { useState } from "react";
import styles from "./userDetail.module.css";
import { FaSearch } from "react-icons/fa";
import { FaS } from "react-icons/fa6";

export const UserDetail = () => {
  const [user, setUser] = useState();
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(null);

  const getUser = (userName) => {
    api
      .get(`/users/${userName}`)
      .then((res) => {
        setError();
        setUser(res.data);
      })
      .catch((err) => {
        setError("Usuário não encontrado");
        setUser();
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getUser(userName);
    }
  };

  return (
    <div>
      <h3>Digite o nome do usuário</h3>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.input}
      />
      <button onClick={() => getUser(userName)} className={styles.button}>
        <FaSearch />
      </button>

      {error && <p className={styles["error-message"]}>{error}</p>}

      {user && (
        <div>
          <div className={styles["user-header"]}>
            <img
              src={user.avatar_url}
              alt={user.login}
              className={styles["user-img"]}
            />
            <h1>{user.login}</h1>
          </div>
        </div>
      )}
    </div>
  );
};
