'use client';

import { Box, Heading, Image, Text, Spinner, Badge, HStack, Link } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { useGameDetails } from '@/features/games/useGameDetails';

export default function GameDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { game, loading, error } = useGameDetails(id);

  if (loading) return <Spinner size="xl" />;
  if (error || !game) return <Text color="red.500">Game not found</Text>;

  return (
    <Box p={6}>
      <Heading mb={4}>{game.name}</Heading>

      <Image src={game.background_image} alt={game.name} borderRadius="lg" mb={4} />

      <HStack spacing={4} mb={4}>
        <Badge colorScheme="green">⭐ {game.rating}</Badge>
        <Text>Released: {game.released}</Text>
      </HStack>

      <Text mb={4}>{game.description_raw}</Text>

      {game.website && (
        <Link href={game.website} color="blue.500" isExternal>
          Official Website
        </Link>
      )}
    </Box>
  );
}