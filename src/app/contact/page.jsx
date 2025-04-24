import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import Link from "next/link";

const handleEmailClick = () => {
  window.location.href = "mailto:info@luckysoundstudio.com.ng";
};

const handlePhoneClick = () => {
  window.location.href = "tel:+2348060286484";
};

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We can not wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
        <div className="mt-12 flex space-x-4">
          <button
            onClick={handleEmailClick}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Email Us
          </button>
          <button
            onClick={handlePhoneClick}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Call Us
          </button>
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
