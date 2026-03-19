import { Sun, Lightbulb, Zap, AlertCircle } from 'lucide-react';

export const categories = [
{
  id: 'solar',
  title: 'Solar',
  description: 'Solar energy solutions',
  icon: Sun,
  subcategories: [
    { id: 'inverters-1', name: 'Inverters', image: '/solarpictures/3KVA 3000W GROWATT 24V MPPT Hybrid inverter.png', description: '3KVA 3000W GROWATT 24V MPPT Hybrid inverter' },
    { id: 'inverters-3', name: 'Inverters', image: '/solarpictures/16KW Deye Single Phase LV Hybrid Inverter 48V.png', description: '16KW Deye Single Phase LV Hybrid Inverter 48V' },
    { id: 'inverters-4', name: 'Inverters', image: '/solarpictures/12KW Lux Power Single Phase Eco Hybrid Inverter.png', description: '12KW Lux Power Single Phase Eco Hybrid Inverter' },
    { id: 'inverters-5', name: 'Inverters', image: '/solarpictures/8KWSunsynkHybridInverter_SG05LP1EUSM2.png', description: '8KW Sunsynk Hybrid Inverter' },
    { id: 'inverters-7', name: 'Inverters', image: '/solarpictures/30KW Deye 3 Phase Hybrid Inverter HV Smart Energy Control.png', description: '30KW Deye 3 Phase Hybrid Inverter HV Smart Energy Control' },
    { id: 'inverters-8', name: 'Inverters', image: '/solarpictures/50KWDeye3PhaseHighVoltageHybridInverter.png', description: '50KW Deye 3Phase High Voltage Hybrid Inverter' },
    { id: 'inverters-9', name: 'Inverters', image: '/solarpictures/ESENER-3.6KVA-HYBRID-INVERTER-WIFIsolarstep.jpeg', description: 'ESENER 3.6 KVA Hybrid Inverter' },
    { id: 'inverters-10', name: 'Inverters', image: '/solarpictures/Essener 16.8Kwh Hybrid Inverter .jpg', description: 'Essener 16.8Kwh Hybrid Inverter' },

    { id: 'lithium-batteries-1', name: 'Lithium Batteries', image: '/solarpictures/Esener 48v 100ah Lithium battery.png', description: 'Esener 48v 100ah Lithium Battery' },
    { id: 'lithium-batteries-6', name: 'Lithium Batteries', image: '/solarpictures/24v 100ah Esener Lithium Battery.png', description: '24v 100ah Esener Lithium Battery' },
    { id: 'lithium-batteries-2', name: 'Lithium Batteries', image: '/solarpictures/ESSENER 5 12Kwh Lithium Battery .png', description: 'ESSENER 5 12Kwh Lithium Battery' },
    { id: 'lithium-batteries-3', name: 'Lithium Batteries', image: '/solarpictures/Essener lithium battery 25,6v 100ah.png', description: 'Essener lithium battery 25.6v 100ah' },
    { id: 'lithium-batteries-4', name: 'Lithium Batteries', image: '/solarpictures/S Volt 25.6v 2.7kw Lithium battery.png', description: 'S Volt 25.6v 2.7kw Lithium Battery' },
    { id: 'lithium-batteries-5', name: 'Lithium Batteries', image: '/solarpictures/24v 100ah Esener Lithium Battery.png', description: '24v 100ah Esener Lithium Battery' },
    // { id: 'lithium-batteries-5', name: 'Lithium Batteries', image: '/solarpictures/', description: 'High-performance lithium solar batteries' },

    { id: 'solar-panels-1', name: 'Solar Panels', image: '/solarpictures/JA solar 545w double glass solar panel.jpg', description: 'JA solar 545w double glass solar panel' },
    { id: 'solar-panels-2', name: 'Solar Panels', image: '/solarpictures/commercial_solar_panel_installation.svg', description: '255w Mono Crystalline Solar Panel' },
    { id: 'solar-panels-3', name: 'Solar Panels', image: '/solarpictures/605-watt-perc-monocrystalline-solar-pv-module-solar-panel.jpg', description: '605 Watt Perc Mono crystalline Solar Panel' },
    { id: 'solar-panels-4', name: 'Solar Panels', image: '/solarpictures/550w MonoCrystalline Solar Panel .jpg', description: '550w MonoCrystalline Solar Panel' },
    { id: 'solar-panels-5', name: 'Solar Panels', image: '/solarpictures/255w Mono Crystalline Solar Panelq.jpg', description: '255w Mono Crystalline Solar Panel' },
     { id: 'solar-panels-6', name: 'Solar Panels', image: '/solarpictures/Mono and Poly Crystalline Solar Panels All Sizes .jpg', description: 'Mono and Poly Crystalline Solar Panels' },

   
    // { id: 'lead-acid-batteries-1', name: 'Lead Acid Batteries', image: 'https://images.pexels.com/photos/8960462/pexels-photo-8960462.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Reliable lead acid battery solutions' },
    // { id: 'lead-acid-batteries-2', name: 'Lead Acid Batteries', image: 'https://images.pexels.com/photos/8960462/pexels-photo-8960462.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Reliable lead acid battery solutions' },
    // { id: 'lead-acid-batteries-3', name: 'Lead Acid Batteries', image: 'https://images.pexels.com/photos/8960462/pexels-photo-8960462.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Reliable lead acid battery solutions' },
    // { id: 'lead-acid-batteries-4', name: 'Lead Acid Batteries', image: 'https://images.pexels.com/photos/8960462/pexels-photo-8960462.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Reliable lead acid battery solutions' },
    // { id: 'lead-acid-batteries-5', name: 'Lead Acid Batteries', image: 'https://images.pexels.com/photos/8960462/pexels-photo-8960462.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Reliable lead acid battery solutions' },


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
      { id: 'power-supply-1', name: 'LEDs', image: '/powerSupLEDS/12v 60led 5050 Cool White Led Strip Light .jpg', description: '12v 60led 5050 Cool White Led Strip Light' },
      { id: 'power-supply-2', name: 'LEDs', image: '/powerSupLEDS/12v 60led 5050 Natural White Led Strip Light .jpg', description: '12v 60led 5050 Natural White Led Strip Light' },
      { id: 'power-supply-3', name: 'LEDs', image: '/powerSupLEDS/12v 60led 5050 Warm White Led Strip Light .jpg', description: '12v 60led 5050 Warm White Led Strip Light' },
      { id: 'power-supply-4', name: 'LEDs', image: '/powerSupLEDS/12v 120led Blue Led Strip Light.jpg', description: '12v 120led Blue Led Strip Light' },
      { id: 'power-supply-5', name: 'LEDs', image: '/powerSupLEDS/12v 120led Cool White Led Strip Light.jpg', description: '12v 120led Cool White Led Strip Light' },
      { id: 'power-supply-6', name: 'LEDs', image: '/powerSupLEDS/12v 120Led Flexible Cool White Led Strip Light  .jpg', description: '12v 120Led Flexible Cool White Led Strip Light' },
      { id: 'power-supply-7', name: 'LEDs', image: '/powerSupLEDS/12v 120led Green Led Strip Light  .jpg', description: '12v 120led Green Led Strip Light' },

      { id: 'power-supply-8', name: 'LEDs', image: '/powerSupLEDS/12v 120led Light Blue Led Strip Light  .jpg', description: '12v 120led Light Blue Led Strip Light' },
      { id: 'power-supply-9', name: 'LEDs', image: '/powerSupLEDS/12v 120led Light Red Led Strip Light  .jpg', description: '2v 120led Light Red Led Strip Light' },
      { id: 'power-supply-10', name: 'LEDs', image: '/powerSupLEDS/12v 120led Natural White Led Strip Light  .jpg', description: '12v 120led Natural White Led Strip Light' },
      { id: 'power-supply-11', name: 'LEDs', image: '/powerSupLEDS/12v 120led Orange Led Strip Light  .jpg', description: '12v 120led Orange Led Strip Light' },
      { id: 'power-supply-12', name: 'LEDs', image: '/powerSupLEDS/12v 120led Pink Led Strip Light  .jpg', description: '12v 120led Pink Led Strip Light' },
      { id: 'power-supply-13', name: 'LEDs', image: '/powerSupLEDS/12v 120led Warm White Led Strip Light  .jpg', description: '12v 120led Warm White Led Strip Light' },
      { id: 'power-supply-14', name: 'LEDs', image: '/powerSupLEDS/12v 240led Assorted Colours Led Strip Lights  .jpg', description: '12v 240led Assorted Colours Led Strip Light' },

       { id: 'power-supply-15', name: 'LEDs', image: '/powerSupLEDS/12v 240led Warm, Natural and Cool White Colours Led Strip Lights  .jpg', description: '12v 240led Warm, Natural and Cool White Colours Led Strip Light' },
       { id: 'power-supply-16', name: 'LEDs', image: '/powerSupLEDS/12v COB 8mm 320 Led Strip Light Assorted Colors .jpg', description: '12v COB 8mm 320 Led Strip Light Assorted Colors' },
       { id: 'power-supply-17', name: 'LEDs', image: '/powerSupLEDS/12v IP65 RGB Neon 8mm Led Rope Light .jpg', description: '12v IP65 RGB Neon 8mm Led Rope Light' },
       { id: 'power-supply-18', name: 'LEDs', image: '/powerSupLEDS/12v Neon 8mm Digital Addressable Flexible Led Rope Light  .jpg', description: '12v Neon 8mm Digital Addressable Flexible Led Rope Light' },
       { id: 'power-supply-19', name: 'LEDs', image: '/powerSupLEDS/24v COB 8mm 320 Cool White Led Strip Light.jpg', description: '24v COB 8mm 320 Cool White Led Strip Light' },
       { id: 'power-supply-20', name: 'LEDs', image: '/powerSupLEDS/24v COB 8mm 320 Led Warm White Strip Light.jpg', description: '24v COB 8mm 320 Led Warm White Strip Light' },
       { id: 'power-supply-21', name: 'LEDs', image: '/powerSupLEDS/24v COB 8mm 320 Warm White Led Strip Light.jpg', description: '24v COB 8mm 320 Warm White Led Strip Light' },

       { id: 'powersupply-1', name: 'Power Supply', image: '/powerSupLEDS/Slim Cage Power Supply DC 12v 100w 8.3a .jpg', description: 'Slim Cage Power Supply DC 12v 100w 8.3a' },
       { id: 'powersupply-2', name: 'Power Supply', image: '/powerSupLEDS/Slim Cage Power Supply DC 12v 300w 25a.jpg', description: 'Slim Cage Power Supply DC 12v 300w 25a' },
       { id: 'powersupply-3', name: 'Power Supply', image: '/powerSupLEDS/Slim Cage Power Supply DC 24v 4.2a 100w .jpg', description: 'Slim Cage Power Supply DC 24v 4.2a 100w' },
       { id: 'powersupply-4', name: 'Power Supply', image: '/powerSupLEDS/Slim Cage Power Supply DC 24v 12.5a 300w .jpg', description: 'Slim Cage Power Supply DC 24v 12.5a 300w' },
       { id: 'powersupply-5', name: 'Power Supply', image: '/powerSupLEDS/Slim Cage Power Supply DC 24v 16.6a 400w .jpg', description: 'Slim Cage Power Supply DC 24v 16.6a 400w' },

      { id: 'channels', name: 'Channels', image: '/powerSupLEDS/Surface Deep Channel Aluminium 3m. 17x 17mm.jpg', description: 'LED mounting channels' },
    ],
  },
  {
  id: 'emergency',
  title: 'Emergency Lights',
  description: 'Emergency lighting systems',
  icon: AlertCircle,
  subcategories: [
    { id: 'dash-1', name: 'Dash Light Bar', image: '/4LED-Car-Emergency-Flash-Lamp-Vehicles-12V-24V-Truck-Side-Lights-Truck-Strobe-LED-Flashing-Warning-Light (1).webp', description: '12V-24V 4LED-Car-Emergency-Flash-Lamp-Vehicles' },
    { id: 'dash-2', name: 'Mini Dash Strobe', image: '/NSTL-LED33GREEN.jpg', description: 'NSTL-LED GREEN High-intensity Dash Strobe' },
    { id: 'dash-3', name: 'Mini Dash Strobe', image: '/eac5ede971f35da078aa3590dc653124_fill.jpg', description: 'High-intensity dash strobe' },

    { id: 'grill-1', name: 'Single Grill LED', image: '/8-Piece-Grille-Mount-Emergency-Strobe-Light-Kit-White-Max-Motorsport-20456614 (1).jpg', description: '8-Piece-Grille-Mount-Emergency-Strobe' },
    { id: 'grill-2', name: 'Dual Grill Strobe', image: '/803COB-alt.jpg', description: '803COB Dual strobe grill kit' },
    { id: 'grill-3', name: 'Dual Grill Strobe', image: '/71mOpdZATbL._AC_UF894,1000_QL80_ (1).jpg', description: '71mOpdZATb AC Dual strobe grill kit' },
    // { id: 'grill-4', name: 'Dual Grill Strobe', image: '/b86db509-e7d2-4beb-abaf-3892379cfcd7.5a6c32359cf24b6c0f38f27ca7112bd9.jpg', description: 'Dual strobe grill kit' },

    // { id: 'roof-1', name: 'Roof Light Bar', image: '/12-24v 1.2m Emergency Vehicle Roof Mounted Led COB Light Amber.jpg', description: 'Full-size roof light bar' },
    { id: 'roof-4', name: 'Roof Light Bar', image: '/12-24v 1m Emergency Vehicle Roof Mounted Led COB Light Green.jpg', description: '12-24v 1m Emergency Vehicle Roof Mounted Led COB Light Green' },
    // { id: 'roof-5', name: 'Roof Light Bar', image: '/12-24v 1m Emergency Vehicle Roof Mounted Led Light Red (1).jpg', description: '12-24v 1m Emergency Vehicle Roof Mounted Led Light Red' },
    { id: 'roof-6', name: 'Roof Light Bar', image: '/12-24v 1m Emergency Vehicle Roof Mounted Led Light White.jpeg', description: '12-24v 1m Emergency Vehicle Roof Mounted Led Light White' },
    { id: 'roof-7', name: 'Roof Light Bar', image: '/12v-12w-3-led-x-4-dash-mount-white-bing-light-light-market-27618_500x500.png', description: '12v-12w-3-led-x-4-dash-mount-white-bing-light' },
    { id: 'roof-8', name: 'Roof Light Bar', image: '/71IBU7dypwL._AC_SL1500_.jpg', description: 'Slim roof-mounted light bar' },
    { id: 'roof-9', name: 'Roof Light Bar', image: '/220526105932_60CM COB STROBE BAR 16.jpg', description: 'Slim roof 60CM COB Strobe Bar' },
    { id: 'roof-10', name: 'Roof Light Bar', image: '/240726032649_STROBE COB LIGHT BAR 80 100 120  (18).jpg', description: ' Slim roof Strobe COB Light Bar 80 100 120' },
  ],
}

];
