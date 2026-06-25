import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const markers = [
  { position: [13.0827, 80.2707], label: 'Critical', color: 'bg-red-500' },
  { position: [13.0878, 80.2785], label: 'High', color: 'bg-amber-500' },
  { position: [13.0723, 80.2608], label: 'Resolved', color: 'bg-emerald-500' },
];

const MapPage = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold">Community map</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Track hotspots and filter issues by category.</p>
        <div className="mt-6 space-y-3">
          {['Potholes', 'Garbage', 'Water Leakage', 'Streetlights', 'Road Damage'].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/60">
              <span>{item}</span>
              <span className="text-sm text-slate-500">12</span>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl dark:border-slate-800">
        <MapContainer center={[13.0827, 80.2707]} zoom={13} style={{ height: '540px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
          {markers.map((marker) => (
            <Marker key={marker.label} position={marker.position}>
              <Popup>{marker.label} issue</Popup>
            </Marker>
          ))}
        </MapContainer>
      </motion.div>
    </div>
  );
};

export default MapPage;
