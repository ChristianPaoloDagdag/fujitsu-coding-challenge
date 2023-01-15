import React from 'react';
import Container from './styles';
import PageTitle from './PageTitle';
import VideoSection from './VideoSection';
import InfoSection from './InfoSection';
import MoreInfoSection from './MoreInfoSection';
import JoinUsSection from './JoinUsSection';
import DateTableSection from './DateTableSection';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Home() {
  return (
    <Container>
      <Header />
      <PageTitle />
      <VideoSection />
      <InfoSection />
      <MoreInfoSection />
      <JoinUsSection />
      <DateTableSection />
      <Footer />
    </Container>
  );
}
