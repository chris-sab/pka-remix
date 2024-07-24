type ActicityProps = {
  id: string | number;
  title: string;
  date: Date | string;
};

export const ActivityCard = ({id, title, date }: ActicityProps) => {
  return (
    <div className="px-4 py-3 rounded border border-solid border-indigo-900 flex flex-row gap-3">
      <div className="text-indigo-900 text-base font-bold">
        Activity {id}:
      </div>
      <div className="text-indigo-900 text-base font-medium">
        {`${title} on ${date}`}
      </div>
    </div>
  );
};