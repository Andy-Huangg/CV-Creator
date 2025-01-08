import React from "react";

export default function ListItem({
  itemData,
  editingIndex,
  moveItem,
  handleItemClick,
  handleDelete,
}) {
  return itemData.map((item, index) => (
    <li key={crypto.randomUUID()}>
      <div className="listItems">
        <div className="center">{item.heading}</div>
        {editingIndex == null ? (
          <div className="center">
            {index !== 0 && index != null ? (
              <button onClick={() => moveItem(index, -1)}>Up</button>
            ) : null}
            {index !== itemData.length - 1 && index != null ? (
              <button onClick={() => moveItem(index, 1)}>Down</button>
            ) : null}
            <button onClick={() => handleItemClick(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ) : null}
      </div>
    </li>
  ));
}
