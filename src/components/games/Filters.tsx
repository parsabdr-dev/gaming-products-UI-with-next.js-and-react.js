import { HStack, Input, Select } from '@chakra-ui/react';

interface FiltersProps {
  search: string;
  genre: string;
  platform: string;
  onSearchChange: (value: string) => void;
  onGenreChange: (value: string) => void;
  onPlatformChange: (value: string) => void;
}

export default function Filters({
  search,
  genre,
  platform,
  onSearchChange,
  onGenreChange,
  onPlatformChange,
}: FiltersProps) {
  return (
    <HStack gap={4} mb={6}>
      <Input
        placeholder="Search games..."
        value={search}
        onChange={e => onSearchChange(e.target.value)}
      />

      <Select
        placeholder="Select genre"
        value={genre}
        onChange={e => onGenreChange(e.target.value)}
      >
        <option value="4">Action</option>
        <option value="3">Adventure</option>
        <option value="5">RPG</option>
        <option value="10">Strategy</option>
        <option value="2">Shooter</option>
      </Select>

      <Select
        placeholder="Select platform"
        value={platform}
        onChange={e => onPlatformChange(e.target.value)}
      >
        <option value="4">PC</option>
        <option value="187">PlayStation 5</option>
        <option value="18">PlayStation 4</option>
        <option value="1">Xbox One</option>
        <option value="7">Nintendo Switch</option>
      </Select>
    </HStack>
  );
}