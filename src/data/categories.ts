import { Sun, Lightbulb, Zap, AlertCircle } from 'lucide-react';

export const categories = [
  {
    id: 'solar',
    title: 'Solar',
    description: 'Solar energy solutions',
    icon: Sun,
    subcategories: [
      {
        id: 'lithium-batteries',
        name: 'Lithium Batteries',
        image: 'https://images.pexels.com/photos/7656746/pexels-photo-7656746.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'High-performance lithium solar batteries',
      },
      {
        id: 'lead-acid-batteries',
        name: 'Lead Acid Batteries',
        image: 'https://images.pexels.com/photos/8960462/pexels-photo-8960462.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Reliable lead acid battery solutions',
      },
      {
        id: 'solar-panels',
        name: 'Solar Panels',
        image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Efficient solar panel systems',
      },
      {
        id: 'inverters',
        name: 'Inverters',
        image: 'https://images.pexels.com/photos/27633301/pexels-photo-27633301.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Power inverters for solar systems',
      },
    ],
  },

  {
    id: 'lighting',
    title: 'Lighting',
    description: 'Professional lighting solutions',
    icon: Lightbulb,
    subcategories: [
      { id: 'pendants-1', name: 'Pendants', image: '/Screenshot_20251112-161322.jpg', description: 'Stylish pendant lights' },
      { id: 'pendants-2', name: 'Pendants', image: '/Screenshot_20251112-161739.jpg', description: 'Stylish pendant lights' },
      { id: 'pendants-3', name: 'Pendants', image: '/Screenshot_20251112-161943.jpg', description: 'Stylish pendant lights' },

      { id: 'camera-stands', name: 'Camera Stands', image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Professional camera lighting stands' },

      { id: 'connectors-1', name: 'Connectors', image: '/Screenshot_20251113-080020.jpg', description: 'Quality electrical connectors' },
      { id: 'connectors-2', name: 'Connectors', image: '/Screenshot_20251113-075907.jpg', description: 'Quality electrical connectors' },
      { id: 'connectors-3', name: 'Connectors', image: '/Screenshot_20251113-080031.jpg', description: 'Quality electrical connectors' },
      { id: 'connectors-4', name: 'Connectors', image: '/Screenshot_20251113-104502.jpg', description: 'Quality electrical connectors' },
      { id: 'connectors-5', name: 'Connectors', image: '/Screenshot_20251113-104548.jpg', description: 'Quality electrical connectors' },
      { id: 'connectors-6', name: 'Connectors', image: '/Screenshot_20251113-104554.jpg', description: 'Quality electrical connectors' },
      { id: 'connectors-7', name: 'Connectors', image: '/Screenshot_20251113-104639.jpg', description: 'Quality electrical connectors' },

      { id: 'chandeliers', name: 'Chandeliers', image: 'https://images.pexels.com/photos/1654459/pexels-photo-1654459.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Elegant chandelier designs' },
    ],
  },
  {
    id: 'leds',
    title: 'LEDs',
    description: 'Advanced LED systems',
    icon: Zap,
    subcategories: [
      { id: 'power-supply-1', name: 'Power Supply', image: '/Screenshot_20251112-161337.jpg', description: 'LED power supply units' },
      { id: 'power-supply-2', name: 'Power Supply', image: '/Screenshot_20251112-161615.jpg', description: 'LED power supply units' },
      { id: 'power-supply-3', name: 'Power Supply', image: '/Screenshot_20251112-161758.jpg', description: 'LED power supply units' },
      { id: 'power-supply-4', name: 'Power Supply', image: '/Screenshot_20251112-161824.jpg', description: 'LED power supply units' },
      { id: 'power-supply-5', name: 'Power Supply', image: '/Screenshot_20251112-161917.jpg', description: 'LED power supply units' },
      { id: 'power-supply-6', name: 'Power Supply', image: '/Screenshot_20251112-161953.jpg', description: 'LED power supply units' },
      { id: 'power-supply-7', name: 'Power Supply', image: '/Screenshot_20251113-113452.jpg', description: 'LED power supply units' },

      { id: 'channels', name: 'Channels', image: '/Screenshot_20251113-075907.jpg', description: 'LED mounting channels' },

      { id: 'strips-1', name: 'Strips', image: '/Screenshot_20251113-113459.jpg', description: 'Flexible LED strip lights' },
      { id: 'strips-2', name: 'Strips', image: '/Screenshot_20251113-113452.jpg', description: 'Flexible LED strip lights' },
      { id: 'strips-3', name: 'Strips', image: '/Screenshot_20251113-130630.jpg', description: 'Flexible LED strip lights' },
      { id: 'strips-4', name: 'Strips', image: '/Screenshot_20251113-130637.jpg', description: 'Flexible LED strip lights' },
      { id: 'strips-5', name: 'Strips', image: '/Screenshot_20251113-130639.jpg', description: 'Flexible LED strip lights' },
    ],
  },
  {
  id: 'emergency',
  title: 'Emergency Lights',
  description: 'Emergency lighting systems',
  icon: AlertCircle,
  subcategories: [
    { id: 'dash-1', name: 'Dash Light Bar', image: '/4LED-Car-Emergency-Flash-Lamp-Vehicles-12V-24V-Truck-Side-Lights-Truck-Strobe-LED-Flashing-Warning-Light (1).webp', description: 'Compact dashboard light bar' },
    { id: 'dash-2', name: 'Mini Dash Strobe', image: '/NSTL-LED33GREEN.jpg', description: 'High-intensity dash strobe' },
    { id: 'dash-3', name: 'Mini Dash Strobe', image: '/eac5ede971f35da078aa3590dc653124_fill.jpg', description: 'High-intensity dash strobe' },

    { id: 'grill-1', name: 'Single Grill LED', image: '/8-Piece-Grille-Mount-Emergency-Strobe-Light-Kit-White-Max-Motorsport-20456614 (1).jpg', description: 'Single LED grill light' },
    { id: 'grill-2', name: 'Dual Grill Strobe', image: '/803COB-alt.jpg', description: 'Dual strobe grill kit' },
    { id: 'grill-3', name: 'Dual Grill Strobe', image: '/71mOpdZATbL._AC_UF894,1000_QL80_ (1).jpg', description: 'Dual strobe grill kit' },
    { id: 'grill-4', name: 'Dual Grill Strobe', image: '/b86db509-e7d2-4beb-abaf-3892379cfcd7.5a6c32359cf24b6c0f38f27ca7112bd9.jpg', description: 'Dual strobe grill kit' },

    { id: 'roof-1', name: 'Roof Light Bar', image: '/12-24v 1.2m Emergency Vehicle Roof Mounted Led COB Light Amber.jpg', description: 'Full-size roof light bar' },
    { id: 'roof-4', name: 'Roof Light Bar', image: '/12-24v 1m Emergency Vehicle Roof Mounted Led COB Light Green.jpg', description: 'Slim roof-mounted light bar' },
    { id: 'roof-5', name: 'Roof Light Bar', image: '/12-24v 1m Emergency Vehicle Roof Mounted Led Light Red (1).jpg', description: 'Slim roof-mounted light bar' },
    { id: 'roof-6', name: 'Roof Light Bar', image: '/12-24v 1m Emergency Vehicle Roof Mounted Led Light White.jpeg', description: 'Slim roof-mounted light bar' },
    { id: 'roof-7', name: 'Roof Light Bar', image: '/12v-12w-3-led-x-4-dash-mount-white-bing-light-light-market-27618_500x500.png', description: 'Slim roof-mounted light bar' },
    { id: 'roof-8', name: 'Roof Light Bar', image: '/71IBU7dypwL._AC_SL1500_.jpg', description: 'Slim roof-mounted light bar' },
    { id: 'roof-9', name: 'Roof Light Bar', image: '/220526105932_60CM COB STROBE BAR 16.jpg', description: 'Slim roof-mounted light bar' },
    { id: 'roof-9', name: 'Roof Light Bar', image: '/240726032649_STROBE COB LIGHT BAR 80 100 120  (18).jpg', description: 'Slim roof-mounted light bar' },
  ],
}

];
