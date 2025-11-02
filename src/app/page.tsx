import {
  HeroBanner,
  SuggestForBeginner,
  NewContents,
  QualityBooksSection,
  EngagingStoriesSection,
  PodcastShowcaseSection,
  FeaturedAuthors,
} from "../components/home";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <SuggestForBeginner />
      <QualityBooksSection />
      <EngagingStoriesSection />
      <PodcastShowcaseSection />
      <NewContents />
      <FeaturedAuthors />
    </div>
  );
}
