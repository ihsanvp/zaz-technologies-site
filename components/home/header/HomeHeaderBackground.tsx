import { Fragment } from "react";
import Image from "components/common/Image";
import styles from "styles/Home.module.css";
import { motion } from "framer-motion";

interface Props {
  img: ResponsiveImage;
}

export default function HomeHeaderBackground(props: Props) {
  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`absolute inset-0 -z-10 ${styles.header_overlay}`}
        ></div>
        <div className="absolute inset-0 -z-20">
          <Image
            className="w-full h-full object-cover"
            src={props.img}
            alt="header"
            sizes="100vw"
          />
        </div>
      </motion.div>
    </Fragment>
  );
}
