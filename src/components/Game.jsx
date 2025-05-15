import Card from "./Card";

export default function Game() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-3 grid-rows-3 md:grid-cols-4 md:grid-rows-4 gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
