import React from 'react'

import FitnessSVG from './svg/elements/FitnessSVG'
import LifestyleSVG from './svg/elements/LifestyleSVG'
import NutritionSVG from './svg/elements/NutritionSVG'
import MindsetSVG from './svg/elements/MindsetSVG'

const Elements = ({ name }) => (
   <div className="elements">
      <div className="elements__item">
         <div className="elements__icon elements__icon--fitness">
            <FitnessSVG />
         </div>
         <h2 className="elements__heading">Fitness</h2>
         <span className="elements__caption">
            Exercise should not be mundane, nor a chore. We aim to expose each member to different ways of exercising that stimulate the mind and challenge the body.
         </span>
      </div>
      <div className="elements__item">
         <div className="elements__icon elements__icon--lifestyle">
            <LifestyleSVG />
         </div>
         <h2 className="elements__heading">Lifestyle</h2>
         <span className="elements__caption">
            Improve life choice that will impact your health positively whilst maintaining your sense of self.
         </span>
      </div>
      <div className="elements__item">
         <div className="elements__icon elements__icon--nutrition">
            <NutritionSVG />
         </div>
         <h2 className="elements__heading">Nutrition</h2>
         <span className="elements__caption">
            Move your taste buds. Become more educated on nutritional and healtheir food alternatives. Become a nutrition maestro.
         </span>
      </div>
      <div className="elements__item">
         <div className="elements__icon elements__icon--mindset">
            <MindsetSVG />
         </div>
         <h2 className="elements__heading">Mindset</h2>
         <span className="elements__caption">
            Gradual changes in behaviour will make progressions sustainable. Become the master of your actions.
         </span>
      </div>
   </div>
)

export default Elements