import { useState } from "react";

export default function JobApplicationForm() {
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    profession: "",
    experienceYears: "",
    employmentStatus: "",
  });

  const [errors, setErrors] = useState({});
  const [applicants, setApplicants] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function validate() {
    const newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.age.trim()) newErrors.age = "Age is required";
    if (!form.profession.trim())
      newErrors.profession = "Profession is required";
    if (!form.experienceYears.trim())
      newErrors.experienceYears = "Years of experience is required";
    if (!form.employmentStatus.trim())
      newErrors.employmentStatus = "Employment status is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const newApplicant = {
      id: Date.now(),
      ...form,
    };

    setApplicants(prev => [...prev, newApplicant]);

    setForm({
      fullName: "",
      age: "",
      profession: "",
      experienceYears: "",
      employmentStatus: "",
    });
    setErrors({});
  }

  function handleDelete(id) {
    setApplicants(prev => prev.filter(a => a.id !== id));
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center py-10">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          Job Application Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.age && (
              <p className="mt-1 text-xs text-red-500">{errors.age}</p>
            )}
          </div>

          {/* Profession */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Profession
            </label>
            <input
              type="text"
              name="profession"
              value={form.profession}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.profession && (
              <p className="mt-1 text-xs text-red-500">
                {errors.profession}
              </p>
            )}
          </div>

          {/* Years of experience */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Years of experience
            </label>
            <input
              type="number"
              name="experienceYears"
              value={form.experienceYears}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.experienceYears && (
              <p className="mt-1 text-xs text-red-500">
                {errors.experienceYears}
              </p>
            )}
          </div>

          {/* Employment status */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Employment status
            </label>
            <select
              name="employmentStatus"
              value={form.employmentStatus}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">-- Select status --</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="student">Student</option>
              <option value="freelancer">Freelancer</option>
            </select>
            {errors.employmentStatus && (
              <p className="mt-1 text-xs text-red-500">
                {errors.employmentStatus}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">
            Applicants
          </h3>

          {applicants.length === 0 ? (
            <p className="text-sm text-slate-500">No applicants yet.</p>
          ) : (
            <ul className="space-y-3">
              {applicants.map(applicant => (
                <li
                  key={applicant.id}
                  className="flex items-start justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <div className="text-sm text-slate-800">
                    <p className="font-semibold">{applicant.fullName}</p>
                    <p className="text-xs text-slate-600">
                      Age: {applicant.age}
                    </p>
                    <p className="text-xs text-slate-600">
                      Profession: {applicant.profession}
                    </p>
                    <p className="text-xs text-slate-600">
                      Experience: {applicant.experienceYears} years
                    </p>
                    <p className="text-xs text-slate-600">
                      Status: {applicant.employmentStatus}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(applicant.id)}
                    className="ml-4 rounded-lg bg-red-500 px-3 py-1 text-xs font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}