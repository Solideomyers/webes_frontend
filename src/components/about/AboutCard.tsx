import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Props {
  pathImg: string;
  text: string;
  placement?: boolean;
  color: string;
}

export const AboutCard: React.FC<Props> = ({
  pathImg,
  text,
  color,
  placement = false,
}) => {
  return (
    <div
      className={`rounded-xl p-4 gap-8 grid grid-cols-1 lg:grid-cols-2 place-items-center bg-${color}`}
    >
      <LazyLoadImage
        src={pathImg}
        alt='img company 3'
        className={`img-lazy rounded-xl col-span-1 ${
          placement ? 'lg:col-start-2' : 'lg:row-start-1'
        }`}
      />
      <p
        className={`text-2xl text-center ${
          placement ? 'lg:row-start-1' : 'lg:col-start-2'
        }`}
      >
        {text}
      </p>
    </div>
  );
};
