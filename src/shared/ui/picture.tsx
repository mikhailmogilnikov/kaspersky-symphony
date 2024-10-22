interface Props {
  src: string;
  alt: string;
  width?: number | string;
  className?: string;
}

export const Picture = ({ src, width, className }: Props) => {
  return (
    <picture>
      <source srcSet={src} />
      <img alt={src} className={className} src={src} width={width} />
    </picture>
  );
};
