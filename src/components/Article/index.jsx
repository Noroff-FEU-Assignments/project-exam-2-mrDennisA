import ReactMarkdown from "react-markdown";

// Components
import Heading from "../common/Heading";
import ButtonCTA from "../common/Buttons/ButtonCTA";
import ResponsiveImage from "../common/ResponsiveImage";

// Styles
import { Section, Article, RichText } from "./index.styled";

export default function ArticleComp({ data }) {
  return (
    <Section>
      {data.map((item) => {
        const { id, title, text, pageLink, imageDirections, imagePercent, heading } = item;
        // console.log(item);

        return (
          <Article key={id} className={imageDirections}>
            <div>
              {title ? <Heading element={heading}>{title}</Heading> : ""}
              <RichText>
                <ReactMarkdown>{text}</ReactMarkdown>
              </RichText>
              {pageLink.data ? <ButtonCTA to={pageLink.data.attributes.slug}>Learn more</ButtonCTA> : ""}
            </div>
            <div className={imagePercent}>
              {item.imagegroup[0].image.data.map((item) => {
                return (
                  <div key={item.id}>
                    <ResponsiveImage data={item.attributes} />
                  </div>
                );
              })}
            </div>
          </Article>
        );
      })}
    </Section>
  );
}
