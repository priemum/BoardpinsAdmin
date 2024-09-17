export const OverviewCard = ({ title, items }) => (
    <div className="OverviewCard shadow-custom rounded-xl mt-3 p-2  mb-3">
      <h3 className="font-bold text-lg py-2 px-3">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 py-3">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2">
            <img src={item.image} className="w-[60px] h-[60px]" alt="icon" />
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
  