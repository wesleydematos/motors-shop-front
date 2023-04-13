import { AnnouncementProvider } from "./contexts/Announcement";
import { UserProvider } from "./contexts/User";
import RoutesMain from "./routes";

function App() {
  return (
    <>
      <UserProvider>
        <AnnouncementProvider>
          <RoutesMain />
        </AnnouncementProvider>
      </UserProvider>
    </>
  );
}

export default App;
