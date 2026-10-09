import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Recycle,
  Trash2,
  Truck,
  Leaf,
  MapPin,
  Lightbulb,
  Activity,
} from "lucide-react";

function Analytics() {
  const weeklyWaste = [
    { day: "Mon", value: 1680 },
    { day: "Tue", value: 1820 },
    { day: "Wed", value: 1740 },
    { day: "Thu", value: 1960 },
    { day: "Fri", value: 2110 },
    { day: "Sat", value: 2380 },
    { day: "Sun", value: 790 },
  ];

  const wasteTypes = [
    { name: "Wet Waste", value: 42, className: "wet" },
    { name: "Dry Waste", value: 31, className: "dry" },
    { name: "Recyclable", value: 19, className: "recyclable" },
    { name: "Hazardous", value: 8, className: "hazardous" },
  ];

  const areas = [
    {
      name: "Jayanagar",
      collection: 96,
      segregation: 95,
      efficiency: 97,
    },
    {
      name: "Koramangala",
      collection: 94,
      segregation: 91,
      efficiency: 96,
    },
    {
      name: "Indiranagar",
      collection: 89,
      segregation: 84,
      efficiency: 91,
    },
    {
      name: "Whitefield",
      collection: 81,
      segregation: 72,
      efficiency: 78,
    },
  ];

  return (
    <div className="analytics-page">

      {/* Header */}
      <div className="analytics-header">
        <div>
          <div className="analytics-eyebrow">
            <BarChart3 size={14} />
            WASTE INTELLIGENCE
          </div>

          <h1>Analytics</h1>

          <p>
            Data-driven insights for smarter waste management decisions.
          </p>
        </div>

        <div className="analytics-live">
          <span></span>
          Live Data
        </div>
      </div>

      {/* KPI Cards */}
      <div className="analytics-kpis">

        <div className="analytics-kpi">
          <div className="kpi-top">
            <div className="kpi-icon waste">
              <Trash2 size={20} />
            </div>

            <span className="positive">
              <TrendingUp size={12} />
              8.4%
            </span>
          </div>

          <strong>12,480 kg</strong>
          <span>Total Waste Collected</span>
          <small>vs previous week</small>
        </div>

        <div className="analytics-kpi">
          <div className="kpi-top">
            <div className="kpi-icon recycle">
              <Recycle size={20} />
            </div>

            <span className="positive">
              <TrendingUp size={12} />
              6.2%
            </span>
          </div>

          <strong>68.7%</strong>
          <span>Recycling Rate</span>
          <small>of collected waste</small>
        </div>

        <div className="analytics-kpi">
          <div className="kpi-top">
            <div className="kpi-icon truck">
              <Truck size={20} />
            </div>

            <span className="positive">
              <TrendingUp size={12} />
              11%
            </span>
          </div>

          <strong>1,248</strong>
          <span>Collections Completed</span>
          <small>this month</small>
        </div>

        <div className="analytics-kpi">
          <div className="kpi-top">
            <div className="kpi-icon co2">
              <Leaf size={20} />
            </div>

            <span className="positive">
              <TrendingDown size={12} />
              14%
            </span>
          </div>

          <strong>2.8 tons</strong>
          <span>Estimated CO₂ Saved</span>
          <small>through route optimization</small>
        </div>

      </div>

      {/* Charts Row */}
      <div className="analytics-chart-grid">

        {/* Waste Trend */}
        <div className="analytics-panel waste-trend">

          <div className="analytics-panel-header">
            <div>
              <h2>Waste Collection Trend</h2>
              <p>Collected waste over the last 7 days</p>
            </div>

            <div className="chart-total">
              <strong>12.48K</strong>
              <span>kg total</span>
            </div>
          </div>

          <div className="bar-chart">

            {weeklyWaste.map((item) => {
              const height = (item.value / 2500) * 100;

              return (
                <div className="bar-column" key={item.day}>

                  <div className="bar-value">
                    {item.value}
                  </div>

                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>

                  <span>{item.day}</span>

                </div>
              );
            })}

          </div>

        </div>

        {/* Waste Composition */}
        <div className="analytics-panel">

          <div className="analytics-panel-header">
            <div>
              <h2>Waste Composition</h2>
              <p>Current waste category distribution</p>
            </div>
          </div>

          <div className="composition-list">

            {wasteTypes.map((type) => (
              <div className="composition-item" key={type.name}>

                <div className="composition-label">
                  <span className={`composition-dot ${type.className}`}></span>
                  <span>{type.name}</span>
                  <strong>{type.value}%</strong>
                </div>

                <div className="composition-progress">
                  <div
                    className={`composition-fill ${type.className}`}
                    style={{ width: `${type.value}%` }}
                  ></div>
                </div>

              </div>
            ))}

          </div>

          <div className="composition-footer">
            <Recycle size={17} />
            <span>
              <strong>68.7%</strong> of waste is recoverable or recyclable.
            </span>
          </div>

        </div>

      </div>

      {/* Area Performance */}
      <div className="analytics-panel area-panel">

        <div className="analytics-panel-header">
          <div>
            <h2>Area Performance</h2>
            <p>Waste management performance by zone</p>
          </div>

          <Activity size={19} />
        </div>

        <div className="area-table">

          <div className="area-table-head">
            <span>Area</span>
            <span>Collection</span>
            <span>Segregation</span>
            <span>Efficiency</span>
          </div>

          {areas.map((area) => (
            <div className="area-row" key={area.name}>

              <div className="area-name">
                <MapPin size={15} />
                <strong>{area.name}</strong>
              </div>

              <div className="metric">
                <div className="metric-value">
                  <span>{area.collection}%</span>
                </div>

                <div className="metric-bar">
                  <div
                    style={{ width: `${area.collection}%` }}
                  ></div>
                </div>
              </div>

              <div className="metric">
                <div className="metric-value">
                  <span>{area.segregation}%</span>
                </div>

                <div className="metric-bar">
                  <div
                    style={{ width: `${area.segregation}%` }}
                  ></div>
                </div>
              </div>

              <div className="efficiency-score">
                <strong>{area.efficiency}</strong>
                <span>/100</span>
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Insights */}
      <div className="analytics-insights">

        <div className="analytics-panel insights-panel">

          <div className="analytics-panel-header">
            <div>
              <h2>Automated Insights</h2>
              <p>Patterns detected from waste data</p>
            </div>

            <div className="insight-icon">
              <Lightbulb size={18} />
            </div>
          </div>

          <div className="insight-grid">

            <div className="insight-card">
              <span className="insight-number">01</span>

              <div>
                <strong>Weekend waste spike</strong>
                <p>
                  Waste generation increases significantly toward
                  the weekend. Additional collection capacity may
                  be required.
                </p>
              </div>
            </div>

            <div className="insight-card">
              <span className="insight-number">02</span>

              <div>
                <strong>Jayanagar leads performance</strong>
                <p>
                  Jayanagar currently has the highest collection
                  efficiency and segregation score.
                </p>
              </div>
            </div>

            <div className="insight-card warning">
              <span className="insight-number">03</span>

              <div>
                <strong>Whitefield needs attention</strong>
                <p>
                  Lower segregation and collection efficiency
                  indicate an opportunity for route optimization.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Prototype Notice */}
      <div className="analytics-prototype">
        <BarChart3 size={17} />

        <div>
          <strong>Analytics Prototype</strong>

          <p>
            Metrics shown are simulated demonstration data.
            In production, these insights would be generated from
            historical IoT readings, collection records, citizen
            reports and AI classification results.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Analytics;