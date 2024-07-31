import { locations } from "@/Constants/Career/locations";
import { workTypes } from "@/Constants/Career/workTypes";

const JobBody = ({
  job,
  isExpanded,
  onExpand,
}: {
  job: JobType;
  isExpanded: boolean;
  onExpand: () => void;
}) => {
  const postedOn = (date: Date) => {
    const differenceInDays = Math.floor(
      (new Date().getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24)
    );
    if (differenceInDays > 0) {
      return `Posted ${differenceInDays} days ago`;
    }
    return `Posted On ${new Date(date).toLocaleDateString("en-US")}`;
  };

  return (
    <div key={job.id} className="border border-gray-300 rounded p-4">
      {/* <p className="text-lightGray">{postedOn(job.postedDate)}</p> */}
      {!isExpanded && (
        <>
          <h2 className="text-xl font-bold text-darkBlue">{job.title}</h2>
          <p className="text-lightGray mt-5">
            {locations.find((loc) => loc.id === job.location)?.title} -{" "}
            {workTypes.find((type) => type.id === job.workType)?.type}
          </p>
        </>
      )}
      <div className="flex justify-end mt-2">
        <button
          className={`px-4 py-2 rounded border ${
            isExpanded
              ? "bg-brownCust text-white border-brownCust"
              : "text-brownCust border-brownCust hover:bg-brownCust hover:text-white"
          }`}
          onClick={onExpand}
        >
          {isExpanded ? "SHOW LESS" : "READ MORE"}
        </button>
      </div>
      {isExpanded && (
        <div className="mt-4">
          <p className="font-bold text-darkBlue">
            Job Posting: {job.title}(
            {locations.find((loc) => loc.id === job.location)?.title})
          </p>
          {job.description.map((desc, index) => (
            <div key={index} className="mt-5">
              <span className="font-bold text-darkBlue">{desc.Heading}: </span>
              {desc.Descriptions.length === 1 ? (
                <span className="text-darkBlue mt-1">
                  {desc.Descriptions[0]}
                </span>
              ) : (
                <ul className="list-disc mt-1 text-darkGray pl-5">
                  {desc.Descriptions.map((d, i) => (
                    <li
                      className="text-darkBlue"
                      key={i}
                      style={{ paddingLeft: "5px", marginBottom: "10px" }}
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <p className="text-darkGray font-bold text-sm mt-2">How to Apply:</p>
          <p>
            Please send your resume to{" "}
            <a
              style={{ textDecoration: "underline" }}
              href={`mailto:${job.applyEmail}`}
            >
              {job.applyEmail}
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
};

export default JobBody;
