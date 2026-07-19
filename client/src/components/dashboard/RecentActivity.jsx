const activities = [
  "Uploaded CompanyPolicy.pdf",
  "Processed HR Ticket",
  "Generated AI Resolution",
  "Knowledge Base Updated",
];

function RecentActivity() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8">

      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activities.map((activity) => (

          <div
            key={activity}
            className="border rounded-xl p-4 hover:bg-slate-50 transition"
          >
            {activity}
          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentActivity;