import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const NewsContainer = styled.section`
  padding: 4rem 1rem;
  background-color: #f9f9f9;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background-color: ${({ active }) => (active ? '#333' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 1.5rem;
`;

const NewsCard = styled.a`
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  background-color: #ddd;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: ${({ $position }) => $position || 'center'};
`;

const NewsContent = styled.div`
  padding: 1rem;
  flex: 1;
`;

const NewsTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const NewsMeta = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 0.5rem;
`;

const NewsSummary = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-top: 3rem;
  font-size: 0.9rem;
  color: #555;

  a {
    color: #1a3f8f;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const News = () => {
  const [news, setNews] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState('All');

  useEffect(() => {
    fetch('/data/news.json')
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error('Error loading news:', error));
  }, []);

  const categories = ['All', ...new Set(news.map((item) => item.category))];

  const filteredNews =
    filteredCategory === 'All'
      ? news
      : news.filter((item) => item.category === filteredCategory);

  return (
    <NewsContainer>
      <Header>
        <Title>Latest News</Title>
        <Description>News and featured stories from QESDO</Description>
      </Header>

      <CategoryFilter>
        {categories.map((category) => (
          <FilterButton
            key={category}
            active={filteredCategory === category}
            onClick={() => setFilteredCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </CategoryFilter>

      <NewsGrid>
        {filteredNews.map((item, index) => (
          <NewsCard
            key={index}
            {...(item.link
              ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
              : { as: 'article' })}
          >
            <ImageWrapper src={item.image} $position={item.imagePosition} role="img" aria-label={item.title} />
            <NewsContent>
              <NewsTitle>{item.title}</NewsTitle>
              <NewsMeta>{item.date ? <>{item.category} &middot; {item.date}</> : item.category}</NewsMeta>
              <NewsSummary>{item.summary}</NewsSummary>
            </NewsContent>
          </NewsCard>
        ))}
      </NewsGrid>

      <ContactInfo>
        Questions? <a href="mailto:info@qesdo.org">info@qesdo.org</a> or <a href="tel:+251993262554">+251 99 326 2554</a>
      </ContactInfo>
    </NewsContainer>
  );
};

export default News;
