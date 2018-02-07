import * as React from 'react';

import {
  Jumbotron,
  MainText,
  BodyText,
  CtaButtonsWrapper,
  MainCtaButton,
  ContentWrapper,
  ContentHeader,
  HeaderEmphasis,
  TileContainer,
  ThinTile,
  TileIconHeaderWrapper,
  TileIconContainer,
  ThinTileIcon,
  ThinTileHeader,
  ThinTileText,
  WideTile,
  WideTileHeader,
  WideTileText,
} from 'RedocLy';

import { NavBar } from 'RedocLy/components/NavBar/NavBar';

const icon1 = require('./images/icon1.png');
const launchFastIcon = require('./images/launch-fast.svg');

export default function(props) {
  const { nav } = props.data;
  return (
    <div>
      <Jumbotron>
        <NavBar
          items={nav.horizontal}
          location={props.location}
          standalone={false}
        />
        <MainText>Your API Product</MainText>
        <BodyText>Aweseme moto that explains your API</BodyText>
        <CtaButtonsWrapper>
          <MainCtaButton inversed to="/getting-started/overview">
            See Overview
          </MainCtaButton>
          <MainCtaButton inversed transparent={true} to="/getting-started/quickstart">
            Quickstart
          </MainCtaButton>
        </CtaButtonsWrapper>
      </Jumbotron>
      <ContentWrapper>
        <ContentHeader>
          <HeaderEmphasis>Get started now!</HeaderEmphasis> Using our Quickstart you can 
          do awesome things using our API within 15 minutes.
        </ContentHeader>
        <TileContainer>
          <ThinTile to="/getting-started/basics">
            <TileIconHeaderWrapper>
              <TileIconContainer>
                <ThinTileIcon src={icon1} />
              </TileIconContainer>
              <ThinTileHeader>Overview</ThinTileHeader>
            </TileIconHeaderWrapper>
            <ThinTileText>
              Get a brief overview of our API
            </ThinTileText>
          </ThinTile>

          <ThinTile to="/getting-started/quickstart">
            <TileIconHeaderWrapper>
              <TileIconContainer>
                <ThinTileIcon src={launchFastIcon} />
              </TileIconContainer>
              <ThinTileHeader>Quickstart</ThinTileHeader>
            </TileIconHeaderWrapper>
            <ThinTileText>
              Send your first API requests within 15 minutes.
            </ThinTileText>
          </ThinTile>
        </TileContainer>
        <ContentHeader>
          <HeaderEmphasis>Need help?</HeaderEmphasis>We are here for you...
        </ContentHeader>
        <TileContainer>
          <WideTile to="/faq">
            <WideTileHeader>FAQs</WideTileHeader>
            <WideTileText>
              Find answers to your most frequently asked questions.
            </WideTileText>
          </WideTile>
          <WideTile to="/contact">
            <WideTileHeader>Questions? Contact us</WideTileHeader>
            <WideTileText>
              Contact us with any questions.
            </WideTileText>
          </WideTile>
        </TileContainer>
      </ContentWrapper>
    </div>
  );
}

export const pageQuery = graphql`
  query LandingQuery {
    ...LayoutFragment
  }
`;