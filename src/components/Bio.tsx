import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <div className="bio-profile">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-mark.png"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
        <div className="bio-copy">
          <strong><a href="https://twitter.com/MarkKoberlein">Mark Koberlein</a></strong>
          <p><em>Prof. of Interactive Design. Amateur Japan Tour Guide & Batman Historian. 
          <a href="https://twitter.com/NJCAAE">@NJCAAE</a> Coach & award-winning theater actor.</em></p>
        </div>
      </div>
      <div className="bio-profile">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-tim.jpg"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
        <div className="bio-copy">
          <strong><a href="https://twitter.com/tjlytle">Tim Lytle</a></strong>
          <p><em>Bible Believer, API / Platform Guy, Developer&nbsp; 
          <a href="https://twitter.com/phoneburner">@phoneburner</a>,&nbsp; 
          <a href="https://twitter.com/lvtech">@lvtech</a> Wrangler,
          former <a href="https://twitter.com/beckoncall">@beckoncall</a>&nbsp;  
          & DevRel <a href="https://twitter.com/nexmo">@nexmo</a>, 
          Future Futurist, Sometime Writer & Speaker</em></p>
        </div>
      </div>
    </div>
  )
}

export default Bio
