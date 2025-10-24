import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react" // Ensure this package is correctly installed
import { CONTACT_INFO } from "../constants"

const ContactUs = () => {
  return (
    <section className="max-w-7xl mx-auto" id="contact">
      <div className="my-20 px-4">
        <h2 className="text-xl lg:text-3xl font-semibold tracking-tight text-center uppercase mb-8">
          Contact Us
        </h2>

        <p className="max-w-2xl text-lg mb-12 text-center mx-auto text-neutral-700">
          {CONTACT_INFO.text}
        </p>

        <div className="flex flex-col lg:flex-row justify-around mx-4 gap-8">
          {/* Phone */}
          <div className="flex items-start">
            <RiPhoneLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.phone.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.phone.value}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start">
            <RiMailLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.email.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.email.value}</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start">
            <RiMapPinLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.address.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.address.value}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
