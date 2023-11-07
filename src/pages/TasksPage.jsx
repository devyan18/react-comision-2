import { TaskItem } from "../components/TaskItem";

const taskList = [
  {
    id: 1,
    title: "Tarea 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    done: true,
  },
  {
    id: 2,
    title: "Tarea 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    done: false,
  },
  {
    id: 3,
    title: "Tarea 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    done: false,
  },
  {
    id: 4,
    title: "Tarea 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    done: true,
  },
  {
    id: 5,
    title: "Tarea 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    done: false,
  },
];

export const TasksPage = () => {
  return (
    <div className="row">
      {taskList.map((task) => {
        return (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            done={task.done}
          />
        );
      })}

      <TaskItem title="hola" description="asdasdasdadklfhgaskjhdgfkjashgdfkjahsgdkfhgasjkdhfg" done={true} />
    </div>
  );
};

// boolean
// numbers
// strings
// nulls
// undefined
