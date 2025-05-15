"use client";

export function ResourcesHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">
          Helpful Tools
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mt-1">Resources</h1>
        <p className="text-slate-500 max-w-2xl mt-2">
          Helpful resources, guides, and contact information for business
          registration and compliance in the Philippines
        </p>
      </div>
    </div>
  );
}
