import React, { useRef, useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import loadingGif from "../images/gif/loading-arrow.gif";
import { TechContext } from "../contexts/techContext";
import AddModule from "./AddModule";
import { AuthContext } from "../contexts/authContext";
import { Button, Accordion, Card } from "react-bootstrap";
import { PlanContext } from "../contexts/planContext";
import { ModuleContext } from "../contexts/moduleContext";
import SubItem from "./SubItem";
import styled from "styled-components";

export default function Tech(props) {
  const [editItem, setEditItem] = useState(false);
  const editField = useRef("");
  const [loading, setLoading] = useState(false);
  const [tech, setTech] = useState(props.tech);
  const { isAdminUser } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const history = useHistory();
  const { techName, setTechName, updateTech, deleteTech } =
    useContext(TechContext);

  const [techModules, setTechModules] = useState([]);
  const [techPlans, setTechPlans] = useState([]);
  const { modules } = useContext(ModuleContext);
  const { plans } = useContext(PlanContext);

  //show and hide modal
  const handleClose = () => {
    setShowForm(false);
    setShow(false);
  };
  const handleShow = async () => {
    await setShowForm(true);
    await setShow(true);
  };

  //delete tech
  const handleDeleteBtn = async () => {
    const del = window.confirm(
      `Are You Sure, You Want To Delete ${tech.name} ?`
    );
    if (del) {
      await setLoading(true);
      await deleteTech(tech._id);
      await setLoading(false);
    }
  };

  //show edit tech form
  const handleEditBtn = async () => {
    setTechName(tech.name);
    await setEditItem(true);
    editField.current.focus();
  };

  //hide edit tech form
  const handleEditBlur = () => {
    setEditItem(false);
    setTechName("");
  };

  //edit tech
  const handleEdit = async (e) => {
    try {
      e.preventDefault();
      await setLoading(true);
      const updatedTech = await updateTech(tech._id);
      await setTech(updatedTech);
      await setEditItem(false);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // const getModule = async () => {
  //   const firstModule = modules.find((module) => module.tech === tech._id);
  //   if (!firstModule) history.push("error");
  //   else history.push("/modules/" + firstModule._id);
  // };

  const getData = async () => {
    const filteredModules = modules.filter(
      (module) => module.tech === tech._id
    );
    await setTechModules(filteredModules);
    const filteredPlans = plans.filter((plan) => plan.tech === tech._id);
    await setTechPlans(filteredPlans);
  };

  useEffect(() => {
    getData();
  }, [plans, modules]);

  if (loading) {
    return (
      <li className="list-group-item">
        <img
          src={loadingGif}
          alt="Loading..."
          className="img-fluid m-auto h-100"
        />
      </li>
    );
  }

  return (
    <CustomCard className="list-group-item bg-light border-info clearfix">
      {editItem ? (
        <form onSubmit={handleEdit} className="form-inline my-2 ">
          <div className="input-group w-100">
            <input
              type="text"
              className="form-control"
              ref={editField}
              value={techName}
              onChange={(e) => setTechName(e.target.value)}
              onBlur={handleEditBlur}
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-warning">
                Edit
              </button>
            </div>
          </div>
        </form>
      ) : (
        <>
          <Card.Header className="header bg-light pb-3 clearfix">
            <Accordion.Toggle as={A} variant="link" eventKey={tech._id}>
              {tech.name}
            </Accordion.Toggle>

            {/* <a
            style={{ cursor: "pointer" }}
            onClick={getModule}
            className="list-group-item-action text-info"
          >
            {tech.name}
          </a> */}
            {isAdminUser === true && (
              <div className="float-right">
                <button
                  onClick={handleShow}
                  className="btn btn-warning float-right ml-2"
                >
                  <i className="fas fa-plus"></i>
                </button>
                {showForm && (
                  <AddModule
                    id="add-tech-type"
                    show={show}
                    handleClose={handleClose}
                    techId={tech._id}
                  />
                )}
                <button
                  onClick={handleDeleteBtn}
                  className="btn btn-danger float-right ml-2"
                >
                  <i className="fas fa-trash"></i>
                </button>
                <button
                  onClick={handleEditBtn}
                  className="btn btn-primary float-right ml-2"
                >
                  <i className="fas fa-pen"></i>
                </button>
              </div>
            )}
          </Card.Header>
          <Accordion.Collapse eventKey={tech._id}>
            <Card.Body className="body">
              {techModules.map((module) => (
                <SubItem
                  key={module._id}
                  item={module}
                  path={`/modules/${module._id}`}
                />
              ))}
              {techPlans.map((plan) => (
                <SubItem
                  key={plan._id}
                  item={plan}
                  path={`/plans/${plan._id}`}
                />
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </>
      )}
    </CustomCard>
  );
}

const A = styled.a`
  :hover {
    cursor: pointer;
  }
`;

const CustomCard = styled.div`
  padding-bottom: 0;
  a {
    text-decoration: none;
    color: #17a2b8;
  }
  .header {
    border: 0;
    padding: 0.1rem;
  }
  .body {
    border: 0;
    border-top: #17a2b8 1px solid;
    padding: 0.2rem 0;
  }
  li {
    padding: 0.5rem;
  }
`;
