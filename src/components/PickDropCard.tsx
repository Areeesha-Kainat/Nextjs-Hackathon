
import Dropdown from './Dropdown';

interface PickDropCardProps {
  title: string;
}

const PickDropCard: React.FC<PickDropCardProps> = ({ title }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 w-full">
      {/* Title */}
      <h3 className="text-lg font-bold text-gray-700 mb-4">{title}</h3>
      
      {/* Dropdowns in a Row */}
      <div className="flex items-center justify-between gap-4">
        <Dropdown label="Locations" options={['City A', 'City B', 'City C']} />
        <Dropdown label="Date" options={['Today', 'Tomorrow', 'Next Week']} />
        <Dropdown label="Time" options={['Morning', 'Afternoon', 'Evening']} />
      </div>
    </div>
  );
};

export default PickDropCard;
