import React from "react";

const Sms = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row" >
        <img 
        src="https://media.istockphoto.com/id/1248699525/vector/hand-holding-mobile-phone-with-online-messages.jpg?s=612x612&w=0&k=20&c=q9iFQTrbrVySTC01wGqnguVM7WGlHhma4y1qDjx9tjA=" style={{height:'50vh',width:'150vh'}} />
        <div>
          <h1 className="text-5xl font-bold">SMS Notification System</h1>
          <p className="py-6">
          It’s a special feature of Eduman. Can send SMS to whole institute, class wise, section wise, category wise. Eduman also can send Different type of notification like Admission, Semester exam, Class test, Attendance, Fees due, Payslip, birthday etc.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Sms;
