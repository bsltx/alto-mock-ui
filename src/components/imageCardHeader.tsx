import mapIcon from 'src/assets/images/Map_icon.png';

interface ImageCardHeaderProps {
  cardType: string;
  imgSrc: string;
  imgAlt: string;
  isMap: boolean;
}

const ImageCardHeader = ({
  cardType,
  imgSrc,
  imgAlt,
  isMap
}: ImageCardHeaderProps) => {
  const style = { backgroundImage: `url(${process.env.PUBLIC_URL}${imgSrc})` };
  return (
    <div
      style={style}
      role='img'
      aria-label={imgAlt}
      className={`image-card-header ${cardType}-image`}
    >
      {isMap && <img src={mapIcon} alt='Map Icon' />}
    </div>
  );
};

export default ImageCardHeader;
