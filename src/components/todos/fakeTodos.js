import { LineType, Colors } from "../../constants";

export let todos = [
  {
    id: "1",
    lines: [
      { text: "Read emails ", type: LineType.BOLD },
      { text: "And again Read emails. ", type: LineType.ITALIC },
      { text: "And Reply Emails ", type: LineType.CODE },
      { text: "Sit back and drink coffe now" },
    ],
    completed: false,
    deleted: false,
  },
  {
    id: "2",
    lines: [
      {
        text: "Buy orange ",
        type: LineType.COLOR,
        color: Colors.ORANGE,
      },
      {
        text: "Buy Banana ",
        type: LineType.COLOR,
        color: Colors.BLUE,
      },
      { text: "buy Chips ", type: LineType.STRIKE },
      { text: "Buy Plum ", type: LineType.COLOR, color: Colors.RED },
      { text: "Buy Pear ", type: LineType.COLOR, color: Colors.GREEN },
    ],
    deleted: false,
    completed: true,
  },
];
