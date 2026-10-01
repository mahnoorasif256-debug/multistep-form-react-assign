import React, { useState } from 'react'
import Step1 from './Step1'
import Review from './Review'
import '../Forms/Main.css';
import Step2 from './Step2';

const Form = () => {
  let [step, setstep] = useState(1);
  let [data, setdata] = useState({
    name: "",
    email: "",
    contact: "",
    role: "",
    level: "",
    skills: [],
  });

const handlesubmit = (e) =>{
  e.preventDefault();
  console.log(data);

setstep(1);
  setdata({
  name: "",
    email: "",
    contact: "",
    role: "",
    level: "",
    skills: [],

  })
  
}



  const calculateProgress = () => {
    let filledCount = 0;
    if (data.name.trim() !== "") filledCount++;
    if (data.email.trim() !== "") filledCount++;
    if (data.contact.trim() !== "") filledCount++;
    if (data.role.trim() !== "") filledCount++;
    if (data.level.trim() !== "") filledCount++;
    if (data.skills && data.skills.length > 0) filledCount++;
    if (step === 3) return 100;
    return Math.min(filledCount * 16, 95);
  };

  const progressPercentage = calculateProgress();

  return (
    <>
      <form>
        {step === 1 && <Step1 data={data} setData={setdata} updatestep={setstep} currentStep={step} progressPercentage={progressPercentage} />}
        {step === 2 && <Step2 data={data} setData={setdata} updatestep={setstep} currentStep={step} progressPercentage={progressPercentage} />}
        {step === 3 && <Review data={data} updatestep={setstep} currentStep={step} progressPercentage={progressPercentage} />}
      </form>
    </>
  );
}

export default Form;