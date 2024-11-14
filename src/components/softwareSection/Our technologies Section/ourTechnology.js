import React from 'react';
import lang1 from "../../../assets/sectionsImages/programmingLang/programLang.svg"
import OurTechnologiesRegular from './ourTechnologiesRegular';
import OurTechnologiesXsScreen from './ourTechnologiesXsScreen';
const programmingLang = [
  { id: 1, img: lang1 },
  { id: 2, img: lang1 },
  { id: 3, img: lang1 },
  { id: 4, img: lang1 },
  { id: 5, img: lang1 },
  { id: 6, img: lang1 },
  { id: 7, img: lang1 },
  { id: 8, img: lang1 },
]
const OurTechnologies = () => {
  return (
    <>
      <OurTechnologiesRegular programmingLang={programmingLang}/>

      {/* // xs  */}

     <OurTechnologiesXsScreen programmingLang={programmingLang}/>
    </>
  );
};

export default OurTechnologies;
