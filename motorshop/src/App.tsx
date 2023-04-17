import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnnouncementProvider } from "./contexts/Announcement";
import { UserProvider } from "./contexts/User";
import RoutesMain from "./routes";

function App() {
  return (
    <>
      <ToastContainer theme="dark" />
      <UserProvider>
        <AnnouncementProvider>
          <RoutesMain />
        </AnnouncementProvider>
      </UserProvider>
    </>
  );
}

export default App;
