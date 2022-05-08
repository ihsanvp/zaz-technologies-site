import classNames from "classnames";
import {
  FormEvent,
  FormEventHandler,
  Fragment,
  KeyboardEvent,
  TextareaHTMLAttributes,
} from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function FluidTextArea(props: Props) {
  function getHeight(value: string) {
    const numberOfLineBreaks = (value.match(/\n/g) || []).length;

    // min-height + lines x line-height + padding + border
    const height = 26 + 16 + numberOfLineBreaks * 24;

    console.log(numberOfLineBreaks, height);

    return height;
  }

  function parseAfterClassNames() {
    return props.className
      ? props.className
          .split(" ")
          .map((styleClassName) => `after:${styleClassName.trim()}`)
          .join(" ")
      : "";
  }

  function onInput(e: FormEvent<HTMLTextAreaElement>) {
    // @ts-ignore
    e.target.parentNode.dataset.replcatedValue = e.target.value;
  }

  return (
    // <Fragment>
    //   <div
    //     className={classNames(
    //       parseAfterClassNames(),
    //       'w-full grid after:whitespace-pre-wrap after:invisible after:content-[attr(data-replicated-value) " "] '
    //     )}
    //   >
    //     <textarea
    //       {...props}
    //       className={classNames(
    //         props.className,
    //         "resize-none w-full block overflow-hidden"
    //       )}
    //       rows={1}
    //       onInput={onInput}
    //     />
    //   </div>
    //   <style jsx>
    //     {`
    //       div > textarea,
    //       div::after {
    //         grid-area: 1 / 1 / 2 / 2;
    //       }
    //       div::after {
    //         background: red;
    //       }
    //     `}
    //   </style>
    // </Fragment>
    <Fragment>
      <div className="grow-wrap">
        <textarea name="text" id="text" onInput={onInput}></textarea>
      </div>
      <style jsx>
        {`
          .grow-wrap {
            display: grid;
          }
          .grow-wrap::after {
            display: block;
            content: attr(data-replicated-value) " ";
            white-space: pre-wrap;
          }
          .grow-wrap > textarea {
            resize: none;
            overflow: hidden;
          }
          .grow-wrap > textarea,
          .grow-wrap::after {
            border: 1px solid black;
            padding: 0.5rem;
            font: inherit;

            grid-area: 1 / 1 / 2 / 2;
          }
        `}
      </style>
    </Fragment>
  );
}
