
export const ProjectCard = ({ items }) => (
    <div className="OverviewCard shadow-custom rounded-lg p-4  h-full ">
      <h3 className="font-bold text-lg py-3">Your Quick Stats</h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 py-6">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2 my-3">
            <div
              src={item.image}
              className={`lg:w-[60px] lg:h-[60px]  w-[50px] h-[50px] flex items-center justify-center  rounded-full`}
              style={{ color: item.color, backgroundColor: item.bgColor }}
            >
              {item.icon}
            </div>
            <div>
              <h3 style={{ color: item.color }} className="font-bold text-2xl">
                {item.value}
              </h3>
              <p className="text-xs text-[#292D32] font-[400]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  