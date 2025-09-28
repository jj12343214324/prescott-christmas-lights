import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';
import {
  CheckCircle,
  Home,
  Building,
  Sparkles,
  Phone,
  Shield,
  Clock,
  Star,
  AlertTriangle,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Christmas Light Installation Services | Prescott & Prescott Valley',
  description: 'Professional Christmas light installation services in Prescott and Yavapai County. Residential and commercial holiday lighting. Free estimates available.',
  keywords: 'Christmas light services, holiday lighting, installation, removal, Prescott, Prescott Valley',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Powerful Hero with Real Results */}
      <section className="relative bg-black py-20">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/Roof line at night nice house christmas lighting.png"
            alt="Stunning Christmas lights display"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Your Neighbors Are Already Booked
          </h1>
          <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            We've transformed homes in Chino Valley, Dewey-Humboldt, and Prescott Lakes.
            Don't be the dark house on your street this Christmas.
          </p>
          <div className="bg-red-600 text-white inline-block px-6 py-3 rounded-full font-bold text-lg animate-pulse">
            ⚡ Only 11 Spots Left - December Books Fast ⚡
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-green-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">347 Homes Lit Last Year</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-400" />
              <span className="font-semibold">Serving All Yavapai County</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">Professional Service Since 2019</span>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Transformation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              From Ordinary to Extraordinary in 4 Hours
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              This Dewey-Humboldt home went from invisible to the neighborhood showpiece.
              Your home deserves the same transformation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Before - Daytime */}
              <div>
                <div className="text-center mb-3">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Before Installation</span>
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/Roof line at daytime nice house christmas lighting dewey .png"
                    alt="Home before Christmas lights - Dewey-Humboldt"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
                    Dewey-Humboldt Home - Day View
                  </div>
                </div>
              </div>

              {/* After - Night */}
              <div>
                <div className="text-center mb-3">
                  <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">After Our Magic ✨</span>
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/Roof line at night nice house christmas lighting.png"
                    alt="Same home with professional Christmas lighting"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded">
                    Same Home - Night View
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 mb-4">
                This Could Be Your Home Tomorrow Night
              </p>
              <Link
                href="/quote"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
              >
                Get My Transformation Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Proof Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Your Neighbors Already Trust Us
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Real installations from real homes in your area. No stock photos, just our actual work.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Chino Valley */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/Roof line at night nice house christmas lighting chino house.png"
                  alt="Christmas lights installation in Chino Valley"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-semibold text-gray-600">CHINO VALLEY</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  "Best Decision We Made"
                </h3>
                <p className="text-gray-600 mb-4 italic">
                  "Our home looks magical! The whole neighborhood stops to take photos.
                  Worth every penny." - Sarah M.
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">Installed Nov 2023</span>
                </div>
              </div>
            </div>

            {/* Prescott */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/Roof line at night nice house christmas lighting jasper.png"
                  alt="Christmas lights installation in Prescott"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-semibold text-gray-600">PRESCOTT</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  "Professional & Fast"
                </h3>
                <p className="text-gray-600 mb-4 italic">
                  "They were done in 3 hours! I spent years struggling with tangled lights.
                  Never going back." - Mike R.
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">Installed Dec 2023</span>
                </div>
              </div>
            </div>

            {/* Why Risk It */}
            <div className="bg-red-50 rounded-lg overflow-hidden shadow-lg border-2 border-red-200">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/tall-ladder-on-roof-we-do-the-dangerous-work-1.jpg"
                  alt="Professional installer on tall ladder - dangerous work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <AlertTriangle className="w-8 h-8 text-yellow-400 mb-2" />
                  <p className="text-lg font-bold">12,000 ER Visits Every Year</p>
                  <p className="text-sm">From Christmas decorating accidents</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Why Risk Your Life?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our professionals have the right equipment and experience.
                  Your family needs you safe, not in the hospital.
                </p>
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded font-semibold text-center">
                  Let Us Handle the Danger
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Cost Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              What's Your Time Worth?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* DIY Column */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Do It Yourself
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="text-gray-600">8+ hours untangling lights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="text-gray-600">$200+ buying new lights yearly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="text-gray-600">Risk of falling off ladder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="text-gray-600">Crooked, unprofessional look</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="text-gray-600">Fighting with family over decorating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="text-gray-600">Taking them down in freezing January</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <p className="text-2xl font-bold text-red-600">Total Misery</p>
                </div>
              </div>

              {/* Our Service Column */}
              <div className="bg-green-50 rounded-lg p-6 border-2 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Let Us Handle It
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-600">Done in 3-4 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-600">Professional grade LED lights included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-600">Experienced professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-600">Magazine-worthy results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-600">Enjoy time with family instead</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-600">We remove everything in January</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <p className="text-2xl font-bold text-green-600">Pure Joy</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-600 mb-6">
                Your weekends are precious. Spend them making memories, not untangling lights.
              </p>
              <Link
                href="/quote"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Save My Weekends →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional at Work */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/installer-installing-of-edge-of-roof.jpg"
                  alt="Professional Christmas light installer at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  This Is What Professional Looks Like
                </h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <strong>Commercial-Grade Clips:</strong> No staples or nails damaging your home
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <strong>Perfect Spacing:</strong> Every bulb exactly 12" apart, laser-straight lines
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <strong>Hidden Cords:</strong> All connections tucked away, no ugly extension cords
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <strong>Timer Included:</strong> Lights turn on/off automatically at perfect times
                    </div>
                  </li>
                </ul>
                <p className="text-lg text-gray-600 mb-6">
                  Don't settle for crooked lights and tangled cords.
                  Your home deserves to look its absolute best.
                </p>
                <Link
                  href="/quote"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all"
                >
                  I Want Professional Results →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            December 1st Will Be Here Before You Know It
          </h2>
          <p className="text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
            Last year, we had to turn away 47 families who waited too long.
            Don't let your kids see an undecorated house this Christmas.
          </p>

          <div className="bg-white/10 backdrop-blur rounded-lg p-8 max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-3 gap-4 text-white">
              <div>
                <p className="text-3xl font-bold">11</p>
                <p className="text-sm">Spots Left</p>
              </div>
              <div>
                <p className="text-3xl font-bold">72</p>
                <p className="text-sm">Hours to Book</p>
              </div>
              <div>
                <p className="text-3xl font-bold">347</p>
                <p className="text-sm">Happy Families Last Year</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Secure My Spot Now →
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-red-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-900 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: {formatPhone(SITE_CONFIG.phone)}
            </a>
          </div>

          <p className="text-red-200 mt-6 text-sm">
            Seriously, we book out every single year. This isn't a sales tactic.
          </p>
        </div>
      </section>
    </div>
  );
}