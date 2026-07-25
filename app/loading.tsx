import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container className="py-16">
      <div className="h-2 w-36 overflow-hidden rounded-full bg-clinic-gray-100">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-clinic-blue-500" />
      </div>
    </Container>
  );
}
