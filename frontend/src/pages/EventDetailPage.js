import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Welcome to the EventDetailPage</h1>
      <p>{params.id}</p>
    </>
  );
}
