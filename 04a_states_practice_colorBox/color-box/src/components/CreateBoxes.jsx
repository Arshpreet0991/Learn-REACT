import BoxRange from "./BoxRange";
import ColorBox from "./ColorBox";

const colorList = [
  "#EF4444",
  "#22C55E",
  "#3B82F6",
  "#EAB308",
  "#A855F7",
  "#EC4899",
  "#6366F1",
  "#6B7280",
  "#F97316",
  "#14B8A6",
];

export default function CreateBoxes({ range }) {
  const boxes = [];

  for (let index = 0; index < range; index++) {
    boxes.push(
      <div>
        <ColorBox colorList={colorList} />
        <ColorBox colorList={colorList} />
        <ColorBox colorList={colorList} />
      </div>
    );
  }

  return <>{boxes}</>;
}
