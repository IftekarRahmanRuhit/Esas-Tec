import ContactPageBanner from "../components/ContactPageComponents/ContactPageBanner"
import ContactForm from "../components/ContactPageComponents/ContactForm"
import FrequentlyAskedQuestions from "../components/ContactPageComponents/FrequentlyAskedQuestions"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactPageBanner />
      <ContactForm />
      <FrequentlyAskedQuestions />
    </div>
  )
}
