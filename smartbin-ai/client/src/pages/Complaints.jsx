import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  MapPin,
  Camera,
  Search,
  Filter,
  MessageSquareWarning,
} from "lucide-react";

function Complaints() {
  const complaints = [
    {
      id: "CMP-1024",
      issue: "Overflowing Bin",
      location: "Indiranagar 12th Main",
      reported: "8 min ago",
      priority: "Critical",
      status: "Pending",
    },
    {
      id: "CMP-1023",
      issue: "Uncollected Waste",
      location: "Koramangala 5th Block",
      reported: "24 min ago",
      priority: "High",
      status: "In Progress",
    },
    {
      id: "CMP-1022",
      issue: "Poor Waste Segregation",
      location: "Jayanagar 4th Block",
      reported: "1 hr ago",
      priority: "Medium",
      status: "Resolved",
    },
    {
      id: "CMP-1021",
      issue: "Damaged Bin",
      location: "Whitefield Main Road",
      reported: "2 hrs ago",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: "CMP-1020",
      issue: "Overflowing Bin",
      location: "HSR Layout Sector 2",
      reported: "3 hrs ago",
      priority: "High",
      status: "Resolved",
    },
  ];

  return (
    <div className="complaints-page">

      {/* Page Header */}
      <header className="page-header">
        <div>
          <div className="eyebrow">
            <MessageSquareWarning size={14} />
            CITIZEN SERVICES
          </div>

          <h1>Complaints</h1>

          <p>
            Monitor and respond to citizen waste management reports.
          </p>
        </div>

        <button className="new-report-btn">
          <Camera size={16} />
          New Report
        </button>
      </header>


      {/* Complaint Statistics */}
      <section className="complaint-stats">

        <div className="complaint-stat-card">
          <div className="complaint-stat-icon critical">
            <AlertTriangle size={19} />
          </div>

          <div>
            <span>Pending Reports</span>
            <strong>12</strong>
          </div>
        </div>


        <div className="complaint-stat-card">
          <div className="complaint-stat-icon progress">
            <Clock size={19} />
          </div>

          <div>
            <span>In Progress</span>
            <strong>8</strong>
          </div>
        </div>


        <div className="complaint-stat-card">
          <div className="complaint-stat-icon resolved">
            <CheckCircle2 size={19} />
          </div>

          <div>
            <span>Resolved</span>
            <strong>47</strong>
          </div>
        </div>


        <div className="complaint-stat-card">
          <div className="complaint-stat-icon response">
            <Clock size={19} />
          </div>

          <div>
            <span>Avg. Response Time</span>
            <strong>18 min</strong>
          </div>
        </div>

      </section>


      {/* Main Complaint Panel */}
      <section className="dashboard-panel complaints-panel">

        <div className="panel-header">
          <div>
            <h2>Citizen Reports</h2>

            <p>
              Recent complaints submitted by citizens
            </p>
          </div>

          <div className="complaint-actions">

            <div className="complaint-search">
              <Search size={16} />

              <input
                type="text"
                placeholder="Search reports..."
              />
            </div>

            <button className="filter-btn">
              <Filter size={15} />
              Filter
            </button>

          </div>
        </div>


        {/* Complaint Table */}
        <div className="complaints-table">

          <div className="complaint-row complaint-heading">
            <span>Report</span>
            <span>Location</span>
            <span>Priority</span>
            <span>Status</span>
            <span>Reported</span>
          </div>


          {complaints.map((complaint) => (

            <div
              className="complaint-row"
              key={complaint.id}
            >

              <div className="complaint-info">
                <strong>
                  {complaint.issue}
                </strong>

                <span>
                  {complaint.id}
                </span>
              </div>


              <div className="complaint-location">
                <MapPin size={14} />
                {complaint.location}
              </div>


              <div>
                <span
                  className={`priority-badge ${complaint.priority
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {complaint.priority}
                </span>
              </div>


              <div>
                <span
                  className={`complaint-status ${complaint.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {complaint.status}
                </span>
              </div>


              <span className="complaint-time">
                {complaint.reported}
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* Citizen Reporting Workflow */}
      <section className="dashboard-panel reporting-panel">

        <div className="panel-header">

          <div>
            <h2>Citizen Reporting</h2>

            <p>
              How citizens can report waste-related issues
            </p>
          </div>

          <span className="ai-badge">
            SMART REPORTING
          </span>

        </div>


        <div className="reporting-steps">

          <div className="report-step">

            <div className="step-number">
              01
            </div>

            <div className="step-icon">
              <Camera size={19} />
            </div>

            <strong>
              Capture
            </strong>

            <p>
              Citizen uploads a photo of the waste issue.
            </p>

          </div>


          <div className="report-step">

            <div className="step-number">
              02
            </div>

            <div className="step-icon">
              <MapPin size={19} />
            </div>

            <strong>
              Locate
            </strong>

            <p>
              Location is attached automatically to the report.
            </p>

          </div>


          <div className="report-step">

            <div className="step-number">
              03
            </div>

            <div className="step-icon">
              <AlertTriangle size={19} />
            </div>

            <strong>
              Prioritize
            </strong>

            <p>
              The system assigns priority based on the issue.
            </p>

          </div>


          <div className="report-step">

            <div className="step-number">
              04
            </div>

            <div className="step-icon">
              <CheckCircle2 size={19} />
            </div>

            <strong>
              Resolve
            </strong>

            <p>
              Municipal staff respond and close the complaint.
            </p>

          </div>

        </div>

      </section>


      {/* AI Insight */}
      <section className="dashboard-panel complaint-insight">

        <div className="insight-content">

          <div className="insight-ai-icon">
            AI
          </div>

          <div>

            <span className="insight-label">
              AI-POWERED INSIGHT
            </span>

            <h3>
              Overflowing bins are the most reported issue
            </h3>

            <p>
              41% of recent citizen reports are related to
              overflowing waste bins. Prioritizing these areas
              could significantly improve response efficiency.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Complaints;

