/**
 * Client testimonials. The testimonials section stays hidden while this list is empty.
 * Only add real quotes you have permission to publish.
 *
 * Example:
 * {
 *   name: "Client Name",
 *   role: "Owner",
 *   company: "Company Name",
 *   quote: "What the client said, in their words.",
 *   photo: "/testimonials/client-name.jpg", // optional, put the file in /public/testimonials/
 * },
 */
export type Testimonial = {
  name: string;
  role?: string;
  company?: string;
  quote: string;
  photo?: string;
};

export const testimonials: Testimonial[] = [];
