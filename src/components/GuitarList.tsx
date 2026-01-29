import type { Guitar } from "../types";
import GuitarComponent from "./Guitar";

type GuitarListProps = {
  data: Guitar[];
  addToCart: (guitar: Guitar) => void;
};

export default function GuitarList({ data, addToCart }: GuitarListProps) {
  return (
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>

      <div className="row mt-5">
        {data.map((guitar) => (
          <GuitarComponent guitar={guitar} addToCart={addToCart} key={guitar.id} />
        ))}
      </div>
    </main>
  );
}