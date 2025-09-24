import Link from 'next/link';
import { Service } from '@/data/services';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="p-6">
        {service.popular && (
          <div className="inline-block bg-[#dc2027] text-white text-xs px-3 py-1 rounded-full mb-4 font-semibold animate-pulse">
            MOST POPULAR
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0d6936] transition-colors">
          {service.name}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {service.description}
        </p>

        <div className="text-lg font-bold text-[#dc2027] mb-4">
          FREE QUOTE
        </div>

        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="text-[#0d6936] mt-0.5 flex-shrink-0" size={16} />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-3">
          <Button
            asChild
            className="w-full bg-[#0d6936] hover:bg-[#0a5429] text-white font-bold"
          >
            <Link href={`/services/${service.slug}`}>
              Learn More
              <ArrowRight size={16} />
            </Link>
          </Button>

          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="text-[#dc2027] font-semibold text-sm flex items-center justify-center gap-1 hover:underline"
          >
            <Phone size={14} />
            Call {formatPhone(SITE_CONFIG.phone)}
          </a>
        </div>
      </div>
    </div>
  );
}