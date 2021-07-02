import React, { useEffect, useState, useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { TechContext } from "../contexts/techContext";
import TechPermission from "./TechPermission";
import _ from "lodash";

export default function TechGroupPermission(props) {
  const [grp, setGrp] = useState("");
  const [grpTechs, setGrpTechs] = useState([]);
  const [bool, setBool] = useState(false);

  const { techs } = useContext(TechContext);

  useEffect(() => {
    setGrp(props.grp);
    const filteredTechs = techs.filter(
      (tech) => tech.techGroup === props.grp._id
    );
    setGrpTechs(filteredTechs);

    if (props.grpPermissions.find((g) => g === props.grp._id)) setBool(true);
    else setBool(false);

    // //check for permitted techs
    // const permittedTechs = _.difference(
    //   filteredTechs.map((t) => t._id),
    //   props.techPermissions
    // );

    // //check for permitted techs
    // const permittedGrps = _.difference(
    //   filteredTechs.map((t) => t._id),
    //   props.grpPermissions
    // );

    // //if all techs are permitted
    // if (permittedTechs.length === 0) setBool(true);
    // //if all techs are not permitted
    // else if (permittedTechs.length === filteredTechs.length) setBool(false);
  }, [props]);

  // const handleSet = async () => {
  //   const arrayToBeAdded = grpTechs.map((t) => t._id);
  //   console.log(arrayToBeAdded);
  //   const newPermissions = _.union(props.permissions, arrayToBeAdded);
  //   console.log(newPermissions);
  //   props.setPermissions(newPermissions);
  //   setBool(true);
  // };

  // const handleReset = async () => {
  //   const arrayToBeRemoved = grpTechs.map((t) => t._id);
  //   console.log(arrayToBeRemoved);
  //   const newPermissions = _.difference(props.permissions, arrayToBeRemoved);
  //   console.log(newPermissions);
  //   props.setPermissions(newPermissions);
  //   setBool(false);
  // };

  const handleSet = async () => {
    const newPermissions = _.union(props.grpPermissions, [props.grp._id]);
    console.log(newPermissions);
    props.setGrpPermissions(newPermissions);
    props.setPermissions((perm) => ({
      ...perm,
      tGrps: newPermissions,
    }));
    setBool(true);
  };

  const handleReset = async () => {
    const newPermissions = _.difference(props.grpPermissions, [props.grp._id]);
    console.log(newPermissions);
    props.setGrpPermissions(newPermissions);
    props.setPermissions((perm) => ({
      ...perm,
      tGrps: newPermissions,
    }));

    const arrayToBeRemoved = grpTechs.map((t) => t._id);
    console.log(arrayToBeRemoved);
    const newTechPermissions = _.difference(
      props.techPermissions,
      arrayToBeRemoved
    );
    console.log(newTechPermissions);
    props.setTechPermissions(newTechPermissions);
    props.setPermissions((perm) => ({
      ...perm,
      techs: newTechPermissions,
    }));
    setBool(false);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{ width: "80%" }}>{grp.name}</th>
          <th>
            {bool ? (
              <Button variant="info" onClick={handleReset}>
                <i className="fas fa-eye"></i>
              </Button>
            ) : (
              <Button variant="info" onClick={handleSet}>
                <i className="fas fa-eye-slash"></i>
              </Button>
            )}
          </th>
        </tr>
      </thead>
      <tbody>
        {bool &&
          grpTechs.map((tech) => (
            <TechPermission
              key={tech._id}
              tech={tech}
              permissions={props.permissions}
              setPermissions={props.setPermissions}
              techPermissions={props.techPermissions}
              setTechPermissions={props.setTechPermissions}
              grpPermissions={props.grpPermissions}
              setGrpPermissions={props.setGrpPermissions}
            />
          ))}
      </tbody>
    </Table>
  );
}
