import { createFileRoute } from "@tanstack/react-router";
import { WeddingInvitation } from "@/components/WeddingInvitation";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Carlos & Camila | Wedding Invitation" },
      { name: "description", content: "Join us to celebrate the wedding of Carlos and Camila - December 20, 2025" },
    ],
  }),
});

function Index() {
  return <WeddingInvitation />;
}
