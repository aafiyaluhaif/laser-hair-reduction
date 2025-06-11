import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  CheckCircle,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ConsultationForm from './_components/form';
import ConsultationModal from './_components/modal';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='px-20 w-full flex h-16 items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Image
              src={'/logo.png'}
              alt='logo'
              height={0}
              width={0}
              sizes='100vw'
              className='w-full h-10'
            />
          </div>

          <div>
            <ConsultationModal />
          </div>
        </div>
      </header>

      <main className=''>
        {/* Hero Section */}
        <section className='relative bg-[#fbf8f1] '>
          <div className='grid lg:grid-cols-2 grid-cols-1 px-20 gap-5  w-full lg:py-32 py-14'>
            <div className='lg:order-first'>
              <div className='max-w-2xl space-y-6'>
                <h1 className='text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900'>
                  Get up to 50% OFF on Full Body Laser Hair Reduction!
                </h1>
                <p className='text-lg md:text-xl text-gray-700'>
                  Say goodbye to unwanted hair and the hassle of constant waxing
                  or shaving. Our advanced, pain-free laser technology offers
                  safe, long-lasting results tailored to your skin type.
                </p>
                <span>
                  Limited-time offer—book your consultation now and experience
                  the joy of silky skin!
                </span>

                <div className=' mt-7'>
                  <ConsultationModal />
                </div>
              </div>
            </div>
            <div className=' w-full flex flex-row justify-end order-first'>
              <ConsultationForm />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id='about' className='py-16 bg-white'>
          <div className='px-20'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div>
                <Image
                  src='/images/LHR.png'
                  alt='Laser Treatment'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='rounded-lg object-cover w-full h-full'
                />
              </div>
              <div className='space-y-6'>
                <div className='inline-block px-3 py-1 text-sm font-medium text-amber-700 bg-amber-100 rounded-full'>
                  Advanced Technology
                </div>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                  Laser Hair Reduction Treatment
                </h2>
                <p className='text-gray-700'>
                  Laser hair reduction refers to a medical procedure in which
                  unwanted hair is removed through lasers (that is, a beam of
                  focused light). Skinisma Aesthetics offers the best laser hair
                  reduction in Delhi and has the right technique to make sure
                  that you will never have to witness the embarrassment of
                  unwanted hair on your body. Skinisma gives you an overview of
                  the price of laser hair reduction in Delhi.
                </p>
                <p className='text-gray-700'>
                  In a laser hair reduction treatment, light emitted from the
                  laser is focused on the part from where hair needs to be
                  removed. The mechanism of action of laser is to target
                  melanin, a pigment present in the hair shaft and hair matrix,
                  by emitting focused light with wavelengths ranging from 600 to
                  12000nm because those wavelengths are selectively absorbed by
                  melanin. Pigment melanin in the hair absorbs the light and
                  converts it to heat. This heat damages the hair follicles
                  present within the skin, thereby inhibiting or delaying future
                  hair growth.
                </p>
                <ConsultationModal />
              </div>
            </div>
          </div>
        </section>

        {/* Procedure Section */}
        <section className='py-16 bg-amber-50'>
          <div className='px-20'>
            <div className='text-center max-w-3xl mx-auto mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                The Procedure of Laser Hair Treatment
              </h2>
              <p className='text-gray-700'>
                Our laser hair reduction treatment is a simple, straightforward
                process designed for your comfort and convenience.
              </p>
            </div>
            <div className='grid md:grid-cols-2 gap-12'>
              <div className='space-y-6'>
                <div className='flex gap-4 items-start'>
                  <div className='bg-amber-100 rounded-full p-3 text-amber-700'>
                    <CheckCircle className='h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      Consultation
                    </h3>
                    <p className='text-gray-700'>
                      Understanding your skin, hair type, and growth pattern
                      enable doctors to suggest the right treatment plan for
                      you.
                    </p>
                  </div>
                </div>
                <div className='flex gap-4 items-start'>
                  <div className='bg-amber-100 rounded-full p-3 text-amber-700'>
                    <CheckCircle className='h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      Preparation
                    </h3>
                    <p className='text-gray-700'>
                      Using the laser beam on a small part of the body to assess
                      the sensitivity and reaction to the skin towards the laser
                      beam.
                    </p>
                  </div>
                </div>
                <div className='flex gap-4 items-start'>
                  <div className='bg-amber-100 rounded-full p-3 text-amber-700'>
                    <CheckCircle className='h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      Treatment
                    </h3>
                    <p className='text-gray-700'>
                      The laser device is passed over the treatment area,
                      emitting pulses of light that target hair follicles.
                    </p>
                  </div>
                </div>
                <div className='flex gap-4 items-start'>
                  <div className='bg-amber-100 rounded-full p-3 text-amber-700'>
                    <CheckCircle className='h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                      Post-Treatment Care
                    </h3>
                    <p className='text-gray-700'>
                      We provide detailed aftercare instructions to ensure
                      optimal results and comfort.
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative h-[400px] rounded-lg overflow-hidden'>
                <Image
                  src='/images/LHR PROCEDURE.png'
                  alt='Laser Treatment Procedure'
                  height={0}
                  width={0}
                  sizes='100vw'
                  className='object-cover w-full h-full'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id='benefits' className='py-16 bg-white'>
          <div className='px-20'>
            <div className='text-center max-w-3xl mx-auto mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Benefits of Laser Hair Reduction
              </h2>
              <p className='text-gray-700'>
                Discover why laser hair reduction is the preferred choice for
                long-term hair removal.
              </p>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div className='bg-amber-50 p-6 rounded-lg text-center'>
                <div className='bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-amber-700'>
                  <span className='text-xl font-bold'>1</span>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  Precision
                </h3>
                <p className='text-gray-700'>
                  The treatment uses lasers that selectively target dark, coarse
                  hair.
                </p>
              </div>
              <div className='bg-amber-50 p-6 rounded-lg text-center'>
                <div className='bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-amber-700'>
                  <span className='text-xl font-bold'>2</span>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  Speed
                </h3>
                <p className='text-gray-700'>
                  The laser treatment is a very quick process as a single pulse
                  of the laser can treat multiple hairs simultaneously in only a
                  fraction of a second.
                </p>
              </div>
              <div className='bg-amber-50 p-6 rounded-lg text-center'>
                <div className='bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-amber-700'>
                  <span className='text-xl font-bold'>3</span>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  Harmless
                </h3>
                <p className='text-gray-700'>
                  The treatment carries no harm to the surrounding tissues.
                </p>
              </div>
              <div className='bg-amber-50 p-6 rounded-lg text-center'>
                <div className='bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-amber-700'>
                  <span className='text-xl font-bold'>4</span>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  Predictability
                </h3>
                <p className='text-gray-700'>
                  After approximately six to eight treatments, most people
                  observe permanent hair loss from the treated parts of the
                  body.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id='pricing' className='py-16 bg-amber-50'>
          <div className='px-20'>
            <div className='text-center max-w-3xl mx-auto mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Cost of Laser Hair Removal Treatment
              </h2>
              <p className='text-gray-700'>
                We offer competitive pricing with packages designed to provide
                the best value.
              </p>
            </div>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div className='relative h-[400px] rounded-lg overflow-hidden'>
                <Image
                  src='/images/cost of lhr.png'
                  alt='Before and After'
                  height={0}
                  width={0}
                  sizes='100vw'
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='space-y-6'>
                <div className='bg-white p-6 rounded-lg shadow-sm'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                    Pricing Factors
                  </h3>
                  <ul className='space-y-3'>
                    <li className='flex items-start gap-3'>
                      <CheckCircle className='h-5 w-5 text-amber-600 mt-0.5' />
                      <span className='text-gray-700'>
                        Size of the area to be treated
                      </span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <CheckCircle className='h-5 w-5 text-amber-600 mt-0.5' />
                      <span className='text-gray-700'>
                        Number of sessions required
                      </span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <CheckCircle className='h-5 w-5 text-amber-600 mt-0.5' />
                      <span className='text-gray-700'>
                        Package discounts for multiple areas
                      </span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <CheckCircle className='h-5 w-5 text-amber-600 mt-0.5' />
                      <span className='text-gray-700'>
                        Maintenance sessions after initial treatment
                      </span>
                    </li>
                  </ul>
                </div>
                <p className='text-gray-700'>
                  Contact us for a personalized quote based on your specific
                  needs. We offer flexible payment plans and package discounts.
                </p>
                <ConsultationModal />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id='faq' className='py-16 bg-white'>
          <div className='px-20'>
            <div className='text-center max-w-3xl mx-auto mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Frequently Asked Questions
              </h2>
              <p className='text-gray-700'>
                Find answers to common questions about laser hair reduction
                treatments.
              </p>
            </div>
            <div className=' max-w-4xl mx-auto'>
              <Accordion
                type='single'
                collapsible
                className='w-full'
                defaultValue='item-1'
              >
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-semibold text-xl'>
                    Which is the best place for laser hair removal in Delhi?
                  </AccordionTrigger>
                  <AccordionContent className='flex flex-col gap-4 text-balance'>
                    <p>
                      Skinisma Aesthetics by Dr. Sweety Darall Tomar is one of
                      the best choices for high-quality and reliable laser hair
                      removal in Delhi. They have incredible experience in this
                      field and the most advanced laser technology to deliver
                      fast and effective results.
                    </p>
                    <p>
                      The laser therapist who perform laser hair reduction
                      treatment have specialised training and does all the
                      treatments under the guidance of a dermatologist. At
                      Skinisma, you will start seeing results in just 4-6 weeks
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>
                    {' '}
                    Who is the best dermatologist for laser hair removal in
                    Delhi?
                  </AccordionTrigger>
                  <AccordionContent className='flex flex-col gap-4 text-balance'>
                    <p>
                      Dr. Sweety Darali Tomar is an award-winning, certified
                      Consultant Dermatologist and Clinical Nutritionist whom
                      you can trust for laser hair removal treatment in Delhi.
                      She is known for her unmatched expertise in evaluating and
                      alleviating the conditions of a wide variety of skin, nail
                      and hair disorders. Dr. Sweety has also completed her
                      medical post graduation in Dermatology, Venereology, and
                      Leprosy (DVL).
                    </p>
                    <p>
                      Her fields of expertise include Microblading, Skin
                      Pigmentation Treatment, Acne Treatment, Botox, Fillers,
                      Vitiligo Surgery, Thread Lift, Skin Tog Removal,
                      Autologous Fat Transplant, and other Dermatosurgeries. She
                      also specialises in skin cancer diagnosis and hair
                      transplant.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>
                    {' '}
                    How much does laser treatment for hair removal cost in
                    Delhi?
                  </AccordionTrigger>
                  <AccordionContent className='flex flex-col gap-4 text-balance'>
                    <p>
                      The average cost of laser hair removal in Delhi is INR
                      11,000 per session. Permanent hair removal in Delhi may
                      start from around INR 10,000 and may go up to INR 30,000,
                      The primary factor affecting the cost is the part of the
                      body being treated. The larger the surface area of hair
                      removal, the higher the price will be. Other factors like
                      experience of the consulting specialist, technological
                      innovations used, and number of sessions required will
                      also influence the COST
                    </p>
                    <p>
                      At Skinisna Aesthetics, we ensure the highest standards of
                      laser hair removal in Delhi at best prices. Our
                      experienced dermatologists will examine your skin hair
                      condition and recommend the right treatment and cost
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className='py-16 bg-amber-50'>
          <div className='px-20'>
            <div className='grid md:grid-cols-2 gap-12'>
              <div className='space-y-6'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                  Book Your Consultation
                </h2>
                <p className='text-gray-700'>
                  Ready to experience the benefits of laser hair reduction?
                  Contact us today to schedule your consultation with our expert
                  team.
                </p>
                <div className='space-y-4'>
                  <Link
                    href='tel:+919899121263'
                    className='flex items-center gap-3'
                  >
                    <Phone className='h-5 w-5 text-amber-600' />
                    <span className='text-gray-700'>+91-9899121263</span>
                  </Link>
                  <Link
                    href={'mailto:skinisma@gmail.com'}
                    className='flex items-center gap-3'
                  >
                    <Mail className='h-5 w-5 text-amber-600' />
                    <span className='text-gray-700'>skinisma@gmail.com</span>
                  </Link>
                  <Link
                    href={'https://maps.app.goo.gl/ebMHfXEMgimFHU6B9'}
                    className='flex items-center gap-3'
                    target='_blank'
                  >
                    <MapPin className='h-5 w-5 text-amber-600' />
                    <span className='text-gray-700'>
                      D-2/42, Pandit Vishnu Dutt Marg, Block D2, Janakpuri, New
                      Delhi 110058
                    </span>
                  </Link>
                </div>
                <div className='flex gap-4'>
                  <Link
                    href='https://www.facebook.com/SKINISMA/'
                    className='text-amber-600 hover:text-amber-700'
                    target='_blank'
                  >
                    <Facebook className='h-6 w-6' />
                    <span className='sr-only'>Facebook</span>
                  </Link>
                  <Link
                    href='https://www.instagram.com/skinisma_aesthetics/'
                    className='text-amber-600 hover:text-amber-700'
                    target='_blank'
                  >
                    <Instagram className='h-6 w-6' />
                    <span className='sr-only'>Instagram</span>
                  </Link>
                </div>
              </div>
              <div className=' w-full flex flex-row justify-end '>
                <ConsultationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className='bg-[#c6993e] py-4 text-center text-white'>
          <p>&copy; 2025 SKINISMA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
