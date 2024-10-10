import { IHome } from "../types";

interface IgenerateMetada {
  baseUrl: string;
  home: IHome;
}

export function generateMetadata({ baseUrl, home }: IgenerateMetada) {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseUrl}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}