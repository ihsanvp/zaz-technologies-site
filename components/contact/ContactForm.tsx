import classNames from "classnames";
import AnimatedAppear from "components/common/AnimatedAppear";
import InputField from "components/common/InputField";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <AnimatedAppear
      hidden={{ scale: 0.9, opacity: 0 }}
      visible={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, type: "spring", delay: 0.5 }}
    >
      {(animate) => (
        <motion.form
          {...animate}
          className="col-span-6 lg:col-span-4 bg-white rounded-md p-10 flex flex-col gap-5"
        >
          <InputField label="Name">
            {(props) => <input {...props} type="text" />}
          </InputField>
          <InputField label="Email">
            {(props) => <input {...props} type="email" />}
          </InputField>
          <InputField label="Phone Number">
            {(props) => <input {...props} type="text" />}
          </InputField>
          <InputField label="Message">
            {(props) => (
              <textarea
                {...props}
                className={classNames(props.className, "min-h-[168px]")}
              />
            )}
          </InputField>
          <input
            type="submit"
            value="Get Started"
            className="text-white bg-blue-900 hover:bg-blue-800 py-3 rounded mt-5"
          />
        </motion.form>
      )}
    </AnimatedAppear>
  );
}
