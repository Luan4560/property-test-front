"use client";

import useListPropertiesStore from "@/store/useListPropertiesStore";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect } from "react";
import { use } from "react";
import ReviewForm from "@/components/ReviewForm";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { property, fetchPropertyById } = useListPropertiesStore();

  useEffect(() => {
    fetchPropertyById(id);
  }, [id, fetchPropertyById]);

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      gap={4}
      justifyContent="center"
      alignItems="center"
    >
      <Image
        objectFit="cover"
        style={{ borderRadius: "10px" }}
        width={400}
        height={300}
        src={property?.image || "/default-property.jpg"}
        alt={property?.name || "default-image"}
      />

      <Box display="flex" alignItems="center" flexDirection="column" gap={2}>
        <Text fontSize="1xl" fontWeight="bold">
          {property?.name}
        </Text>
        <Text fontSize="medium">Address: {property?.location}</Text>
      </Box>

      {/* <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Reviews</h2>
        <div className="space-y-6">
          {property?.reviews.map((review, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div> */}

      <div className="mt-12">
        <ReviewForm id={id} />
      </div>
    </Box>
  );
}
