import ContactPageBanner from "../components/ContactPageComponents/ContactPageBanner"
import ContactForm from "../components/ContactPageComponents/ContactForm"
import FrequentlyAskedQuestions from "../components/ContactPageComponents/FrequentlyAskedQuestions"

export const metadata = {
  title: "Esas Tec | Contact",
  description: "Get in touch with Esas Tec. Contact us for inquiries about our technology services, project discussions, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactPageBanner />
      <ContactForm />
      <FrequentlyAskedQuestions />
    </div>
  )
}
