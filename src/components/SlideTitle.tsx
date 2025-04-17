
interface SlideTitleProps {
  title: string;
  subtitle?: string;
}

const SlideTitle = ({ title, subtitle }: SlideTitleProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-2">{title}</h2>
      {subtitle && <p className="text-xl md:text-2xl text-purple-700">{subtitle}</p>}
    </div>
  );
};

export default SlideTitle;
