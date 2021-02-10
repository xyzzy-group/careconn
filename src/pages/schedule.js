import * as React from "react";
import SEO from "../components/SEO";

const SchedulePage = () => {
  return (
    <div>
      <SEO title="Schedule" />
      <h1 className="text-4xl text-secondary text-center mb-5">Schedule</h1>
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=21610837"
        title="Schedule Appointment"
        width="100%"
        height="800"
        frameBorder="0"></iframe>
      <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
    </div>
  );
};

export default SchedulePage;
