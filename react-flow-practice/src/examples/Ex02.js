import React, { useState } from "react";
import ReactFlow, { addEdge, removeElements } from "react-flow-renderer";

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },
  {
    id: "2",
    data: { label: "Another Node" },
    position: { x: 100, y: 125 },
  },
];
function App() {
  const [elements, setElements] = useState(initialElements);

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <>
      <div style={{ height: "50vh", width: "50vw", border: "1px solid black" }}>
        <ReactFlow
          elements={elements}
          onElementsRemove={onElementsRemove}
          onConnect={onConnect}
          deleteKeyCode={46} /* 'delete'-key */
        />
      </div>
    </>
  );
}

export default App;
