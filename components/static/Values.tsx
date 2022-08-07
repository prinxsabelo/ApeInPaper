import Goals from "./Goals"
import Growth from "./Growth"
import OurValue from "./OurValue"
import Team from "./Team"
import Truth from "./Truth"
import Verify from "./Verify"
import WeAre from "./WeAre"

const Values = ({coreValues, whoWeAre, ourGrowth, service, ourTeam, commentSection, trustedByNftSection}:any) => {
  return (
    <>
        {/* Our Values */}
        <OurValue coreValues={coreValues}/>
        {/* Who are we */}
        <WeAre whoWeAre={whoWeAre}/>
        {/* Growth Journey */}
        <Growth ourGrowth={ourGrowth}/>
        {/* Trusted By */}
        <Truth trustedByNftSection={trustedByNftSection}/>
        {/* Team */}
        <Team service={service} ourTeam={ourTeam}/>
        {/* Verify */}
        <Verify commentSection={commentSection}/>
        {/* Our Goal */}
        {/* <Goals/> */}
    </>
  )
}

export default Values