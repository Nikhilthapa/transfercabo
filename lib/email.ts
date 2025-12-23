// Admin email from environment variable, fallback to default
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "sanjay@sparixglobal.com";

export type FormType = "cabo-reservation" | "activity-reservation" | "contact";

export interface CaboReservationData {
  formType: "cabo-reservation";
  service: string;
  passengers: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneCode: string;
  phone: string;
  hotelName: string;
  arrivalDate: string;
  arrivalTime: string;
  arrivalAirline: string;
  departureHotelName?: string;
  departureDate?: string;
  departureTime?: string;
  departureAirline?: string;
  groceryStop?: string;
}

export interface ActivityReservationData {
  formType: "activity-reservation";
  tour: string;
  passengers: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneCode: string;
  phone: string;
  hotelRoom?: string;
  activityDate: string;
  message?: string;
}

export interface ContactFormData {
  formType: "contact";
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export type FormData = CaboReservationData | ActivityReservationData | ContactFormData;

export function formatEmailSubject(formType: FormType): string {
  switch (formType) {
    case "cabo-reservation":
      return "New Cabo Transfer Reservation Request";
    case "activity-reservation":
      return "New Activity Reservation Request";
    case "contact":
      return "New Contact Form Submission";
    default:
      return "New Form Submission";
  }
}

export function formatEmailBody(data: FormData): string {
  const timestamp = new Date().toLocaleString();
  
  switch (data.formType) {
    case "cabo-reservation":
      return formatCaboReservationEmail(data as CaboReservationData, timestamp);
    case "activity-reservation":
      return formatActivityReservationEmail(data as ActivityReservationData, timestamp);
    case "contact":
      return formatContactEmail(data as ContactFormData, timestamp);
    default:
      return JSON.stringify(data, null, 2);
  }
}

function formatCaboReservationEmail(data: CaboReservationData, timestamp: string): string {
  let body = `
<h2>New Cabo Transfer Reservation Request</h2>
<p><strong>Submitted:</strong> ${timestamp}</p>

<h3>Service Details</h3>
<ul>
  <li><strong>Service Type:</strong> ${data.service || "Not specified"}</li>
  <li><strong>Passengers:</strong> ${data.passengers || "Not specified"}</li>
</ul>

<h3>Personal Information</h3>
<ul>
  <li><strong>First Name:</strong> ${data.firstName || "Not provided"}</li>
  <li><strong>Last Name:</strong> ${data.lastName || "Not provided"}</li>
  <li><strong>Email:</strong> ${data.email || "Not provided"}</li>
  <li><strong>Phone:</strong> ${data.phoneCode || ""} ${data.phone || "Not provided"}</li>
</ul>

<h3>Arrival Details</h3>
<ul>
  <li><strong>Hotel Name:</strong> ${data.hotelName || "Not specified"}</li>
  <li><strong>Arrival Date:</strong> ${data.arrivalDate || "Not specified"}</li>
  <li><strong>Arrival Time:</strong> ${data.arrivalTime || "Not specified"}</li>
  <li><strong>Arrival Airline & Flight:</strong> ${data.arrivalAirline || "Not specified"}</li>
</ul>
`;

  if (data.service === "round-trip" || data.departureDate) {
    body += `
<h3>Departure Details</h3>
<ul>
  <li><strong>Hotel Name:</strong> ${data.departureHotelName || "Not specified"}</li>
  <li><strong>Departure Date:</strong> ${data.departureDate || "Not specified"}</li>
  <li><strong>Departure Time:</strong> ${data.departureTime || "Not specified"}</li>
  <li><strong>Departure Airline & Flight:</strong> ${data.departureAirline || "Not specified"}</li>
</ul>
`;
  }

  if (data.groceryStop) {
    body += `
<h3>Additional Requests</h3>
<ul>
  <li><strong>Grocery Stop:</strong> ${data.groceryStop}</li>
</ul>
`;
  }

  return body;
}

function formatActivityReservationEmail(data: ActivityReservationData, timestamp: string): string {
  return `
<h2>New Activity Reservation Request</h2>
<p><strong>Submitted:</strong> ${timestamp}</p>

<h3>Activity Details</h3>
<ul>
  <li><strong>Tour:</strong> ${data.tour || "Not specified"}</li>
  <li><strong>Passengers:</strong> ${data.passengers || "Not specified"}</li>
  <li><strong>Activity Date:</strong> ${data.activityDate || "Not specified"}</li>
</ul>

<h3>Personal Information</h3>
<ul>
  <li><strong>First Name:</strong> ${data.firstName || "Not provided"}</li>
  <li><strong>Last Name:</strong> ${data.lastName || "Not provided"}</li>
  <li><strong>Email:</strong> ${data.email || "Not provided"}</li>
  <li><strong>Phone:</strong> ${data.phoneCode || ""} ${data.phone || "Not provided"}</li>
  <li><strong>Hotel & Room Number:</strong> ${data.hotelRoom || "Not provided"}</li>
</ul>

${data.message ? `
<h3>Message</h3>
<p>${data.message}</p>
` : ""}
`;
}

function formatContactEmail(data: ContactFormData, timestamp: string): string {
  return `
<h2>New Contact Form Submission</h2>
<p><strong>Submitted:</strong> ${timestamp}</p>

<h3>Contact Information</h3>
<ul>
  <li><strong>Full Name:</strong> ${data.fullName || "Not provided"}</li>
  <li><strong>Email:</strong> ${data.email || "Not provided"}</li>
  <li><strong>Phone:</strong> ${data.phone || "Not provided"}</li>
</ul>

<h3>Message</h3>
<p>${data.message || "No message provided"}</p>
`;
}

