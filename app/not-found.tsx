import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export default function NotFound() {
  return (
    <Container className="py-20">
      <PageHeader
        eyebrow="404"
        title="Page not found"
        description="The page you are looking for does not exist or has moved."
      />
      <Button asChild>
        <Link href="/">Go home</Link>
      </Button>
    </Container>
  );
}
