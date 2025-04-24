import { Box } from "@chakra-ui/react";
import PropertyCard from "../PropertyCard";

export default function ListProperties({
  initialProperties,
}: {
  initialProperties: IProperty[];
}) {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      gap={4}
    >
      {initialProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </Box>
  );
}
