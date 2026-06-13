export default function Policy() {
  return (
    <main className="py-10 sm:py-13.75 font-inter bg-white">
      <header className="max-w-420 mx-auto px-4 sm:px-8 md:px-12">
        <div className="bg-[#eef3f7] w-full py-10 sm:pt-17.25 sm:pb-17  lg:min-h-97.25">
          <div className="max-w-321.5 mx-auto px-8 sm:px-16 lg:px-24">
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-[#0a2540] leading-[1.3em] tracking-[0.005em]">
              Privacy policy
            </h1>
            <p className="mt-3 sm:mt-7 text-base sm:text-3xl text-[#6b7280] font-inter font-light">
              Last Updated: June 2024
            </p>
          </div>
        </div>
      </header>

      <div className="w-full max-w-321.5 mx-auto px-8 sm:px-16 lg:px-24 py-20 sm:py-24">
        <div className="max-w-207.75">
          <Section title="Information we collect">
            <Item label="Personal Information">
              This may include your name, email address, phone number, and
              billing address if you choose to create an account or use online
              payment options.
            </Item>
            <Item label="Usage Data:">
              This includes information about your activity on the Website, such
              as the pages you visit, the time you spend on those pages, and the
              links you click. We collect this data through cookies and similar
              tracking technologies.
            </Item>
            <Item label="Usage Data:">
              This includes information about your activity on the Website, such
              as the pages you visit, the time you spend on those pages, and the
              links you click. We collect this data through cookies and similar
              tracking technologies.
            </Item>
            <Item label="Device Information:">
              We collect information about the device you use to access the
              Website, such as your IP address, browser type, operating system,
              and device identifiers.
            </Item>
          </Section>

          <Section title="How We Use Your Information">
            <Item label="To provide and improve the Website:">
              We use your information to operate and maintain the Website, and
              to provide you with the features and services you request.
            </Item>
            <Item label="To personalize your experience:">
              We use your information to personalize your experience on the
              Website, such as by remembering your preferences and settings.
            </Item>
            <Item label="To send you marketing communications:">
              We may use your information to send you marketing communications,
              such as newsletters and promotional offers. You can opt-out of
              receiving these communications at any time.
            </Item>
          </Section>

          <Section title="Sharing Your Information">
            <p className="text-sm sm:text-xl font-inter font-light leading-relaxed text-gray-900">
              We may share your information with third-party service providers
              who help us operate and maintain the Website. These service
              providers are contractually obligated to keep your information
              confidential and secure.
            </p>
            <p className="text-sm sm:text-xl font-inter font-light leading-relaxed text-gray-900">
              We will not share your information with any other third party
              without your consent, except in the following circumstances:
            </p>
            <Item label="To comply with the law:">
              We may disclose your information to comply with a legal
              obligation, such as a subpoena or court order.
            </Item>
            <Item label="To protect our rights:">
              We may disclose your information to protect our rights, property,
              or safety, or the rights, property, or safety of others.
            </Item>
          </Section>

          <Section title="Cookies and Tracking Technologies">
            <p className="text-sm sm:text-xl font-inter font-light leading-relaxed text-gray-900">
              We use cookies and similar tracking technologies to collect and
              store information about your use of the Website. A cookie is a
              small file that is placed on your device when you visit a website.
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of the Website.
            </p>
          </Section>

          <Section title="Security">
            <p className="text-sm sm:text-xl font-inter font-light leading-relaxed text-gray-900">
              We take reasonable steps to protect your information from
              unauthorized access, disclosure, alteration, or destruction.
              However, no website or internet transmission is completely secure.
              We cannot guarantee the security of your information.
            </p>
          </Section>

          <Section title="Changes to this Privacy Policy">
            <p className="text-sm sm:text-xl font-inter font-light leading-relaxed text-gray-900">
              We may update this Privacy Policy from time to time. We will post
              any changes on this page. You are encouraged to review this
              Privacy Policy periodically to stay informed of updates.
            </p>
            <p className="text-sm sm:text-xl font-inter font-light leading-relaxed text-gray-900">
              This Privacy Policy is designed to inform you about our practices
              regarding the collection, use, and disclosure of your information
              when you use the Website. By using the Website, you agree to the
              terms of this Privacy Policy.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="text-lg sm:text-3xl lg:text-4xl font-bold tracking-[0.03em] leading-[1.3em] text-[#0a0a0a] mb-6 sm:mb-12">
        {title}
      </h2>
      <div className="space-y-10">{children}</div>
    </section>
  );
}

function Item({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-base sm:text-[28px] font-inter font-normal text-[#0a0a0a] mb-5">
        {label}
      </h4>
      <p className="text-sm sm:text-xl font-inter font-light leading-relaxed text-gray-900">
        {children}
      </p>
    </div>
  );
}
