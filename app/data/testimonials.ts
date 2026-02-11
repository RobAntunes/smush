export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'I was spending €150/month on five different supplements. First week on SMUSH and I threw them all out. Better energy, better clarity, and I actually know every milligram inside.',
    author: 'Marc C.',
    role: 'Creative Director',
    location: 'Barcelona',
  },
  {
    quote: 'Replaced my coffee, greens powder, lion\'s mane capsules, and multivitamin. One scoop. Done by 7am. My countertop thanks me.',
    author: 'Sofia R.',
    role: 'Startup Founder',
    location: 'Berlin',
  },
  {
    quote: 'The focus window is real. I get 3 hours of deep work every morning before the first Slack notification even registers.',
    author: 'James T.',
    role: 'Product Lead',
    location: 'London',
  },
];

export const featuredTestimonial = testimonials[0];
