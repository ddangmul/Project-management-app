import Input from "./Input";
import { useRef } from "react";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enterdDescription = description.current.value;
    const enterdDueDate = dueDate.current.value;

    // validation ...
    if (
      enteredTitle.trim() === "" ||
      enterdDescription.trim() === "" ||
      enterdDueDate.trim() === ""
    ) {
      // show the error modal
    }

    onAdd({
      title: enteredTitle,
      description: enterdDescription,
      dueDate: enterdDueDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancle
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" isTextarea />
        <Input ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}
