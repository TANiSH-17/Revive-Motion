/**
 * Single source of truth for contact links, so a number is never
 * hard-coded (and left as a placeholder) in a component again.
 */
const enquiry = encodeURIComponent(
  "Hi, I'd like to book a physiotherapy appointment at Revive Motion."
);

export const PHONE_RAMESH_NAGAR = '918447547440';
export const PHONE_NARAINA = '918447860086';

export const WHATSAPP_PRIMARY = `https://wa.me/${PHONE_RAMESH_NAGAR}?text=${enquiry}`;
export const WHATSAPP_RAMESH_NAGAR = `https://wa.me/${PHONE_RAMESH_NAGAR}?text=${enquiry}`;
export const WHATSAPP_NARAINA = `https://wa.me/${PHONE_NARAINA}?text=${enquiry}`;

export const REVIEW_URL_RAMESH_NAGAR = 'https://g.page/r/CfpaNRIhNbtwEAE/review';
export const REVIEW_URL_NARAINA = 'https://g.page/r/CWlisPozal3KEAE/review';

export const MAPS_RAMESH_NAGAR =
  'https://www.google.com/maps/place/Revive+Motion+-+Physiotherapy+Clinic/@28.6485363,77.1307871,18z/data=!3m1!4b1!4m6!3m5!1s0x390d03926d82b5b5:0x70bb352112355afa!8m2!3d28.6485363!4d77.1307871!16s%2Fg%2F11ngpl18tf';
export const MAPS_NARAINA =
  'https://www.google.com/maps/place/Revive+Motion+-+Physiotherapy+Clinic/@28.6201637,77.1354521,17z/data=!3m1!4b1!4m6!3m5!1s0x390d036b2e96e1c1:0xca5d6a33fab06269!8m2!3d28.620159!4d77.138027!16s%2Fg%2F11yb2cz0tk';
