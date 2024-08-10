"use client";
import React, { useState } from "react";
import { jobs } from "@/Constants/Career/jobs";
import { locations } from "@/Constants/Career/locations";
import { workTypes } from "@/Constants/Career/workTypes";
import { departments } from "@/Constants/Career/departments";
import JobBody from "./Job";

const JobList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [workType, setWorkType] = useState("");
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(10);

  const handleExpand = (jobId: number) => {
    setExpandedJobId(jobId === expandedJobId ? null : jobId);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleJobsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setJobsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      (searchTerm
        ? job.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true) &&
      (location ? job.location === parseInt(location) : true) &&
      (department ? job.department === parseInt(department) : true) &&
      (workType ? job.workType === parseInt(workType) : true)
  );

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl text-brownCust font-bold mb-6 text-center">
       Job Listings
      </h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search jobs..."
          className="border text-lightGray border-lightGray rounded px-4 py-2 w-full"
          onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select
          className="border text-lightGray border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Location</option>
          {locations.map((loc) => (
            <option key={loc.id} value={loc.id}>
              {loc.title}
            </option>
          ))}
        </select>
        <select
          className="border text-lightGray border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
          onChange={(e) => {setDepartment(e.target.value); setCurrentPage(1);}}
        >
          <option value="">Department</option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
        <select
          className="border text-lightGray border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
          onChange={(e) => {setWorkType(e.target.value); setCurrentPage(1);}}
        >
          <option value="">Work type</option>
          {workTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.type}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end mb-6">
        {filteredJobs.length > 10 && (
          <select
            className="border text-lightGray border-gray-300 rounded px-4 py-2"
            onChange={handleJobsPerPageChange}
            value={jobsPerPage}
          >
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
            <option value={30}>30 per page</option>
            <option value={40}>40 per page</option>
            <option value={50}>50 per page</option>
          </select>
        )}
      </div>
      <div className="space-y-4">
        {currentJobs.map((job, idx) => (
          <JobBody
            key={idx}
            job={job}
            isExpanded={job.id === expandedJobId}
            onExpand={() => handleExpand(job.id)}
          />
        ))}
        {filteredJobs.length === 0 && (
          <p className="text-center text-gray-500">
            No job listings match your criteria.
          </p>
        )}
      </div>
      {filteredJobs.length > jobsPerPage && (
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === idx + 1
                  ? "bg-brownCust text-white"
                  : "text-brownCust border-brownCust border hover:bg-brownCust hover:text-white"
              }`}
              onClick={() => handlePageChange(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
