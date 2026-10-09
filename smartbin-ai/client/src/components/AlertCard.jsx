import { AlertTriangle, ArrowRight } from "lucide-react";

function AlertCard({ bin, onClick }) {
  return (
    <div className="alert-card">

      <div className="alert-icon">
        <AlertTriangle size={18} />
      </div>

      <div className="alert-content">
        <div className="alert-header">
          <strong>Bin {bin.id}</strong>

          <span className="critical-badge">
            CRITICAL
          </span>
        </div>

        <p>{bin.location}</p>

        <div className="alert-fill">
          <span>Fill level</span>
          <strong>{bin.fillLevel}%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill critical"
            style={{
              width: `${bin.fillLevel}%`,
            }}
          />
        </div>
      </div>

      <button
        className="alert-arrow"
        onClick={() => onClick(bin)}
      >
        <ArrowRight size={17} />
      </button>

    </div>
  );
}

export default AlertCard;