import React from 'react';
import Container from './styles';
import PageTitle from './PageTitle';
import VideoSection from './VideoSection';

export default function Home() {
  return (
    <Container>
      <PageTitle />
      <VideoSection />
    </Container>
  );
}
