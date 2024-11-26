import NewTask from "./NewTask";

export default function Tasks() {
  return (
    <section className="text=2xl font-bold text-stone-700 mb-4">
      <h2>할 일</h2>
      <NewTask />
      <p className="text-stone-800 my-4">아직 할 일 목록이 없습니다.</p>
      <ul></ul>
    </section>
  );
}
