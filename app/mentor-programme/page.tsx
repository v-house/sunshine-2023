import React from "react";

const BuddyProgram = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center mb-4">
        Sunshine Mentor Program
      </h1>
      <p className="text-lg text-center mb-6">
        Sunshine is happy to present you the Buddy Program. In this program, we
        invite volunteers from the student body to be a Buddy to support their
        batch/peers of their Department. There can be multiple buddies from a
        single batchs department.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Duties (not exhaustive):</h2>
      <ul className="list-disc ml-6">
        <li>
          Coordinate Departmental Catch-up sessions, intra and inter batches.
        </li>
        <li>
          Point of contact for help and resources for Social, Mental and
          Academic help.
        </li>
        <li>Helping Sunshine to reach out to your peers.</li>
        <li>Sharing insights on departmental group sessions and activities.</li>
        <li>
          Represent the class on behalf of any grievances or a collective issue.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold my-4">
        Benefits (not exhaustive):
      </h2>
      <ul className="list-disc ml-6">
        <li>Certificate.</li>
        <li>Personalized sessions.</li>
        <li>Networking.</li>
      </ul>
      <p className="text-center mt-8">
        (On average, 1 hour per week is required for this program)
      </p>
    </div>
  );
};

export default BuddyProgram;
