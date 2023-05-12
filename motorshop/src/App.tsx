import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnnouncementProvider } from "./contexts/Announcement";
import { UserProvider } from "./contexts/User";
import RoutesMain from "./routes";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <>
      <ToastContainer theme="dark" />
      <UserProvider>
        <AnnouncementProvider>
          <ModalProvider>
            <RoutesMain />
          </ModalProvider>
        </AnnouncementProvider>
      </UserProvider>
    </>
  );
}

export default App;
