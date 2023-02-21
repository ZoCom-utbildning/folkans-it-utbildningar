import "./image.scss";

interface Props {
  src: string;
  alt: string;
}

function Image({ src, alt }: Props) {
  return (
    <figure className="gradientImageWrapper">
      <img className="image" src={src} alt={alt} />
      <div className="gradient"> </div>
    </figure>
  );
}

export default Image;