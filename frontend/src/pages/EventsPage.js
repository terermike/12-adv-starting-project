import { Link } from "react-router-dom";

const EVENTS = [
  {
    id: 1,
    title: "Event 1",
    description: "Description for Event 1",
    date: "2024-07-10T10:00:00Z",
    image: "https://example.com/event1.jpg",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Description for Event 2",
    date: "2024-07-15T15:00:00Z",
    image: "https://example.com/event2.jpg",
  },
  {
    id: 3,
    title: "Event 3",
    description: "Description for Event 3",
    date: "2024-07-20T18:30:00Z",
    image: "https://example.com/event3.jpg",
  },
  {
    id: 4,
    title: "Event 4",
    description: "Description for Event 4",
    date: "2024-07-25T12:00:00Z",
    image: "https://example.com/event4.jpg",
  },
  {
    id: 5,
    title: "Event 5",
    description: "Description for Event 5",
    date: "2024-07-30T09:00:00Z",
    image: "https://example.com/event5.jpg",
  },
];

export default function EventsPage() {
  return (
    <>
      <h1>Welcome to the EventsPage</h1>
      <ul>
        {EVENTS.map((ev) => (
          <li key={ev.id}>
            <Link to={`/events/${ev.id}`}>{ev.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
