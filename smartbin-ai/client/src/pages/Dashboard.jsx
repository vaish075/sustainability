import { useMemo, useState } from "react";

import {
  Activity,
  MapPin,
  Clock,
  X,
} from "lucide-react";

import bins from "../data/bins";
import StatCard from "../components/StatCard";
import AlertCard from "../components/AlertCard";
import BinMap from "../components/BinMap";

function Dashboard() {
  const [selectedBin, setSelectedBin] = useState(null);

  const criticalBins = useMemo(() => {
    return bins.filter((bin) => bin.fillLevel >= 80);
  }, []);

  const warningBins = useMemo(() => {
    return bins.filter(
      (bin) => bin.fillLevel >= 50 && bin.fillLevel < 80
    );
  }, []);

  const normalBins = useMemo(() => {
    return bins.filter((bin) => bin.fillLevel < 50);
  }, []);

  return (
    <div className="dashboard">

      {/* HEADER */}

      <header className="page-header">

        <div>
          <div className="eyebrow">
            <Activity size={14} />
            CITY OPERATIONS
          </div>

          <h1>
            Good morning, Admin
          </h1>

          <p>
            Here's your city's waste intelligence overview.
          </p>
        </div>

        <div className="header-status">
          <span className="online-dot" />
          System Online
        </div>

      </header>


      {/* STATISTICS */}

      <section className="stats-grid">

        <StatCard
          title="Bins Monitored"
          value="248"
          description="+12 this month"
          type="bins"
        />

        <StatCard
          title="Critical Bins"
          value="31"
          description="Above 80% capacity"
          type="full"
        />

        <StatCard
          title="Active Alerts"
          value="12"
          description="Requires attention"
          type="alerts"
        />

        <StatCard
          title="Clean Coverage"
          value="87%"
          description="+6.4% this week"
          type="clean"
        />

        <StatCard
          title="Collections Today"
          value="42"
          description="8 pending"
          type="collections"
        />

        <StatCard
          title="CO₂ Saved"
          value="126 kg"
          description="Estimated this week"
          type="co2"
        />

      </section>


      {/* MAIN GRID */}

      <section className="dashboard-grid">

        {/* MAP PLACEHOLDER */}

        <div className="dashboard-panel map-panel">

          <div className="panel-header">

            <div>
              <h2>Live Bin Map</h2>
              <p>
                Real-time waste container monitoring
              </p>
            </div>

            <button className="view-map-btn">
              <MapPin size={15} />
              View Full Map
            </button>

          </div>

          <BinMap
            bins={bins}
            onBinClick={setSelectedBin}
          />

        </div>


        {/* ALERTS */}

        <div className="dashboard-panel alerts-panel">

          <div className="panel-header">

            <div>
              <h2>Critical Alerts</h2>

              <p>
                {criticalBins.length} bins require attention
              </p>
            </div>

            <div className="alert-count">
              {criticalBins.length}
            </div>

          </div>

          <div className="alerts-list">

            {criticalBins.map((bin) => (
              <AlertCard
                key={bin.id}
                bin={bin}
                onClick={setSelectedBin}
              />
            ))}

          </div>

        </div>

      </section>


      {/* CITY INTELLIGENCE */}

      <section className="dashboard-panel intelligence-panel">

        <div className="panel-header">

          <div>
            <h2>City Intelligence</h2>

            <p>
              Automated insights from current bin activity
            </p>
          </div>

          <span className="ai-badge">
            AI MONITORING
          </span>

        </div>


        <div className="intelligence-grid">

          <div className="intelligence-card warning-intelligence">

            <div className="intelligence-icon">
              ⚠️
            </div>

            <div>
              <strong>
                Koramangala
              </strong>

              <p>
                High waste generation detected.
              </p>
            </div>

          </div>


          <div className="intelligence-card">

            <div className="intelligence-icon">
              📈
            </div>

            <div>
              <strong>
                Indiranagar
              </strong>

              <p>
                Average fill rate increasing 12%.
              </p>
            </div>

          </div>


          <div className="intelligence-card">

            <div className="intelligence-icon">
              ♻️
            </div>

            <div>
              <strong>
                Jayanagar
              </strong>

              <p>
                Best segregation performance.
              </p>
            </div>

          </div>


          <div className="intelligence-card">

            <div className="intelligence-icon">
              🚛
            </div>

            <div>
              <strong>
                Whitefield
              </strong>

              <p>
                Collection route recommended.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* BIN DETAIL MODAL */}

      {selectedBin && (

        <div
          className="modal-overlay"
          onClick={() => setSelectedBin(null)}
        >

          <div
            className="bin-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedBin(null)}
            >
              <X size={18} />
            </button>

            <div className="modal-label">
              BIN DETAILS
            </div>

            <h2>
              {selectedBin.id}
            </h2>

            <div className="modal-location">
              <MapPin size={15} />
              {selectedBin.location}
            </div>

            <div className="modal-fill">

              <span>
                Fill Level
              </span>

              <strong>
                {selectedBin.fillLevel}%
              </strong>

            </div>

            <div className="large-progress">

              <div
                className={`large-progress-fill ${selectedBin.status}`}
                style={{
                  width: `${selectedBin.fillLevel}%`,
                }}
              />

            </div>

            <div className="modal-details">

              <div>
                <span>Waste Type</span>
                <strong>{selectedBin.type}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>
                  {selectedBin.status.toUpperCase()}
                </strong>
              </div>

              <div>
                <span>Last Updated</span>
                <strong>
                  <Clock size={14} />
                  {selectedBin.lastUpdated}
                </strong>
              </div>

            </div>

            {selectedBin.fillLevel >= 80 && (

              <button className="dispatch-btn">
                🚛 Dispatch Truck
              </button>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default Dashboard;