import { Box, Image, Text, Badge, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { RawgGame } from '@/features/games/types';

interface GameCardProps {
  game: RawgGame;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/games/${game.id}`}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
        transition="all 0.2s"
        cursor="pointer"
      >
        <Image src={game.background_image} alt={game.name} />

        <VStack align="start" p={4} gap={2}>
          <Text fontWeight="bold" noOfLines={1}>
            {game.name}
          </Text>
          <Badge colorScheme="green">⭐ {game.rating}</Badge>
          <Text fontSize="sm" color="gray.500">
            Released: {game.released}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
}