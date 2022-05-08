import { Fragment } from "react";

import { RiSearchEyeLine } from "@react-icons/all-files/ri/RiSearchEyeLine";
import { IoInfinite } from "@react-icons/all-files/io5/IoInfinite";
import { BiWrench } from "@react-icons/all-files/bi/BiWrench";
import { IoIosPeople } from "@react-icons/all-files/io/IoIosPeople";
import { FaCubes } from "@react-icons/all-files/fa/FaCubes";
import { FaRegCalendarAlt } from "@react-icons/all-files/fa/FaRegCalendarAlt";
import { IoSettings } from "@react-icons/all-files/io5/IoSettings";

import headerImage from "assets/images/header.jpg";
import aboutImage from "assets/images/about_img4.jpg";
import whatImage from "assets/images/what_img2.png";
import successImage from "assets/images/BG1.jpg";

import Page from "components/common/Page";
import HomeHeader from "components/home/header/HomeHeader";
import HomeFeatures from "components/home/features/HomeFeatures";
import DividedCardLayout from "components/common/DividedCard/DividedCardLayout";
import DividedCardContent from "components/common/DividedCard/DividedCardContent";
import DividedCardImage from "components/common/DividedCard/DividedCardImage";
import PageSection from "components/common/PageSection";
import HomeServices from "components/home/services/HomeServices";
import ListItem from "components/common/ListItem";
import AppButton from "components/common/Button";
import HomeFloatingWhatsappButton from "components/home/floating/HomeFloatingWhatsappButton";
import HomeSuccess from "components/home/success/HomeSuccess";

export default function HomePage() {
  return (
    <Page
      head={
        <Fragment>
          <link
            rel="preload"
            href={headerImage.src}
            as="image"
            imageSrcSet={headerImage.srcSet}
            imageSizes="100vw"
          />
        </Fragment>
      }
    >
      <HomeFloatingWhatsappButton />
      <HomeHeader
        title="Delivering technology for the future"
        subtitle={`Complete solution for CCTV Security Systems, ICT and IT Infrastructure, to provide exclusive and full-fledged Security Systems and infrastructure support to our customers.`}
        buttonText="Let's talk"
        buttonUrl="/contact"
        bg={headerImage}
      />
      <HomeFeatures
        cards={[
          {
            title: "Skilled Workforce",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ever since the",
            icon: BiWrench,
          },
          {
            title: "Attention to Detail",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ever since the",
            icon: RiSearchEyeLine,
          },
          {
            title: "Agile and ever-evolving",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ever since the",
            icon: IoInfinite,
          },
        ]}
      />
      <PageSection className="pt-40">
        <DividedCardLayout>
          <DividedCardContent title="Our Story">
            <p>
              ZAZ Retail a division of ZAZ Plus Technologies LLC is one of the
              leading high-end technologies companies in the ﬁeld of CCTV
              Security Systems, ICT and IT Infrastructure solutions as well as
              Services.
            </p>
            <p>
              We are established in the region since 2013 with the aim to
              provide exclusive and full-ﬂedged Security Systems and
              infrastructure support services to achieve our client&apos;s
              business goals in an efﬁcient and professional approach.
            </p>
            <p>
              We are well equipped with a focused team headed by a group of
              intellectual professionals who are technically adept and
              distinctively innovative, who works closely with clients and
              guarantees peerless quality in every detail to provide exclusive
              solutions and services with speciﬁc prominence on quality and
              safety.
            </p>
            <div className="flex mt-5">
              <AppButton href="/about" variant="primary">
                Read More
              </AppButton>
            </div>
          </DividedCardContent>
          <DividedCardImage img={aboutImage} />
        </DividedCardLayout>
      </PageSection>
      <PageSection>
        <HomeServices
          title="Our Services"
          buttonText="See More"
          buttonUrl="/services"
          cards={[
            {
              title: "CCTV Security Systems & Solutions",
              content: `To improve the security at home or business sites, we at ZAZ Retail have 
                extensive product experience in order to provide innovative & customised 
                solutions that matches your exact needs.
                `,
              icon: "security",
            },
            {
              title: "IT Network Infrastructure Solutions & Services",
              content: `We at ZAZ Retail, offers a wide range of best end user experiences with our IT 
                networking solutions and comprises all components that enable network 
                communication, operations and connectivity.
                `,
              icon: "it",
            },
            {
              title: "Access Control Systems",
              content: `ZAZ Retail is one of the leading providers of robust access control systems for 
                businesses across the industries that improves user convenience and security.
                `,
              icon: "access",
            },
            {
              title: "Video Intercom Systems",
              content: `Our Video Intercom Systems, provides a standard solution equipped for better 
                communication and security.
                `,
              icon: "video",
            },
            {
              title: "Audio Visual Systems",
              content: `At ZAZ Retail, we offer Audio Visual Systems & Solutions that can equip 
                organisations with leading cutting-edge tools to enhance team performance, 
                tailored to your business requirements.
                `,
              icon: "audio",
            },
            {
              title: "Structured Cabling",
              content: `ZAZ Retail offers expert structured cabling solutions and helps to design your 
                space intelligently which benefits you of structured cabling to your projects.
                `,
              icon: "cable",
            },
          ]}
        />
      </PageSection>
      <HomeSuccess
        title="What makes us different"
        bg={successImage}
        cards={[
          {
            title: "Happy Satisfied Clients",
            data: 150,
            icon: IoIosPeople,
          },
          {
            title: "Projects done",
            data: 450,
            icon: FaCubes,
          },
          {
            title: "Years of Experience",
            data: 9,
            icon: FaRegCalendarAlt,
          },
          {
            title: "Suport Staffs",
            data: 100,
            icon: IoSettings,
          },
        ]}
      />
      <PageSection className="pb-40">
        <DividedCardLayout>
          <DividedCardImage img={whatImage} />
          <DividedCardContent title="What We Provide?">
            <p>
              ZAZ Plus Technologies LLC has worked with MNCs as well as local
              companies in the UAE and has successfully completed projects
              across various industries. We have effectively completed projects
              for Corporates, Villas, Ofﬁces, Shops, Clinics and Warehouses. ZAZ
              Retail is mainly focussed on the products of leading brands in:
            </p>
            <ul>
              <ListItem>Cameras </ListItem>
              <ListItem>Access Point </ListItem>
              <ListItem>Video Intercom </ListItem>
              <ListItem>Audio Visual </ListItem>
              <ListItem>Networking Products </ListItem>
              <ListItem>Surveillance Camera </ListItem>
              <ListItem>Home Automation </ListItem>
              <ListItem>24x7 Support </ListItem>
            </ul>
          </DividedCardContent>
        </DividedCardLayout>
      </PageSection>
    </Page>
  );
}
