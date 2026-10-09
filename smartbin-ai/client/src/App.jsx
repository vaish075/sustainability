import { useState } from "react";

import Sidebar from "./components/Sidebar";

import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Map from "./pages/Map";
import Routes from "./pages/Routes";
import AIVision from "./pages/AIVision";
import Complaints from "./pages/Complaints";
import Analytics from "./pages/Analytics";

import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  if (!isLoggedIn) {
    return (
      <Login
        onLogin={() => setIsLoggedIn(true)}
      />
    );
  }

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;

      case "map":
        return <Map />;

      case "routes":
        return <Routes />;

      case "ai":
        return <AIVision />;

      case "complaints":
        return <Complaints />;

      case "analytics":
        return <Analytics />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">
        {renderPage()}
      </main>

    </div>
  );
}

export default App;