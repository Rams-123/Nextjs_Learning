type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <p className="text-center mt-10 font-semibold text-xlunderline underline-offset-4 decoration-[1px]">
      {title}
    </p>
  );
};

export default Title;
