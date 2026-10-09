import {
  Trash2,
  AlertTriangle,
  Bell,
  Recycle,
  Truck,
  Leaf,
} from "lucide-react";

const icons = {
  bins: Trash2,
  full: AlertTriangle,
  alerts: Bell,
  clean: Recycle,
  collections: Truck,
  co2: Leaf,
};

function StatCard({
  title,
  value,
  description,
  type,
}) {
  const Icon = icons[type];

  return (
    <div className="stat-card">

      <div className="stat-card-top">
        <div className={`stat-icon ${type}`}>
          <Icon size={20} />
        </div>

        <span className="stat-status">
          Live
        </span>
      </div>

      <div className="stat-value">
        {value}
      </div>

      <div className="stat-title">
        {title}
      </div>

      <div className="stat-description">
        {description}
      </div>

    </div>
  );
}

export default StatCard;