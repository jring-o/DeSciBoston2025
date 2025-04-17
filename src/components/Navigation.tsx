
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Navigation = ({ currentSlide, totalSlides, onPrevious, onNext }: NavigationProps) => {
  return (
    <div className="flex justify-between w-full py-4">
      <button 
        onClick={onPrevious} 
        disabled={currentSlide === 0}
        className={`flex items-center text-lg px-4 py-2 rounded-md ${currentSlide === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
      >
        <FiArrowLeft className="mr-2" /> Previous
      </button>
      <div className="text-gray-600">
        {currentSlide + 1} / {totalSlides}
      </div>
      <button 
        onClick={onNext} 
        disabled={currentSlide === totalSlides - 1}
        className={`flex items-center text-lg px-4 py-2 rounded-md ${currentSlide === totalSlides - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
      >
        Next <FiArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default Navigation;
