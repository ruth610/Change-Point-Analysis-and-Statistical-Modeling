import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

function Dashboard() {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStartDate, setFilterStartDate] = useState('2010-01-01');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [priceRes, eventsRes] = await Promise.all([
          axios.get(`http://localhost:5000/api/data?start_date=${filterStartDate}`),
          axios.get('http://localhost:5000/api/events')
        ]);
        setData(priceRes.data);
        setEvents(eventsRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [filterStartDate]);

  const handleDateChange = (e) => {
    setFilterStartDate(e.target.value);
  };

  if (loading) return <div>Loading data...</div>;

  return (
    <div className="dashboard">
      <div className="controls" style={{ marginBottom: '20px', padding: '10px', background: 'white', borderRadius: '8px' }}>
        <label>Filter Start Date: </label>
        <input
          type="date"
          value={filterStartDate}
          onChange={handleDateChange}
        />
      </div>

      <div className="chart-container" style={{ height: '500px', background: 'white', padding: '20px', borderRadius: '8px' }}>
        <h3>Brent Oil Prices & Key Events</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis label={{ value: 'Price (USD)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Price" stroke="#8884d8" dot={false} strokeWidth={2} />

            {/* Overlay Events as Reference Lines */}
            {events.map((event, index) => {
               // Only show events that are within the current date range if possible
               // Recharts ReferenceLine usually handles being out of domain gracefully
               return (
                 <ReferenceLine
                    key={index}
                    x={event.Date}
                    stroke="red"
                    label={{ value: event.Event, position: 'top', fill: 'red', fontSize: 10 }}
                    strokeDasharray="3 3"
                 />
               );
            })}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="events-list" style={{ marginTop: '20px' }}>
        <h3>Key Events</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {events.map((evt, idx) => (
             <li key={idx} style={{ background: 'white', margin: '5px 0', padding: '10px', borderRadius: '4px' }}>
               <strong>{evt.Date}:</strong> {evt.Event} - {evt.Description} ({evt.Type})
             </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
