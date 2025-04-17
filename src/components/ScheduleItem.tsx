
interface ScheduleItemProps {
  time: string;
  title: string;
  speakers?: string;
  description?: string;
}

const ScheduleItem = ({ time, title, speakers, description }: ScheduleItemProps) => {
  return (
    <div className="mb-6 border-l-4 border-blue-500 pl-4">
      <div className="text-purple-700 font-medium">{time}</div>
      <h3 className="text-xl font-bold text-blue-900">{title}</h3>
      {speakers && <div className="text-gray-700 italic">Speakers: {speakers}</div>}
      {description && <p className="mt-2 text-gray-600">{description}</p>}
    </div>
  );
};

export default ScheduleItem;
