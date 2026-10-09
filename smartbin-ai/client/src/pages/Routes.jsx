import {
  Truck,
  MapPin,
  Clock,
  Route as RouteIcon,
  Fuel,
  Navigation,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

function Routes() {
  const routes = [
    {
      id: "RT-001",
      vehicle: "Truck KA-01-AB-2345",
      driver: "Ravi Kumar",
      bins: 8,
      distance: "14.8 km",
      time: "42 min",
      status: "Active",
      priority: "High",
    },
    {
      id: "RT-002",
      vehicle: "Truck KA-01-CD-5678",
      driver: "Suresh M",
      bins: 6,
      distance: "11.2 km",
      time: "35 min",
      status: "Scheduled",
      priority: "Medium",
    },
    {
      id: "RT-003",
      vehicle: "Truck KA-02-EF-9012",
      driver: "Manoj R",
      bins: 5,
      distance: "9.6 km",
      time: "29 min",
      status: "Completed",
      priority: "Low",
    },
  ];

  const stops = [
    {
      number: 1,
      bin: "B001",
      location: "Indiranagar 12th Main",
      fill: 94,
      status: "Critical",
    },
    {
      number: 2,
      bin: "B004",
      location: "Whitefield Main Road",
      fill: 87,
      status: "Critical",
    },
    {
      number: 3,
      bin: "B006",
      location: "Malleshwaram 8th Cross",
      fill: 81,
      status: "Critical",
    },
    {
      number: 4,
      bin: "B003",
      location: "Jayanagar 4th Block",
      fill: 67,
      status: "Warning",
    },
    {
      number: 5,
      bin: "B007",
      location: "BTM Layout 2nd Stage",
      fill: 58,
      status: "Warning",
    },
  ];

  return (
    <div className="routes-page">

      {/* Header */}
      <div className="routes-header">
        <div>
          <div className="page-eyebrow">
            <RouteIcon size={14} />
            ROUTE OPTIMIZATION
          </div>

          <h1>Smart Routes</h1>

          <p>
            AI-assisted collection routes based on bin priority,
            distance and fill levels.
          </p>
        </div>

        <div className="route-engine-status">
          <span className="status-pulse"></span>
          Route Engine Active
        </div>
      </div>

      {/* Summary Cards */}
      <div className="route-summary">

        <div className="route-summary-card">
          <div className="route-summary-icon">
            <Truck size={20} />
          </div>

          <div>
            <span>Active Trucks</span>
            <strong>3 / 5</strong>
            <small>2 available</small>
          </div>
        </div>

        <div className="route-summary-card">
          <div className="route-summary-icon">
            <MapPin size={20} />
          </div>

          <div>
            <span>Bins to Collect</span>
            <strong>19</strong>
            <small>8 critical</small>
          </div>
        </div>

        <div className="route-summary-card">
          <div className="route-summary-icon">
            <Navigation size={20} />
          </div>

          <div>
            <span>Total Distance</span>
            <strong>35.6 km</strong>
            <small>Optimized route</small>
          </div>
        </div>

        <div className="route-summary-card">
          <div className="route-summary-icon">
            <Fuel size={20} />
          </div>

          <div>
            <span>Fuel Saved</span>
            <strong>18.4%</strong>
            <small>vs fixed routes</small>
          </div>
        </div>

      </div>

      {/* Main Route Area */}
      <div className="routes-main-grid">

        {/* Recommended Route */}
        <div className="route-panel recommended-route">

          <div className="panel-header">
            <div>
              <h2>Recommended Route</h2>
              <p>Priority-based collection sequence</p>
            </div>

            <span className="optimized-badge">
              <CheckCircle2 size={14} />
              OPTIMIZED
            </span>
          </div>

          <div className="route-meta">
            <div>
              <Truck size={16} />
              <span>RT-001</span>
            </div>

            <div>
              <Clock size={16} />
              <span>42 min</span>
            </div>

            <div>
              <Navigation size={16} />
              <span>14.8 km</span>
            </div>
          </div>

          {/* Route Stops */}
          <div className="route-stops">

            {stops.map((stop, index) => (
              <div className="route-stop" key={stop.bin}>

                <div className="stop-number">
                  {stop.number}
                </div>

                <div className="stop-line"></div>

                <div className="stop-content">

                  <div className="stop-top">
                    <div>
                      <strong>{stop.bin}</strong>
                      <span>{stop.location}</span>
                    </div>

                    <span
                      className={`stop-status ${stop.status.toLowerCase()}`}
                    >
                      {stop.status}
                    </span>
                  </div>

                  <div className="stop-fill">
                    <div className="stop-fill-info">
                      <span>Fill level</span>
                      <strong>{stop.fill}%</strong>
                    </div>

                    <div className="mini-progress">
                      <div
                        className={
                          stop.fill >= 80
                            ? "mini-progress-fill critical"
                            : "mini-progress-fill warning"
                        }
                        style={{ width: `${stop.fill}%` }}
                      ></div>
                    </div>
                  </div>

                </div>

              </div>
            ))}

          </div>

          <button className="start-route-btn">
            <Navigation size={17} />
            Start Collection Route
          </button>

        </div>

        {/* Optimization Insights */}
        <div className="route-panel">

          <div className="panel-header">
            <div>
              <h2>Route Intelligence</h2>
              <p>Why this route was selected</p>
            </div>
          </div>

          <div className="intelligence-list">

            <div className="intelligence-item">
              <div className="intelligence-icon critical">
                <AlertTriangle size={17} />
              </div>

              <div>
                <strong>Critical bins prioritized</strong>
                <p>
                  3 bins above 80% capacity are placed first
                  to reduce overflow risk.
                </p>
              </div>
            </div>

            <div className="intelligence-item">
              <div className="intelligence-icon">
                <Navigation size={17} />
              </div>

              <div>
                <strong>Distance minimized</strong>
                <p>
                  Collection sequence reduces unnecessary
                  vehicle travel between high-priority bins.
                </p>
              </div>
            </div>

            <div className="intelligence-item">
              <div className="intelligence-icon">
                <Fuel size={17} />
              </div>

              <div>
                <strong>Fuel efficiency improved</strong>
                <p>
                  Estimated 18.4% fuel saving compared with
                  fixed collection scheduling.
                </p>
              </div>
            </div>

          </div>

          {/* Route Score */}
          <div className="route-score">

            <div className="route-score-header">
              <span>Route Efficiency Score</span>
              <strong>92 / 100</strong>
            </div>

            <div className="score-progress">
              <div></div>
            </div>

            <div className="score-details">
              <span>Distance</span>
              <span>Priority</span>
              <span>Fuel</span>
              <span>Time</span>
            </div>

          </div>

        </div>

      </div>

      {/* Fleet Routes */}
      <div className="route-panel fleet-panel">

        <div className="panel-header">
          <div>
            <h2>Today's Collection Routes</h2>
            <p>Fleet status and assigned routes</p>
          </div>
        </div>

        <div className="routes-table">

          <div className="routes-table-head">
            <span>Route</span>
            <span>Vehicle</span>
            <span>Driver</span>
            <span>Bins</span>
            <span>Distance</span>
            <span>ETA</span>
            <span>Status</span>
          </div>

          {routes.map((route) => (
            <div className="routes-table-row" key={route.id}>

              <strong>{route.id}</strong>

              <span className="vehicle-cell">
                <Truck size={15} />
                {route.vehicle}
              </span>

              <span>{route.driver}</span>

              <span>{route.bins}</span>

              <span>{route.distance}</span>

              <span>{route.time}</span>

              <span
                className={`route-status ${route.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                <span></span>
                {route.status}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* Prototype Notice */}
      <div className="route-prototype-notice">
        <RouteIcon size={18} />

        <div>
          <strong>Prototype Route Engine</strong>
          <p>
            Routes are generated using simulated bin locations,
            fill levels and priority rules. In a production system,
            this module can integrate GPS data and algorithms such
            as Dijkstra or TSP for dynamic route optimization.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Routes;