import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancle }) {
  const modal = useRef();

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
      modal.current.open();
      return; // 정지 : 모달창 뜨면 onAdd함수 실행하지 않음
    }

    onAdd({
      title: enteredTitle,
      description: enterdDescription,
      dueDate: enterdDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="확인">
        <h2 className="text-xl font-bold text-stone-700 mt-4 mb-4">
          입력값이 유효하지 않습니다.
        </h2>
        <p className="text-stone-600 mb-4">
          입력란이 모두 작성되지 않았습니다.
        </p>
        <p className="text-stone-600 mb-4">
          입력란에 유효한 입력값을 작성하세요.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancle}
            >
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
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
