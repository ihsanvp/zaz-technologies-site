import Page from "components/common/Page";

import automationImage from "assets/images/Image-20.jpg";
import securityImage from "assets/images/Image-21.jpg";
import itImage from "assets/images/Image-8.jpg";
import accessImage from "assets/images/Image-9.jpg";
import videoImage from "assets/images/Image-10.jpg";
import audioImage from "assets/images/Image-22.jpg";
import cableImage from "assets/images/Image-12.jpg";
import fibreImage from "assets/images/Image-13.jpg";
import ServicesLayout from "components/services/ServicesLayout";

export default function ServicesPage() {
  return (
    <Page>
      <ServicesLayout
        title="Our Services"
        subtitle="ZAZ Retail delivers the ﬁnest products and services in the industry and treasure loyalty, teamwork and integrity."
        cards={[
          {
            title: "Automation Systems & Solutions",
            icon: "automation",
            image: automationImage,
            content: `We are dealing with a wide range of technologies and solutions to help minimise the human tasks by setting deﬁned rules
             and actions for the best results of higher productivity, efﬁciency, quality & safety.Our broad spectrum of cost-effective home &
              ofﬁce automation solutions by industry’s latest automation systems & technology allows you to control and secure your home and ofﬁce
               in the most modern way.`,
          },
          {
            title: "CCTV Security Systems & Solutions",
            icon: "security",
            image: securityImage,
            content: `To improve the security at home or business sites, we at ZAZ Retail have extensive product experience in order to provide innovative & customised solutions that matches your exact needs. We have lots of options with quality and advanced hybrid security systems.`,
          },
          {
            title: "IT Network Infrastructure Solutions & Services",
            icon: "it",
            image: itImage,
            content: `We at ZAZ Retail, offers a wide range of best end user experiences with our IT networking solutions and comprises all components that enable network communication, operations and connectivity. Our state-of-the-art infrastructure solutions is compatible with almost every industry and helps you stay ahead of your competitors maintaining your infrastructure quality.`,
          },
          {
            title: "Access Control Systems",
            icon: "access",
            image: accessImage,
            content: `ZAZ Retail is one of the leading providers of robust access control systems for businesses across the industries that improves user convenience and security. Our solutions evolve with the industry, embracing the latest technologies to deliver comprehensive and modern Access Control Solutions to our clients, which is highly ﬂexible and cost-effective.`,
          },
          {
            title: "Video Intercom Systems",
            icon: "video",
            image: videoImage,
            content: `Our Video Intercom Systems, provides a standard solution equipped for better communication and security. We bring you the industry’s latest intercom systems with efﬁcient design, high performance, reliable as well as water resistant. All our solutions are easy to conﬁgure and managed by our team of professionals who will work with you at each stage of seamless integration.`,
          },

          {
            title: "Audio Visual Systems",
            icon: "audio",
            image: audioImage,
            content: `At ZAZ Retail, we offer Audio Visual Systems & Solutions that can equip organisations with leading cutting-edge tools to enhance team performance, tailored to your business requirements. Our dedicated team of specialised subject matter experts and technicians can handle complex and large projects. We mainly focus in the areas of Professional Audio System, Video Wall Systems, Smart Meeting Rooms etc.`,
          },
          {
            title: "Structured Cabling",
            icon: "cable",
            image: cableImage,
            content: `ZAZ Retail offers expert structured cabling solutions and helps to design your space intelligently which beneﬁts you of structured cabling to your projects. We have a portfolio of top-notch and client-oriented cabling services and solutions developed by our team of networking specialists and proactively manage the process till the completion of project and required support afterwards. We aim to provide international quality benchmark standards offering unrivalled network speed, reliability & security.`,
          },
          {
            title: "Fibre Installations",
            icon: "fibre",
            image: fibreImage,
            content: `ZAZ Retail offers efﬁcient, ﬂexible and customised ﬁbre optic cabling services deploying its highly skilled and technically experienced workforce. We provide smart solutions to integrate networks with modern infrastructure, 
            choosing the right ﬁbre optic services and solutions. We ensure to provide you highly efﬁcient and ﬂexible optic ﬁbre installation services.`,
          },
        ]}
      />
    </Page>
  );
}
