import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="text=2xl font-bold text-stone-700 mb-4">
      <h2>할 일</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">아직 할 일 목록이 없습니다.</p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4  mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.name}</span>
              <button className="text-stone-700 hover:text-red-500">
                Clear!
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
