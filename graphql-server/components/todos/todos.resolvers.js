import { LineType, Colors } from "../../../super-constants";

const TODOs = [
  {
    id: "1",
    lines: [
      { text: "Read emails ", type: LineType.BOLD },
      { text: "And Reply Emails ", type: LineType.CODE },
      { text: "And again Read emails. " },
      { text: "Sit back and drink coffe now" }
    ],
    completed: false
  },
  {
    id: "2",
    lines: [
      { text: "Buy orange ", type: LineType.COLOR, color: Colors.ORANGE },
      { text: "Buy Banana ", type: LineType.COLOR, color: Colors.YELLOW },
      { text: "Buy Plum ", type: LineType.COLOR, color: Colors.RED },
      { text: "Buy Pear ", type: LineType.COLOR, color: Colors.GREEN }
    ],
    completed: true
  }
];

const findAllTodos = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(TODOs);
    }, 1000);
  });
};

const findTodo = (_, { id }) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(TODOs.find(x => x.id === id));
    }, 1000);
  });
};

export const resolvers = {
  Query: {
    findAllTodos,
    findTodo
  }
};
