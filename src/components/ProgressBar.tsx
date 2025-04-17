
interface ProgressBarProps {
  currentSlide: number;
  totalSlides: number;
}

const ProgressBar = ({ currentSlide, totalSlides }: ProgressBarProps) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;
  
  return (
    <div className="w-full h-1 fixed top-0 left-0 right-0 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" 
        style={{ width: `${progress}%` }} 
      />
    </div>
  );
};

export default ProgressBar;
