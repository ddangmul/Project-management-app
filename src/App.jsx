import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  // StartAdd~ : 프로젝트 상태 중 "selectedProjectId" 업데이트
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState, // 기존 projects 추가
        selectedProjectId: null, // New Project 추가하는 것으로 객체 덮어쓰기
      };
    });
  }

  // Add~ : 프로젝트 상태 중 "projects" 업데이트
  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      // projectData에 id 속성 추가설정
      const newProject = {
        ...projectData,
        id: Math.random(), // ***
      };

      // 업데이트할 객체
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectState);
  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
