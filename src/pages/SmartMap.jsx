import "../utils/fixLeafletIcon";
import BackButton from "../components/BackButton";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { getComplaints } from "../services/complaintService";

function SmartMap() {
  const complaints = getComplaints();

  return (
    <div className="min-h-screen bg-[#050B1D] pt-32 px-8">

      <div className="max-w-7xl mx-auto">
        <BackButton />

        <h1 className="text-5xl font-bold text-white mb-8">
          Civic Smart Map
        </h1>

        <div className="rounded-3xl overflow-hidden border border-cyan-500/20">

          <MapContainer
            center={[25.4358, 81.8463]}
            zoom={15}
            style={{
              height: "700px",
              width: "100%",
            }}
          >

            <TileLayer
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {complaints.map((item, index) => (
              <Marker
                key={item.id}
                position={[
                  25.4358 + index * 0.002,
                  81.8463 + index * 0.002,
                ]}
              >
                <Popup>

                  <div>

                    <h3 className="font-bold">
                      {item.category}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                    <p>
                      📍 {item.location}
                    </p>

                    <p>
                      Status: {item.status}
                    </p>

                  </div>

                </Popup>
              </Marker>
            ))}

          </MapContainer>

        </div>

      </div>

    </div>
  );
}

export default SmartMap;