import siteData from "data/site";
import Head from "next/head";
import { Fragment, ReactNode } from "react";

interface Props {
  title?: string;
  description?: string;
  children?: ReactNode;
  head?: ReactNode;
  withSpace?: boolean;
}

export default function Page(props: Props) {
  return (
    <Fragment>
      <Head>
        <title>{props.title || siteData.title}</title>
        <meta
          name="description"
          content={props.description || siteData.description}
        />
        {props.head}
      </Head>
      <div
        style={{
          paddingTop: props.withSpace ? 60 : 0,
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
}
