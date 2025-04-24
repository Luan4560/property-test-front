"use client";

import { useState } from "react";
import { Box, Button, Textarea, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa6";
import useReviewsStore from "@/store/useReviewsStore";
import useAuth from "@/store/useAuth";
import { AxiosError } from "axios";

interface ErrorResponse {
  message: string;
}
export default function ReviewForm({ id }: { id: string }) {
  const { createReview, error } = useReviewsStore();
  const { accessToken } = useAuth();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hover, setHover] = useState(0);

  const token = accessToken?.accessToken;

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const review = {
      rating,
      comment,
    };

    if (rating > 0) {
      createReview(id, review, token as string);

      setRating(0);
      setComment("");
    }
  };

  return (
    <Box
      as="form"
      onSubmit={handleReviewSubmit}
      width="100%"
      maxW="600px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
    >
      <Text fontSize="lg" fontWeight="bold">
        Write a Review
      </Text>

      <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={24}
            style={{
              cursor: "pointer",
              color: star <= (hover || rating) ? "#FFD700" : "#e4e5e9",
            }}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          />
        ))}
      </Box>

      <Textarea
        placeholder="Share your experience..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        size="md"
        resize="vertical"
        padding="1rem"
      />

      <Button
        type="submit"
        colorScheme="blue"
        disabled={rating === 0}
        padding="1rem"
      >
        Submit Review
      </Button>

      {error && (
        <Text color="red">
          {(error as AxiosError<ErrorResponse>).response?.data?.message ||
            error.message}
        </Text>
      )}
    </Box>
  );
}
