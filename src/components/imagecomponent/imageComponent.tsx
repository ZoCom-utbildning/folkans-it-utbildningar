import FormImage from "../image/Image";

type Props = {
  formImage: string;
  altImage: string;
};

function ImageComponent({ formImage, altImage }: Props) {
  return (
    <section className="image_section">
      <FormImage src={formImage} alt={altImage} />
    </section>
  );
}

export default ImageComponent;
