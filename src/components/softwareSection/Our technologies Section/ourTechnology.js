import React from 'react';
import OurTechnologiesRegular from './ourTechnologiesRegular';
import OurTechnologiesXsScreen from './ourTechnologiesXsScreen';
import vueJS from "../../../assets/sectionsImages/programmingLang/vueJS.svg"
import appStore from "../../../assets/sectionsImages/programmingLang/appStore.svg"
import laravel from "../../../assets/sectionsImages/programmingLang/laravel.svg"
import mySql from "../../../assets/sectionsImages/programmingLang/mySql.svg"
import flutter from "../../../assets/sectionsImages/programmingLang/flutter.svg"
import designTech from "../../../assets/sectionsImages/programmingLang/designTech.svg"
import ReactImg from "../../../assets/sectionsImages/programmingLang/React.svg"
import fireBase from "../../../assets/sectionsImages/programmingLang/fireBase.svg"


const programmingLang = [
  { id: 1, img: vueJS },
  { id: 2, img: appStore },
  { id: 3, img: laravel },
  { id: 4, img: mySql },
  { id: 5, img: flutter },
  { id: 6, img: designTech },
  { id: 7, img: ReactImg },
  { id: 8, img: fireBase },
]
const OurTechnologies = () => {
  return (
    <>
      <OurTechnologiesRegular programmingLang={programmingLang} />

      {/* // xs  */}

      <OurTechnologiesXsScreen programmingLang={programmingLang} />
    </>
  );
};

export default OurTechnologies;
