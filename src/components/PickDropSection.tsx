
import PickDropCard from './PickDropCard';

const PickDropSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-6 px-6 py-10 bg-gray-100 rounded-lg shadow-md">
      {/* Pick-Up Card */}
      <PickDropCard title="Pick - Up" />

      {/* White Down Arrow */}
      <div className="bg-blue-600 w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-white text-xl lg:w-24 lg:h-12 lg:rounded-md">
        ↑↓
      </div>

      {/* Drop-Off Card */}
      <PickDropCard title="Drop - Off" />
    </section>
  );
};

export default PickDropSection;

