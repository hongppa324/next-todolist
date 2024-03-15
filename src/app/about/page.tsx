import React from "react";

const AboutPage = async () => {
  const response = await fetch(`http://localhost:4000/companyInfo`);
  const companyInfo = await response.json();

  return (
    <div className="flex-column text-center m-4 border-4">
      <p>회사명 : {companyInfo.name}</p>
      <p>회사 소개 : {companyInfo.description}</p>
    </div>
  );
};

export default AboutPage;
