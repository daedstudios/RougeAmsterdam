import { currentEvents, previousEvents } from "@/config/data";

export default async function TicketPage({ params }) {
  const ticket = params.tickets;
  console.log("params", ticket);

  const data = currentEvents.filter((event) => event.slug === ticket);
  console.log("data", data);

  return (
    <div>
      <p>{data[0].description}</p>
    </div>
  );
}
