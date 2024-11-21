import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="빈 할 일 목록"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 mb-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        프로젝트를 선택하거나 새 프로젝트를 생성하세요.
      </p>
      <p className="mt-8">
        <Button>새 프로젝트 생성</Button>
      </p>
    </div>
  );
}
