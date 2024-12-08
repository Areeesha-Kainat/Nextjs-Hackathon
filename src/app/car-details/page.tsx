import Filter from "@/components/Filter";
import ImageGallery from "@/components/ImageGallery";
import CarDetails from "@/components/CarDetails";
import Reviews from "@/components/Reviews";
import CarList from "@/components/CarList";

const CarPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (Filter) */}
        <div className="lg:col-span-3">
          <Filter />
        </div>

        {/* Middle Column (Image Gallery) */}
        <div className="lg:col-span-6">
          <ImageGallery />
        </div>

        {/* Right Column (Car Details) */}
        <div className="lg:col-span-3">
          <CarDetails />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-6">
        <Reviews />
      </div>

      {/* Car List Section */}
      <div className="mt-12">
        <CarList />
      </div>
    </div>
  );
};

export default CarPage;
