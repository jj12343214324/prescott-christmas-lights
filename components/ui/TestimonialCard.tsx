import { Star, MapPin } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    location: string;
    rating: number;
    text: string;
    date: string;
  };
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">5.0</span>
      </div>

      <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

      <div className="border-t pt-4">
        <div className="font-semibold text-gray-900">{testimonial.name}</div>
        <div className="text-sm text-gray-600 flex items-center gap-1">
          <MapPin size={14} />
          {testimonial.location}
        </div>
      </div>
    </div>
  );
}