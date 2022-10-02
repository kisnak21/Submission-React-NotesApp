import React from "react";
import { ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";

function NoteButton({ id, onDelete, onArchive }) {
  return (
    <div>
      <ButtonGroup>
        <DropdownButton
          as={ButtonGroup}
          title="Action"
          id="bg-nested-dropdown"
          className="action-button"
        >
          <Dropdown.Item eventKey="1" onClick={() => onDelete(id)}>
            Delete
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={() => onArchive(id)}>
            Archive
          </Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    </div>
  );
}

export default NoteButton;
