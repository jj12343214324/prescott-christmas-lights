import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';
import {
  CheckCircle,
  Home,
  Phone,
  Shield,
  Star,
  AlertTriangle,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Residential Christmas Light Installation | Prescott & Prescott Valley',
  description: 'Professional residential Christmas light installation services in Prescott and Yavapai County. Transform your home into a holiday masterpiece.',
  keywords: 'Residential Christmas lights, home holiday lighting, installation, removal, Prescott, Prescott Valley',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Powerful Hero with Real Results */}
      <section className="relative bg-black py-16 md:py-20">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/Roof line at night nice house christmas lighting.png"
            alt="Stunning Christmas lights display"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Your Neighbors Are Already Booked
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            We've transformed homes in Chino Valley, Dewey-Humboldt, and Prescott Lakes.
            Be the home everyone slows down to admire.
          </p>
          <Link
            href="/quote"
            className="bg-red-600 hover:bg-red-700 text-white inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-green-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-white">
            <div className="flex items-center gap-2">
              <Star className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" />
              <span className="text-sm sm:text-base font-semibold">Locally Owned</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-red-400" />
              <span className="text-sm sm:text-base font-semibold">All Yavapai County</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400" />
              <span className="text-sm sm:text-base font-semibold">Professional Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Transformation */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4 px-4">
              See the Transformation
            </h2>
            <p className="text-lg sm:text-xl text-center text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              This Chino Valley home went from invisible to the neighborhood showpiece.
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
                    src="/images/chino christmas lights before.jpeg"
                    alt="Home before Christmas lights - Chino Valley"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
                    Chino Valley Home - Before
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
                    src="/images/chino christmas lights after.jpeg"
                    alt="Same home with professional Christmas lighting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded">
                    Same Home - After
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 px-4">
                This Could Be Your Home Tomorrow Night
              </p>
              <Link
                href="/quote"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get My Transformation Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Proof Gallery */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4 px-4">
            See What We've Created in Your Neighborhood
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            These are actual homes we've transformed throughout Yavapai County. Your house could be next!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
            {/* Chino Valley */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/Roof line at night nice house christmas lighting chino house.png"
                  alt="Christmas lights installation in Chino Valley"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-semibold text-gray-600">CHINO VALLEY</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  "Awesome Job!"
                </h3>
                <p className="text-gray-600 mb-4 italic">
                  "So glad to have my Christmas lights up already and will definitely have them done again next year. Nehemiah and Sam were so easy to work with and did such a great job." - A. Gibb
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">Installed Nov 2024</span>
                </div>
              </div>
            </div>

            {/* Prescott */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/Roof line at night nice house christmas lighting jasper.png"
                  alt="Christmas lights installation in Prescott"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-semibold text-gray-600">PRESCOTT</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  "10 Stars If I Could!"
                </h3>
                <p className="text-gray-600 mb-4 italic">
                  "What a wonderful experience with Sam and Miah. They are the nicest guys ever and did an amazing job on my Christmas lights. I will be using them every Christmas from now on!" - Kayla Sultan
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">Installed Dec 2024</span>
                </div>
              </div>
            </div>

            {/* Hassayampa */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/Roof line at night nice house christmas lighting.png"
                  alt="Christmas lights installation in Hassayampa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-semibold text-gray-600">HASSAYAMPA</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  "Best Christmas Ever!"
                </h3>
                <p className="text-gray-600 mb-4 italic">
                  "Professional, on time, and the best looking Christmas lights I've ever had. They have an eye for design and really know how to make it shine. I didn't need to get on a ladder this year!" - Local Guide
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">Installed Dec 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Risk Your Life Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/tall-ladder-on-roof-we-do-the-dangerous-work-1.jpg"
                  alt="Professional installer on tall ladder - dangerous work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <AlertTriangle className="w-12 h-12 text-yellow-400 mb-3" />
                  <p className="text-2xl font-bold mb-2">12,000 ER Visits Every Year</p>
                  <p className="text-lg">From Christmas decorating accidents</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Stay Safe This Season
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Hanging Christmas lights can be risky business. Let our experienced team handle the heights
                  while you stay cozy inside with your family.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Professional Equipment:</strong>
                      <span className="text-gray-600"> We have the right ladders, harnesses, and safety gear</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Years of Experience:</strong>
                      <span className="text-gray-600"> Our team knows how to work safely on roofs and high places</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Trained Professionals:</strong>
                      <span className="text-gray-600"> Our installers are experts at working at heights safely</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Your Family Needs You:</strong>
                      <span className="text-gray-600"> Safe at home, not in the hospital this Christmas</span>
                    </div>
                  </li>
                </ul>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg text-center shadow-lg transition-colors"
                >
                  We'll Handle the Heights - You Enjoy the Lights
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Cost Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-4">
              Skip the Hassle This Year
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 px-4">
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
                    <span className="text-gray-600">Multiple trips to the store for supplies</span>
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
                    <span className="text-gray-600">Bulbs burning out mid-season</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="text-gray-600">Taking them down in freezing January</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <p className="text-2xl font-bold text-red-600">Stressful Weekend</p>
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
                    <span className="text-gray-600">Professional installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-600">We can purchase lights for you if needed</span>
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
                    <span className="text-gray-600">We remove and organize lights in bins</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <p className="text-2xl font-bold text-green-600">Holiday Magic</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg sm:text-xl text-gray-600 mb-6 px-4">
                This year, spend your weekends sipping cocoa and enjoying the season.
              </p>
              <Link
                href="/quote"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Save My Weekends →
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Professional at Work */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/professional light installers.jpeg"
                  alt="Professional Christmas light installer at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Leave It to the Pros
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
                      <strong>Perfect Spacing:</strong> Evenly spaced bulbs, straight lines
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
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                  Don't settle for crooked lights and tangled cords.
                  Your home deserves to look its absolute best.
                </p>
                <Link
                  href="/quote"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl"
                >
                  I Want Professional Results →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Your Installation Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-green-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Light Up Your Holidays?
          </h2>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto">
            Join hundreds of families throughout Yavapai County who trust us with their holiday lighting.
            Professional installation, beautiful results, zero hassle.
          </p>

          <div className="bg-black bg-opacity-20 rounded-lg p-6 sm:p-8 max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-3 gap-4 text-white">
              <div>
                <p className="text-3xl font-bold">5★</p>
                <p className="text-sm">Google Reviews</p>
              </div>
              <div>
                <p className="text-3xl font-bold">5.0</p>
                <p className="text-sm">Star Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm">Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-red-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Your Free Quote →
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-red-800 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call: {formatPhone(SITE_CONFIG.phone)}
            </a>
          </div>

          <p className="text-white text-opacity-90 mt-6 text-sm">
            Schedule now for the best availability.
          </p>
        </div>
      </section>
    </div>
  );
}