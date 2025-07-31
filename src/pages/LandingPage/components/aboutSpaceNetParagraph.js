import React from 'react'
import { useTranslation } from 'react-i18next'

function AboutSpaceNetParagraph({is15Inch, is14Inch, isTabScreen}) {
    const {t} = useTranslation()
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="scrolling-content"
                style={{
                    paddingBottom: is15Inch || is14Inch ? "18px" : "24px",
                    marginTop: isTabScreen ? "15%" : "25%",
                    textAlign: "center",
                }}
            >
                {t("aboutSpaceNet.about")}
            </span>
            <span className="scrolling-content"
                style={{
                    paddingBottom: is15Inch || is14Inch ? "18px" : "24px",
                    textAlign: "center"
                }}
            >
                {t("aboutSpaceNet.about")}
            </span>
            <span className="scrolling-content"
                style={{
                    paddingBottom: is15Inch || is14Inch ? "18px" : "24px",
                    textAlign: "center"
                }}
            >
                {t("aboutSpaceNet.about")}
            </span>
            <span className="scrolling-content" 
                style={{ textAlign: "center" }}
            >
                {t("aboutSpaceNet.about")}
            </span>
        </div>
    )
}

export default AboutSpaceNetParagraph
