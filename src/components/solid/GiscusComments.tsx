import Giscus from "@giscus/solid";

interface Props {
  slug: string;
  lang: string;
}

export default function GiscusComments(props: Props) {
  return (
    <Giscus
      id="comments"
      repo="ilfroloff/ilfroloff.github.io"
      repoId="MDEwOlJlcG9zaXRvcnkyNDQ3NDg3OA=="
      category="Announcements"
      categoryId="DIC_kwDOAXV0_s4DK6oY"
      mapping="specific"
      term={props.slug}
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang={props.lang}
      loading="lazy"
    />
  );
}
