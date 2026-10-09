import { useState } from "react";

import {
  MapPin,
  Activity,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from "lucide-react";

import bins from "../data/bins";
import BinMap from "../components/BinMap";

function Map() {
  const [selectedBin, setSelectedBin] = useState(null);

  const criticalBins = bins.filter(
    (bin) => bin.fillLevel >= 80
  );

  const warningBins = bins.filter(
    (bin) => bin.fillLevel >= 50 && bin.fillLevel < 80
  );

  const normalBins = bins.filter(
    (bin) => bin.fillLevel < 50
  );

  return (
    <div className="live-map-page">

      {/* Page Header */}
      <header className="page-header">

        <div>
          <div className="eyebrow">
            <Activity size={14} />
            LIVE MONITORING
          </div>

          <h1>Live Map</h1>

          <p>
            Real-time monitoring of waste containers across the city.
          </p>
        </div>

        <div className="header-status">
          <span className="online-dot" />
          Monitoring Active
        </div>

      </header>


      {/* Map Statistics */}
      <section className="map-stats">

        <div className="map-stat-card">

          <div className="map-stat-icon">
            <MapPin size={19} />
          </div>

          <div>
            <span>Total Bins</span>
            <strong>{bins.length}</strong>
          </div>

        </div>


        <div className="map-stat-card critical-map-stat">

          <div className="map-stat-icon">
            <AlertTriangle size={19} />
          </div>

          <div>
            <span>Critical</span>
            <strong>{criticalBins.length}</strong>
          </div>

        </div>


        <div className="map-stat-card warning-map-stat">

          <div className="map-stat-icon">
            <Clock size={19} />
          </div>

          <div>
            <span>Warning</span>
            <strong>{warningBins.length}</strong>
          </div>

        </div>


        <div className="map-stat-card normal-map-stat">

          <div className="map-stat-icon">
            <CheckCircle2 size={19} />
          </div>

          <div>
            <span>Normal</span>
            <strong>{normalBins.length}</strong>
          </div>

        </div>

      </section>


      {/* Main Map */}
      <section className="dashboard-panel full-map-panel">

        <div className="panel-header">

          <div>
            <h2>City Bin Network</h2>

            <p>
              Click any bin marker to view detailed information.
            </p>
          </div>


          <button className="refresh-map-btn">
            <RefreshCw size={15} />
            Refresh Data
          </button>

        </div>


        <div className="full-map-wrapper">

          <BinMap
            bins={bins}
            onBinClick={setSelectedBin}
          />

        </div>

      </section>


      {/* Bin Status List */}
      <section className="dashboard-panel map-bin-list">

        <div className="panel-header">

          <div>
            <h2>Monitored Bins</h2>

            <p>
              Current fill-level status of all connected containers.
            </p>
          </div>

        </div>


        <div className="map-bin-grid">

          {bins.map((bin) => (

            <button
              className="map-bin-card"
              key={bin.id}
              onClick={() => setSelectedBin(bin)}
            >

              <div className="map-bin-card-top">

                <div
                  className={`map-bin-status-dot ${bin.status}`}
                />

                <strong>
                  {bin.id}
                </strong>

                <span>
                  {bin.fillLevel}%
                </span>

              </div>


              <p>
                {bin.location}
              </p>


              <div className="map-bin-progress">

                <div
                  className={`map-bin-progress-fill ${bin.status}`}
                  style={{
                    width: `${bin.fillLevel}%`,
                  }}
                />

              </div>

            </button>

          ))}

        </div>

      </section>


      {/* Selected Bin Details */}
      {selectedBin && (

        <div
          className="map-details-panel"
          onClick={() => setSelectedBin(null)}
        >

          <div
            className="map-details-card"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="map-details-header">

              <div>

                <span className="eyebrow">
                  BIN DETAILS
                </span>

                <h2>
                  {selectedBin.id}
                </h2>

              </div>

              <button
                onClick={() => setSelectedBin(null)}
              >
                ×
              </button>

            </div>


            <div className="map-detail-location">

              <MapPin size={16} />

              {selectedBin.location}

            </div>


            <div className="map-detail-fill">

              <div>
                <span>Current Fill Level</span>

                <strong>
                  {selectedBin.fillLevel}%
                </strong>
              </div>


              <div className="map-detail-progress">

                <div
                  className={`map-detail-progress-fill ${selectedBin.status}`}
                  style={{
                    width: `${selectedBin.fillLevel}%`,
                  }}
                />

              </div>

            </div>


            <div className="map-detail-grid">

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
                <strong>{selectedBin.lastUpdated}</strong>
              </div>

              <div>
                <span>Coordinates</span>
                <strong>
                  {selectedBin.latitude.toFixed(4)},
                  {" "}
                  {selectedBin.longitude.toFixed(4)}
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

export default Map;