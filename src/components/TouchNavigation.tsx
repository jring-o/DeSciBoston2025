
import { useEffect } from 'react';

interface TouchNavigationProps {
  onNext: () => void;
  onPrevious: () => void;
}

const TouchNavigation = ({ onNext, onPrevious }: TouchNavigationProps) => {
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };
    
    const handleSwipe = () => {
      const minSwipeDistance = 50;
      const swipeDistance = touchEndX - touchStartX;
      
      if (swipeDistance > minSwipeDistance) {
        onPrevious(); // Swipe right, go to previous
      } else if (swipeDistance < -minSwipeDistance) {
        onNext(); // Swipe left, go to next
      }
    };
    
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onNext, onPrevious]);
  
  return null;
};

export default TouchNavigation;
