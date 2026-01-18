
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  const userData = {
    name: "John Doe",
    age: 30,
    bio: "Frontend developer",
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
