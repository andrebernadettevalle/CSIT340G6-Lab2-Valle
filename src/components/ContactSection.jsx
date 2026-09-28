import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Where to contact me." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:valleandre05@gmail.com" text="valleandre05@gmail.com" />
        <ContactLink label="GitHub" href="https://github.com/andrebernadettevalle" text="github.com/andrebernadettevalle" />
        <ContactLink label="Facebook" href="https://www.facebook.com/andrevalle.45/" text="Andre Valle" />
      </ul>
    </section>
  )
}