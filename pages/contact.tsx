import Page from "components/common/Page";
import PageTitle from "components/common/PageTitle";
import PageSection from "components/common/PageSection";
import ContactForm from "components/contact/ContactForm";
import ContactDetails from "components/contact/ContactDetails";
import { Fragment } from "react";
import contactData from "data/contact";

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
      <PageSection>
        <PageTitle>Contact Us</PageTitle>
        <div className="grid lg:grid-cols-6 gap-10">
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
                      renderDetails(loc, index, contactData.mobiles.length - 1)
                    )
                  : null}
              </Fragment>
            }
          />
        </div>
      </PageSection>
    </Page>
  );
}
