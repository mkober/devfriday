import * as React from "react"
import { Link } from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRss,
  faPodcast
} from '@fortawesome/free-solid-svg-icons'
import { 
  faSpotify,
  faItunes,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import {
  Container,
  Title,
  Level,
  LevelItem
} from "./UI";

const Subscribe = () => {

  return (
    <Container className="subscribe">
      <Title hasTextCentered>Subscribe</Title>
      <Level>
        <LevelItem>
          <Link to="https://open.spotify.com/show/3y5bmInPHt6dPUI3V5zZ1C">
            <FontAwesomeIcon icon={faSpotify} size="2x" fixedWidth />
          </Link>
        </LevelItem>
        <LevelItem>
          <Link to="https://podcasts.apple.com/us/podcast/dev-friday-show/id1592725281">
            <FontAwesomeIcon icon={faItunes} size="2x" fixedWidth />
          </Link>
        </LevelItem>
        <LevelItem>
          <Link to="https://podcastindex.org/podcast/4431922">
            <FontAwesomeIcon icon={faPodcast} size="2x" fixedWidth />
          </Link>
        </LevelItem>
        <LevelItem>
          <Link to="https://www.youtube.com/channel/UCAsGqLNc4t85MXbPUszcSyg">
            <FontAwesomeIcon icon={faYoutube} size="2x" fixedWidth />
          </Link>
        </LevelItem>
        <LevelItem>
          <Link to="https://twitter.com/devfridayshow">
            <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
          </Link>
        </LevelItem>
        <LevelItem>
          <Link to="https://devfridayshow.com/rss.xml">
            <FontAwesomeIcon icon={faRss} size="2x" fixedWidth />
          </Link>
        </LevelItem>
      </Level>
    </Container>
  )
}

export default Subscribe;
