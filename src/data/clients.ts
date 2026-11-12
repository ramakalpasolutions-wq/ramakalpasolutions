/**
 * Client logos shown in the "Trusted by" strip.
 * Put each logo in /public/clients/ with the file name below (PNG or SVG with a
 * transparent background; full-colour logos work, tiles are light).
 * Until a file exists, the client's name is shown as text instead.
 */
/** `darkTile`: show on a dark tile, for logos with white or light lettering. */
export type Client = { name: string; logo: string; darkTile?: boolean };

export const clients: Client[] = [
  { name: "MEDLI", logo: "/clients/medli.png" },
  { name: "SUSALI Healthcare", logo: "/clients/susali.png" },
  { name: "Arunas Baby World", logo: "/clients/arunasbabyworld.png" },
  { name: "Vijaya Varsha Events", logo: "/clients/vijaya-varsha-events.png" },
  { name: "The Bharatheeya Seva Welfare Society", logo: "/clients/bharatheeya.png" },
  { name: "DeepCode Labs", logo: "/clients/deepcode-labs.png" },
  { name: "Automotive Car Care", logo: "/clients/automotive.png", darkTile: true },
  { name: "AR", logo: "/clients/ar.png" },
  { name: "LDCE Warriors", logo: "/clients/ldce-warriors.png" },
  { name: "PD Events", logo: "/clients/pd-events.png" },
  { name: "Firstlooks", logo: "/clients/firstlooks.png" },
  { name: "Versetile", logo: "/clients/versetile.png" },
  { name: "Kalakruthi", logo: "/clients/kalakruthi.png" },
  { name: "Sri Krishna Academy", logo: "/clients/srikrishna-academy.png" },
];
