import { Grid } from "@mui/material";
import React from "react";
import SpaceNetLayout from "../components/spaceNetLayout";
import {motion} from "framer-motion"
import LetsProject from "../components/letsProject";
import WhichCourse from "../components/academics/whichCourse";

export default function Academics(){

    return(
        <>
        <motion.div>
              <Grid className="root-container"
                    sx={{
                        padding: {
                            lg: "134px 75px 0 75px",
                            md: "124px 75px 0 75px",
                            sm: "100px 25px 0 25px",
                            xs: "100px 25px 0 25px",
                        },
                    }}
                >
             
        </Grid>
        <WhichCourse/>
        <LetsProject
         text1={<>Got a Great Idea?<br /> Ready to Bring it to Life?</>}
         text2="Let’s make it happen"
         btnText="Let’s Talk business!"
         cardBg="#FA6423"
         text1Color="#FFFFFF"
         text2Color="#FFFFFF"
        />
        <SpaceNetLayout/>
        </motion.div>
      
        </>
    )
}