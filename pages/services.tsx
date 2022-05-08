import Page from "components/common/Page";
import ServiceDisplay from "components/ServiceDisplay";

import securityImage from "assets/images/Image-7.jpg";
import itImage from "assets/images/Image-8.jpg";
import accessImage from "assets/images/Image-9.jpg";
import videoImage from "assets/images/Image-10.jpg";
import audioImage from "assets/images/Image-11.jpg";
import cableImage from "assets/images/Image-12.jpg";
import fibreImage from "assets/images/Image-13.jpg";
import PageTitle from "components/common/PageTitle";

export default function ServicesPage() {
  return (
    <Page>
      <div className="container mx-auto py-20">
        <div className="flex items-center justify-center">
          <PageTitle>Our Services</PageTitle>
        </div>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-10">
          <ServiceDisplay
            image={securityImage}
            icon="security"
            title="CCTV Security Systems & Solutions"
          >
            To improve the security at home or business sites, we at ZAZ Retail
            have extensive product experience in order to provide innovative &
            customised solutions that matches your exact needs. We have lots of
            options with quality and advanced hybrid security systems.
          </ServiceDisplay>
          <ServiceDisplay
            image={itImage}
            icon="it"
            title="IT Network Infrastructure Solutions & Services"
          >
            We at ZAZ Retail, offers a wide range of best end user experiences
            with our IT networking solutions and comprises all components that
            enable network communication, operations and connectivity. Our
            state-of-the-art infrastructure solutions is compatible with almost
            every industry and helps you stay ahead of your competitors
            maintaining your infrastructure quality.
          </ServiceDisplay>
          <ServiceDisplay
            image={accessImage}
            icon="access"
            title="Access Control Systems"
          >
            ZAZ Retail is one of the leading providers of robust access control
            systems for businesses across the industries that improves user
            convenience and security. Our solutions evolve with the industry,
            embracing the latest technologies to deliver comprehensive and
            modern Access Control Solutions to our clients, which is highly
            flexible and cost-effective.
          </ServiceDisplay>
          <ServiceDisplay
            image={videoImage}
            icon="video"
            title="Video Intercom Systems"
          >
            Our Video Intercom Systems, provides a standard solution equipped
            for better communication and security. We bring you the industry’s
            latest intercom systems with efficient design, high performance,
            reliable as well as water resistant. All our solutions are easy to
            configure and managed by our team of professionals who will work
            with you at each stage of seamless integration.
          </ServiceDisplay>
          <ServiceDisplay
            image={audioImage}
            icon="audio"
            title="Audio Visual Systems"
          >
            At ZAZ Retail, we offer Audio Visual Systems & Solutions that can
            equip organisations with leading cutting-edge tools to enhance team
            performance, tailored to your business requirements. Our dedicated
            team of specialised subject matter experts and technicians can
            handle complex and large projects. We mainly focus in the areas of
            Professional Audio System, Video Wall Systems, Smart Meeting Rooms
            etc.
          </ServiceDisplay>
          <ServiceDisplay
            image={cableImage}
            icon="cable"
            title="Structured Cabling"
          >
            ZAZ Retail offers expert structured cabling solutions and helps to
            design your space intelligently which benefits you of structured
            cabling to your projects. We have a portfolio of top-notch and
            client-oriented cabling services and solutions developed by our team
            of networking specialists and proactively manage the process till
            the completion of project and required support afterwards. We aim to
            provide international quality benchmark standards offering
            unrivalled network speed, reliability & security.
          </ServiceDisplay>
          <ServiceDisplay
            image={fibreImage}
            icon="fibre"
            title="Fibre Installations"
          >
            ZAZ Retail offers efficient, flexible and customised fibre optic
            cabling services deploying its highly skilled and technically
            experienced workforce. We provide smart solutions to integrate
            networks with modern infrastructure, choosing the right fibre optic
            services and solutions. We ensure to provide you highly efficient
            and flexible optic fibre installation services.
          </ServiceDisplay>
        </div>
      </div>
    </Page>
  );
}
