import classNames from "classnames";
import InputField from "components/common/InputField";

export default function ContactForm() {
  return (
    <form className="col-span-6 lg:col-span-4 bg-white rounded-md p-10 flex flex-col gap-5">
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
    </form>
  );
}
