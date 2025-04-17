
import { ReactNode } from 'react';

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
}

const InfoCard = ({ icon, title, children }: InfoCardProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover-card">
      <div className="flex items-center mb-3">
        {icon && <div className="mr-3 text-blue-600 text-2xl">{icon}</div>}
        <h3 className="text-xl font-bold text-blue-900">{title}</h3>
      </div>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
