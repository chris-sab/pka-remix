type ActivityType = {
  id: string | number;
  title: string;
  date: Date | string;
};

export const ActivityCard = ({id, title, date }: ActivityType) => {
  return (
    <div className="px-3 lg:px-4 py-1 lg:py-3 rounded border border-solid border-indigo-900 flex flex-col lg:flex-row gap-0 lg:gap-3">
      <div className="text-indigo-900 text-base font-bold">
        Activity {id}:
      </div>
      <div className="text-indigo-900 text-base font-medium line-clamp-1">
        {`${title} on ${date}`}
      </div>
    </div>
  );
};