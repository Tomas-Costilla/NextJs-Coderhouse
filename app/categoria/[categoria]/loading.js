import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="container m-auto p-10 flex justify-center items-center">
      <Spinner size="lg" />
    </div>
  );
}
