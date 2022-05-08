import Page from "components/common/Page";
import PageTitle from "components/common/PageTitle";
import PageSection from "components/common/PageSection";
import ContactForm from "components/contact/ContactForm";
import ContactDetails from "components/contact/ContactDetails";
import { Fragment } from "react";

export default function ContactPage() {
  return (
    <Page>
      <PageSection>
        <div className="flex items-center justify-center">
          <PageTitle>Contact Us</PageTitle>
        </div>
        <div className="grid lg:grid-cols-6 gap-10">
          <ContactForm />
          <ContactDetails
            location="BlueDart Marthandam (K.K District) Tamil Nadu, IND"
            mail={
              <Fragment>
                info@smarteyeapps.com <br />
                sales@smarteyeapps.com
              </Fragment>
            }
            mobile={
              <Fragment>
                +23 323 43434 <br />
                +1 3232 434 55
              </Fragment>
            }
          />
        </div>
      </PageSection>
    </Page>
  );
}
