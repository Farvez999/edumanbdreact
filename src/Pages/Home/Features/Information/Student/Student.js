import React from "react";

const Student = () => {
  return (
   
    <div className="grid grid-cols-2 gap-6 p-10">
      <div className="shadow-md gap-6 p-6">
        <h1 className="text-5xl font-bold">Student Parent Mobile App</h1>
        <p className="py-8">
          Now Eduman in Hand. Eduman Have Mobile App for android user. User can
          download from Google play store this app. Student, teacher, Parents
          can individually access this app. Teacher can input marks, take
          attendance and many others activities from app. Parents show Notice,
          Notification, there child attendance, result information. Parents can
          also pay there child fees from this app.
        </p>
        <img
          src="https://edumanbd.com/wp-content/uploads/2022/11/Student-Parent-Mobile-App.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
      </div>

      <div className="shadow-md gap-6 p-6">
        <h1 className="text-5xl font-bold">Dynamic Website</h1>
        <p className="py-8">
          Eduman offer two type of dynamic website. Standard and Premium. This
          website is easy to configure and maintenance. Eduman is integrated
          with this dynamic website directly. Attractive design and look, user
          friendly and most useful for institute. This website specially
          developed by following the guidelines of Govt. Education Ministry
          Circulation. For that it is fully aligned with govt. instruction.
        </p>
        <img
          src="https://edumanbd.com/wp-content/uploads/2022/09/Software-UI-3.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
      </div>
    </div>

   
  );
};

export default Student;
