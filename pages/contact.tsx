import Page from "components/common/Page";
import PageTitle from "components/common/PageTitle";
import PageSection from "components/common/PageSection";
import ContactForm from "components/contact/ContactForm";
import ContactDetails from "components/contact/ContactDetails";
import { Fragment } from "react";
import contactData from "data/contact";
import AnimatedAppear from "components/common/AnimatedAppear";
import { motion } from "framer-motion";
import Image from "components/common/Image";
import bg from "assets/images/BG1.jpg";

export default function ContactPage() {
  function renderDetails(data: string, index: number, max: number) {
    if (index != max) {
      return (
        <Fragment key={index}>
          <span>{data}</span>
          <hr className="my-2 border-slate-700" />
        </Fragment>
      );
    }

    return <span key={index}>{data}</span>;
  }

  return (
    <Page>
      <section className="pb-20">
        <AnimatedAppear
          hidden={{ opacity: 0 }}
          visible={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {(animate) => (
            <motion.div
              {...animate}
              className="py-20 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 z-[-1]">
                <Image
                  className="w-full h-full object-cover"
                  src={bg}
                  alt="contact-bg"
                />
              </div>
              <div className="container mx-auto flex items-center justify-center">
                <h3 className="text-5xl text-center font-barlow font-bold text-white app_underline--half">
                  Contact Us
                </h3>
              </div>
            </motion.div>
          )}
        </AnimatedAppear>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-6 gap-10 mt-20">
            <ContactForm />
            <ContactDetails
              location={
                <Fragment>
                  {contactData.locations.length
                    ? contactData.locations.map((loc, index) =>
                        renderDetails(
                          loc,
                          index,
                          contactData.locations.length - 1
                        )
                      )
                    : null}
                </Fragment>
              }
              mail={
                <Fragment>
                  {contactData.mails.length
                    ? contactData.mails.map((loc, index) =>
                        renderDetails(loc, index, contactData.mails.length - 1)
                      )
                    : null}
                </Fragment>
              }
              mobile={
                <Fragment>
                  {contactData.mobiles.length
                    ? contactData.mobiles.map((loc, index) =>
                        renderDetails(
                          loc,
                          index,
                          contactData.mobiles.length - 1
                        )
                      )
                    : null}
                </Fragment>
              }
            />
          </div>
        </div>
      </section>
    </Page>
  );
}
