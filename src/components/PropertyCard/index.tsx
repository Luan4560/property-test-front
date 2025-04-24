"use client";

import { FaStar } from "react-icons/fa6";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import Image from "next/image";

export default function PropertyCard({ property }: { property: IProperty }) {
  const router = useRouter();

  const handleRedirectById = () => {
    router.push(`/property/${property.id}`);
  };

  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        onClick={handleRedirectById}
        cursor="pointer"
      >
        <Image
          objectFit="cover"
          width={400}
          height={300}
          src={property.image || "/default-property.jpg"}
          alt={property.name}
        />

        <Box p="6">
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {property.name}
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {[1, 2, 3, 4, 5].map((rating) => (
              <FaStar
                key={rating}
                cursor="pointer"
                style={{
                  color:
                    rating <= (property.reviews[0]?.rating || 0)
                      ? "#FFD700"
                      : "#e4e5e9",
                }}
              />
            ))}

            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviews.length} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
