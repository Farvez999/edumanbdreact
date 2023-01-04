import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://edumanbd.com/wp-content/uploads/2022/11/Student-Teacher-Information-System-1024x683.png" style={{height:'80vh', width:'150vh'}} />
    <div>
      <h1 className="text-5xl font-bold">Student & Teacher Information System</h1>
      <p className="py-6">Can create, update Student Database with student’s details information with photo. Also possible student Migration to next class, enable & disable any student and a lots of reports like summary, details, thought list, section wise, class wise, category wise, at a glance etc. Add, update, enable, disable a teacher or staff. Assign class teacher or subject teacher. Also view Teacher or staff related summary or details reports</p>
      
    </div>
  </div>
</div>
  )
}

export default Hero