import React, { useState, useEffect, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { TechGroupContext } from "../contexts/techGroupContext";
import TechGroupPermission from "./TechGroupPermission";

export default function SetPermissions(props) {
  const [permissions, setPermissions] = useState({ techs: [], tGrps: [] });
  const [techPermissions, setTechPermissions] = useState([]);
  const [grpPermissions, setGrpPermissions] = useState([]);
  const { techGroups } = useContext(TechGroupContext);

  useEffect(() => {
    console.log("set permissions rerenderd");
    setPermissions(props.permissions);
    setTechPermissions(props.permissions.techs);
    setGrpPermissions(props.permissions.tGrps);
  }, [props]);

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-capitalize">
          {props.name} Permissions
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {techGroups.map((grp) => (
          <TechGroupPermission
            key={grp._id}
            grp={grp}
            permissions={permissions}
            setPermissions={setPermissions}
            techPermissions={techPermissions}
            setTechPermissions={setTechPermissions}
            grpPermissions={grpPermissions}
            setGrpPermissions={setGrpPermissions}
          />
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type="button" onClick={props.handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => props.set(permissions)}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
