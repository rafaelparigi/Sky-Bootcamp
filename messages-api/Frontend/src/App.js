import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "./components/Profile";
import { useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";

function App() {
  const { loginWithRedirect, logout, getAccessTokenSilently, user, isAuthenticated, isLoading } =
    useAuth0();
  const [messagesDisplayed, setMessagesDisplayed] = useState(false);
  const [messages, setMessages] = useState([]);
  const apiOrigin = "http://localhost:8000";

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios({
        method: "post",
        url: `${apiOrigin}/messages`,
        data: { sent_by: user.email },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(({ data }) => {
        setMessages(data);
        setMessagesDisplayed(!messagesDisplayed);
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <header className="App-header">
        {!isAuthenticated && <button onClick={() => loginWithRedirect()}>Log in</button>}
        {isAuthenticated && (
          <div>
            <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
            <button onClick={callApi}>
              {messagesDisplayed ? "Hide Messages" : "Display Messages"}
            </button>
          </div>
        )}
      </header>
      <main>
        <Profile />
        <br />
        {messagesDisplayed && (
          <div>
            {messages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
