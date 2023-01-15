import React from 'react';
import Container from './styles';
import PageTitle from './PageTitle';
import VideoSection from './VideoSection';
import InfoSection from './InfoSection';
import MoreInfoSection from './MoreInfoSection';
import JoinUsSection from './JoinUsSection';
import DateTableSection from './DateTableSection';

export default function Home() {
  return (
    <Container>
      <PageTitle />
      <VideoSection />
      <InfoSection />
      <MoreInfoSection />
      <JoinUsSection />
      <DateTableSection />
    </Container>
  );
}
