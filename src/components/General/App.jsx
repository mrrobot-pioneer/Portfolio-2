import MyRoutes from "./MyRoutes";
import Sidebar from "./Sidebar";

import "../../assets/styles/app.css";

function App() {
  return (
    <div className="portfolio">
      <Sidebar />
      <MyRoutes />
    </div>
  );
}

export default App;
