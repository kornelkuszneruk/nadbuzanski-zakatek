"use client";

import { useEffect, useState } from "react";

const markers = [
  { lat: 51.3196, lng: 23.5985, label: "Nadbużański Zakątek", emoji: "🏡" },
  { lat: 51.323,  lng: 23.596,  label: "Kąpielisko Pompka",   emoji: "🏊" },
  { lat: 51.325,  lng: 23.603,  label: "Rzeka Bug",            emoji: "🌊" },
  { lat: 51.330,  lng: 23.590,  label: "Green Velo",           emoji: "🚲" },
  { lat: 51.330,  lng: 23.598,  label: "Spływy kajakowe",      emoji: "🛶" },
  { lat: 51.468,  lng: 23.537,  label: "Jezioro Białe",        emoji: "🏖️" },
  { lat: 51.460,  lng: 23.590,  label: "Sobiborski Park",      emoji: "🌿" },
  { lat: 51.450,  lng: 23.580,  label: "Rezerwat Żółwiowych Błot", emoji: "🐢" },
];

export default function SurroundingsMap() {
  const [MapComponents, setMapComponents] = useState<null | {
    MapContainer: typeof import("react-leaflet")["MapContainer"];
    TileLayer: typeof import("react-leaflet")["TileLayer"];
    Marker: typeof import("react-leaflet")["Marker"];
    Popup: typeof import("react-leaflet")["Popup"];
    L: typeof import("leaflet");
  }>(null);

  useEffect(() => {
    Promise.all([import("react-leaflet"), import("leaflet"), import("leaflet/dist/leaflet.css" as string)]).then(
      ([rl, L]) => {
        // Fix default marker icons
        delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        });
        setMapComponents({ ...rl, L });
      }
    );
  }, []);

  if (!MapComponents) {
    return (
      <div className="h-[420px] rounded-3xl bg-forest/20 border border-cream/10 flex items-center justify-center">
        <p className="text-cream/40 text-sm">Ładowanie mapy…</p>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, L } = MapComponents;

  const createIcon = (emoji: string) =>
    L.divIcon({
      html: `<div style="font-size:22px;line-height:1;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.5))">${emoji}</div>`,
      className: "",
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -16],
    });

  return (
    <div className="rounded-3xl overflow-hidden border border-cream/10 shadow-xl" style={{ height: 420 }}>
      <MapContainer
        center={[51.38, 23.565]}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((m) => (
          <Marker key={m.label} position={[m.lat, m.lng]} icon={createIcon(m.emoji)}>
            <Popup>
              <span className="font-medium text-sm">{m.emoji} {m.label}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
