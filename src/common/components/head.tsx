import { Helmet } from "react-helmet-async";

export type HeadProps = {
  description: string;
  title?: string;
};

export function Head({ description, title }: HeadProps): JSX.Element {
  return (
    <Helmet>
      <title>{title ? `${title} | TaskGuard` : "TaskGuard"}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
