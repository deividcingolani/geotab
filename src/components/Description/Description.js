import React from "react";
import {
  DescriptionContainer,
  DescriptionContent,
  DescritionTitle,
} from "./styles";

export const Description = () => (
  <DescriptionContainer>
    <DescritionTitle>A look into moving and transportation trends</DescritionTitle>
    <DescriptionContent>
      Although the pandemic has disrupted lives, it has also opened the door to
      change -- both in where we choose to live and how we get around. Today,
      we’re relying on our cars more than ever since public transportation is
      down more than 70% across the U.S., and monthly vehicle use is inching
      back up toward pre-pandemic levels. <br/> This shift in the Way We Move not only
      impacts us today, whether it’s the time it takes us to get to work or the
      ways by which we get there. It’s also laying the foundation for what’s to
      come -- from smart city planning to help governments adjust to population
      and traffic pattern shifts, to the opportunities for electric vehicle
      adoption. <br/> Below you will find insights into where people are moving to and
      where they’re leaving, who’s commuting to work and how, traffic congestion
      and other movement patterns across America.
    </DescriptionContent>
  </DescriptionContainer>
);
