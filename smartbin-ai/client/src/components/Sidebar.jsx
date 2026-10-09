import {
  LayoutDashboard,
  Map,
  Truck,
  ScanLine,
  MessageSquareWarning,
  BarChart3,
  Settings,
  Recycle,
} from "lucide-react";

function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "map",
      label: "Live Map",
      icon: Map,
    },
    {
      id: "routes",
      label: "Routes",
      icon: Truck,
    },
    {
      id: "ai",
      label: "AI Vision",
      icon: ScanLine,
    },
    {
      id: "complaints",
      label: "Complaints",
      icon: MessageSquareWarning,
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
    },
  ];

  return (
    <aside className="sidebar">

      <div className="logo-section">
        <div className="logo-icon">
          <Recycle size={22} />
        </div>

        <div>
          <h2>SmartBin</h2>
          <span>AI</span>
        </div>
      </div>

      <nav className="navigation">

        <p className="nav-label">OPERATIONS</p>

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              className={`nav-item ${
                activePage === item.id ? "active" : ""
              }`}
              onClick={() => setActivePage(item.id)}
            >
              <Icon size={19} />

              <span>{item.label}</span>
            </button>
          );
        })}

        <p className="nav-label settings-label">SYSTEM</p>

        <button className="nav-item">
          <Settings size={19} />
          <span>Settings</span>
        </button>

      </nav>

      <div className="sidebar-status">
        <div className="status-dot"></div>

        <div>
          <strong>System Online</strong>
          <small>All systems operational</small>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;