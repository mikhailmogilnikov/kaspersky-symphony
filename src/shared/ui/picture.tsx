interface Props {
  src: string;
  srcSet?: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const Picture = (props: Props) => {
  const { srcSet, alt, ...restProps } = props;

  return (
    <picture>
      <source srcSet={srcSet || restProps.src} />
      <img {...restProps} alt={alt} />
    </picture>
  );
};
