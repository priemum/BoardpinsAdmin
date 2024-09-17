export const ProductionGroups = ({ items }) => (
    <div className=" shadow-custom rounded-lg p-4 mb-3">
      <h3 className="font-bold text-lg">Production Groups Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-6">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2">
            <img
              src={item.image}
              className="lg:w-[60px] lg:h-[60px] w-[50px] h-[50px]"
              alt="icon"
            />
            <div>
              <h3 className="font-[800] text-[#292D32] text-lg">{item.value}</h3>
              <p className="text-xs text-[#292D32] font-[400]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  