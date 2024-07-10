"use client";
import React, { useState } from "react";
import { jobs } from "@/Constants/Career/jobs";
import { locations } from "@/Constants/Career/locations";
import { workTypes } from "@/Constants/Career/workTypes";
import { departments } from "@/Constants/Career/departments";

const JobList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [workType, setWorkType] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      (searchTerm
        ? job.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true) &&
      (location ? job.location === parseInt(location) : true) &&
      (department ? job.department === parseInt(department) : true) &&
      (workType ? job.workType === parseInt(workType) : true)
  );

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
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl text-brownCust font-bold mb-6 text-center">
        WE ARE HIRING!
      </h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search jobs..."
          className="border text-darkBlue border-gray-300 rounded px-4 py-2 w-full"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select
          className="border text-darkBlue border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
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
          className="border text-darkBlue border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Department</option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
        <select
          className="border text-darkBlue border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
          onChange={(e) => setWorkType(e.target.value)}
        >
          <option value="">Work type</option>
          {workTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.type}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div key={job.id} className="border border-gray-300 rounded p-4">
            <p className="text-gray-500">{postedOn(job.postedDate)}</p>
            <h2 className="text-xl font-bold text-blue-800">{job.title}</h2>
            <p className="text-gray-700 mt-5">
              {locations.find((loc) => loc.id === job.location)?.title} -{" "}
              {workTypes.find((type) => type.id === job.workType)?.type}
            </p>
            <div className="flex justify-end mt-2">
              <button className="text-brownCust border border-brownCust px-4 py-2 rounded hover:bg-brownCust hover:text-white">
                READ MORE
              </button>
            </div>
          </div>
        ))}
        {filteredJobs.length === 0 && (
          <p className="text-center text-gray-500">
            No job listings match your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default JobList;
