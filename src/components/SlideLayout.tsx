
import { ReactNode } from 'react';

interface SlideLayoutProps {
  children: ReactNode;
  bgClass?: string;
}

const SlideLayout = ({ children, bgClass = "bg-gradient-to-br from-blue-100 to-purple-100" }: SlideLayoutProps) => {
  return (
    <div className={`w-full h-screen flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 ${bgClass}`}>
      <div className="max-w-6xl w-full h-full flex flex-col slide-content">
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;
