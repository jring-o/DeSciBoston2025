
import { ReactNode } from 'react';

interface SlideContentProps {
  children: ReactNode;
}

const SlideContent = ({ children }: SlideContentProps) => {
  return (
    <div className="flex-1 overflow-auto">
      {children}
    </div>
  );
};

export default SlideContent;
