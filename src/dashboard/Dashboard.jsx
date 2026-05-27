import "./Dashboard.css";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line
} from "recharts";

const operationalData = [
  { day: "Mon", alerts: 5 },
  { day: "Tue", alerts: 8 },
  { day: "Wed", alerts: 13 },
  { day: "Thu", alerts: 10 },
  { day: "Fri", alerts: 7 },
  { day: "Sat", alerts: 9 },
  { day: "Sun", alerts: 11 }
];

const telemetryData = [
  { time: "10AM", cpu: 32 },
  { time: "11AM", cpu: 45 },
  { time: "12PM", cpu: 61 },
  { time: "1PM", cpu: 75 },
  { time: "2PM", cpu: 54 },
  { time: "3PM", cpu: 67 },
  { time: "4PM", cpu: 48 }
];

function Dashboard() {

  return (

    <div className="dashboard">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <header className="header">

        <div>

          <h1>
            UCCIS Governance Command Center
          </h1>

          <p>
            Unified Command & Control Intelligence System
          </p>

        </div>

        <div className="system-status">

          <div className="pulse"></div>

          SYSTEM OPERATIONAL

        </div>

      </header>

      {/* ================================================= */}
      {/* STATUS CARDS */}
      {/* ================================================= */}

      <section className="status-grid">

        <div className="status-card">

          <h3>Critical Alerts</h3>

          <h1>12</h1>

          <span>
            ↑ 20% from yesterday
          </span>

        </div>

        <div className="status-card">

          <h3>Operators Active</h3>

          <h1>45</h1>

          <span>
            ↑ 12% from yesterday
          </span>

        </div>

        <div className="status-card">

          <h3>Escalation Level</h3>

          <h1 className="danger">
            HIGH
          </h1>

          <span>
            Active in 3 Districts
          </span>

        </div>

        <div className="status-card">

          <h3>System Health</h3>

          <h1 className="green">
            98%
          </h1>

          <span>
            All systems operational
          </span>

        </div>

      </section>

      {/* ================================================= */}
      {/* MAIN GRID */}
      {/* ================================================= */}

      <section className="chart-grid">

        {/* ================================================= */}
        {/* OPERATIONAL TREND */}
        {/* ================================================= */}

        <div className="panel large-panel">

          <div className="panel-header">

            <h2>
              Operational Trend
            </h2>

            <span>
              Last 7 Days
            </span>

          </div>

          <ResponsiveContainer width="100%" height={330}>

            <BarChart data={operationalData}>

              <CartesianGrid
                stroke="#1e293b"
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="day"
                stroke="#94a3b8"
              />

              <YAxis
                stroke="#94a3b8"
              />

              <Tooltip />

              <Bar
                dataKey="alerts"
                fill="#38bdf8"
                radius={[10, 10, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* ================================================= */}
        {/* TELEMETRY */}
        {/* ================================================= */}

        <div className="panel">

          <div className="panel-header">

            <h2>
              Live Telemetry
            </h2>

            <span>
              CPU Monitoring
            </span>

          </div>

          <ResponsiveContainer width="100%" height={300}>

            <LineChart data={telemetryData}>

              <CartesianGrid stroke="#1e293b" />

              <XAxis
                dataKey="time"
                stroke="#94a3b8"
              />

              <YAxis
                stroke="#94a3b8"
              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="cpu"
                stroke="#22c55e"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </section>

      {/* ================================================= */}
      {/* LOWER GRID */}
      {/* ================================================= */}

      <section className="lower-grid">

        {/* ================================================= */}
        {/* ESCALATION HEATMAP */}
        {/* ================================================= */}

        <div className="panel heatmap-panel">

          <div className="panel-header">

            <h2>
              Escalation Heatmap
            </h2>

            <span>
              Live District Activity
            </span>

          </div>

          <div className="modern-heatmap">

            <div className="heat-cell critical">
              <span>Pune</span>
            </div>

            <div className="heat-cell warning">
              <span>Mumbai</span>
            </div>

            <div className="heat-cell normal">
              <span>Nashik</span>
            </div>

            <div className="heat-cell warning">
              <span>Nagpur</span>
            </div>

            <div className="heat-cell critical">
              <span>Thane</span>
            </div>

            <div className="heat-cell normal">
              <span>Satara</span>
            </div>

            <div className="heat-cell normal">
              <span>Kolhapur</span>
            </div>

            <div className="heat-cell warning">
              <span>Aurangabad</span>
            </div>

            <div className="heat-cell critical">
              <span>Solapur</span>
            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* DEPARTMENT PERFORMANCE */}
        {/* ================================================= */}

        <div className="panel">

          <div className="panel-header">

            <h2>
              Department Performance
            </h2>

          </div>

          <table>

            <thead>

              <tr>

                <th>Department</th>
                <th>Status</th>
                <th>Load</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Police</td>

                <td className="green">
                  ACTIVE
                </td>

                <td>76%</td>

              </tr>

              <tr>

                <td>Medical</td>

                <td className="orange">
                  HIGH LOAD
                </td>

                <td>89%</td>

              </tr>

              <tr>

                <td>Fire</td>

                <td className="green">
                  STABLE
                </td>

                <td>52%</td>

              </tr>

              <tr>

                <td>Cyber</td>

                <td className="danger">
                  CRITICAL
                </td>

                <td>96%</td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* ================================================= */}
      {/* ALERT FEED */}
      {/* ================================================= */}

      <section className="panel alert-panel">

        <div className="panel-header">

          <h2>
            Live Alert Feed
          </h2>

          <span className="green">
            ● LIVE
          </span>

        </div>

        <div className="alert-feed">

          <div className="alert-card">

            <div>

              <h4>
                Flood Risk Detected
              </h4>

              <p>
                Pune District, Maharashtra
              </p>

            </div>

            <span className="alert-badge critical">
              HIGH
            </span>

          </div>

          <div className="alert-card">

            <div>

              <h4>
                Fire Incident Reported
              </h4>

              <p>
                Nagpur District, Maharashtra
              </p>

            </div>

            <span className="alert-badge warning">
              MEDIUM
            </span>

          </div>

          <div className="alert-card">

            <div>

              <h4>
                Medical Emergency
              </h4>

              <p>
                Mumbai District, Maharashtra
              </p>

            </div>

            <span className="alert-badge success">
              LOW
            </span>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* REPLAY TIMELINE */}
      {/* ================================================= */}

      <section className="panel timeline-panel">

        <div className="panel-header">

          <h2>
            Operational Replay Timeline
          </h2>

        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="dot"></div>

            <div>

              <h4>
                10:00 AM
              </h4>

              <p>
                Escalation Triggered
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="dot"></div>

            <div>

              <h4>
                10:15 AM
              </h4>

              <p>
                Emergency Response Activated
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="dot"></div>

            <div>

              <h4>
                10:45 AM
              </h4>

              <p>
                Incident Contained
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* SYSTEM HEALTH */}
      {/* ================================================= */}

      <section className="panel system-health-panel">

        <div className="panel-header">

          <h2>
            System Health Overview
          </h2>

          <span className="green">
            ● HEALTHY
          </span>

        </div>

        <div className="health-content">

          <div className="health-services">

            <div className="health-row">

              <span>
                Backend Services
              </span>

              <span className="green">
                Operational
              </span>

            </div>

            <div className="health-row">

              <span>
                Database
              </span>

              <span className="green">
                Operational
              </span>

            </div>

            <div className="health-row">

              <span>
                APIs
              </span>

              <span className="green">
                Operational
              </span>

            </div>

            <div className="health-row">

              <span>
                WebSocket
              </span>

              <span className="green">
                Operational
              </span>

            </div>

          </div>

          <div className="health-score-wrapper">

            <div className="health-ring">

              <div className="health-inner">

                <h1>
                  98%
                </h1>

                <p>
                  Healthy
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <footer className="footer">

        <p>
          UCCIS • Unified Governance Intelligence Layer
        </p>

      </footer>

    </div>

  );
}

export default Dashboard;