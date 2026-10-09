import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

function BinMap({ bins, onBinClick }) {
  const getColor = (status) => {
    if (status === "critical") return "#ff5c5c";
    if (status === "warning") return "#ffc857";
    return "#7cff6b";
  };

  return (
    <div className="bin-map-container">
      <MapContainer
        center={[12.9716, 77.6412]}
        zoom={11}
        scrollWheelZoom={true}
        className="live-leaflet-map"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {bins.map((bin) => (
          <CircleMarker
            key={bin.id}
            center={[bin.latitude, bin.longitude]}
            radius={9}
            pathOptions={{
              color: getColor(bin.status),
              fillColor: getColor(bin.status),
              fillOpacity: 0.9,
              weight: 2,
            }}
            eventHandlers={{
              click: () => onBinClick(bin),
            }}
          >
            <Popup>
              <div className="bin-popup">
                <strong>{bin.id}</strong>

                <p>{bin.location}</p>

                <div className="popup-row">
                  <span>Fill Level</span>
                  <strong>{bin.fillLevel}%</strong>
                </div>

                <div className="popup-row">
                  <span>Waste Type</span>
                  <strong>{bin.type}</strong>
                </div>

                <div className="popup-row">
                  <span>Status</span>
                  <strong>{bin.status.toUpperCase()}</strong>
                </div>

                <div className="popup-row">
                  <span>Updated</span>
                  <strong>{bin.lastUpdated}</strong>
                </div>

                <button
                  className="popup-details-btn"
                  onClick={() => onBinClick(bin)}
                >
                  View Details
                </button>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      <div className="map-overlay">
        <div>
          <span className="legend-dot normal" />
          Normal
        </div>

        <div>
          <span className="legend-dot warning" />
          Warning
        </div>

        <div>
          <span className="legend-dot critical" />
          Critical
        </div>
      </div>
    </div>
  );
}

export default BinMap;