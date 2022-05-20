import Page from "components/common/Page";

import img from "assets/images/about_img4.jpg";
import Image from "components/common/Image";
import ListItem from "components/common/ListItem";
import AboutLayout from "components/about/AboutLayout";
import { Fragment } from "react";

export default function AboutPage() {
  return (
    <Page>
      <AboutLayout
        title="About Us"
        cards={[
          {
            title: "Mission",
            children: (
              <Fragment>
                <p>
                  Our dedicated & skilled team focuses on our client’s needs to
                  deliver effective results at each milestone, tailored to meet
                  individual client speciﬁc requirements and budget using the
                  latest infrastructure and technology.
                </p>
              </Fragment>
            ),
          },
          {
            title: "Vision",
            children: (
              <Fragment>
                <p>
                  We desire to achieve in the long-run, the demand for dynamic
                  and efﬁcient IT infrastructure solutions & services through
                  enabling our client’s scalability efﬁciently by providing the
                  best tools to streamline their business.
                </p>
              </Fragment>
            ),
          },
        ]}
      >
        <Image
          className="float-right w-[100%] mb-10 md:mb-0 md:w-[40%] md:ml-10"
          src={img}
          alt="img"
        />
        <p className="mb-5">
          ZAZ Retail a division of ZAZ Plus Technologies LLC is one of the
          leading high-end technologies companies in the field of CCTV Security
          Systems, ICT and IT Infrastructure solutions as well as Services.
        </p>
        <p className="mb-5">
          We are established in the region since 2013 with the aim to provide
          exclusive and full-fledged Security Systems and infrastructure support
          services to achieve our client’s business goals in an efficient and
          professional approach.
        </p>
        <p className="mb-5">
          ZAZ Plus Technologies LLC has worked with MNCs as well as local
          companies in the UAE and has successfully completed projects across
          various industries. We have effectively completed projects for
          Corporates, Villas, Offices, Shops, Clinics and Warehouses. ZAZ Retail
          is mainly focussed on the products of leading brands in
        </p>
        <ul className="mb-5">
          <ListItem>Cameras </ListItem>
          <ListItem>Access Point </ListItem>
          <ListItem>Video Intercom </ListItem>
          <ListItem>Audio Visual </ListItem>
          <ListItem>Networking Products </ListItem>
          <ListItem>Surveillance Camera </ListItem>
          <ListItem>Home Automation </ListItem>
          <ListItem>24x7 Support </ListItem>
        </ul>
        <p>
          We are well equipped with a focused team headed by a group of
          intellectual professionals who are technically adept and distinctively
          innovative, who works closely with clients and guarantees peerless
          quality in every detail to provide exclusive solutions and services
          with specific prominence on quality and safety.
        </p>
      </AboutLayout>
    </Page>
  );
}
