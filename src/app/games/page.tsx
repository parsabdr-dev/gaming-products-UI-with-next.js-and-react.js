"use client";

import { Box, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useGames } from '@/features/games/useGames';
import GameCard from '@/components/games/GameCard';
import Filters from '@/components/games/Filters';
import Pagination from '@/components/games/Pagination';

const PAGE_SIZE = 12;

export default function GamesPage() {
  const {
    games,
    total,
    loading,
    error,
    filters,
    updateFilters,
    changePage,
  } = useGames();

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box p={6}>
      <Heading mb={6}>Games Library</Heading>

      <Filters
        search={filters.search}
        genre={filters.genre}
        platform={filters.platform}
        onSearchChange={value => updateFilters({ search: value })}
        onGenreChange={value => updateFilters({ genre: value })}
        onPlatformChange={value => updateFilters({ platform: value })}
      />

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>

      <Pagination
        currentPage={filters.page}
        totalItems={total}
        pageSize={PAGE_SIZE}
        onPageChange={changePage}
      />
    </Box>
  );
}