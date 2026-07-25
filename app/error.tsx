"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="py-20">
      <PageHeader
        eyebrow="Something went wrong"
        title="We could not load this page."
        description="Please try again in a moment."
      />
      <Button type="button" onClick={reset}>
        Try again
      </Button>
    </Container>
  );
}
