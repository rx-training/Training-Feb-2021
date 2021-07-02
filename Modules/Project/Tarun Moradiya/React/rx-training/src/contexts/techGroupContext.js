import React, { useState, useEffect, useContext } from "react";
import techGroupServices from "../services/TechGroupServices";
import { AuthContext } from "./authContext";
import axios from "axios";
import { TechContext } from "./techContext";

const TechGroupContext = React.createContext();

function TechGroupProvider(props) {
  const [techGroups, setTechGroups] = useState([]);
  const [grpName, setGrpName] = useState("");
  const [loadingTechGrps, setLoadingTechGrps] = useState(true);
  const [loadingNewTechGrps, setLoadingNewTechGrps] = useState(false);
  const { userIsLoggedIn } = useContext(AuthContext);

  const { techs } = useContext(TechContext);

  //get tech-groups
  const getData = async (source) => {
    try {
      const res = await techGroupServices.getTechGroups(source);
      await setTechGroups(res.data);
      console.log(
        "filtered tech groups",
        res.data.filter((data) => {
          const filteredTechs = techs.filter(
            (tech) => data._id === tech.techGroup
          );
          console.log(filteredTechs);
          console.log(data);
          return filteredTechs;
        })
      );
      await setLoadingTechGrps(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (userIsLoggedIn) getData(source);
    return () => source.cancel();
  }, [userIsLoggedIn]);

  //add new tech-group
  const addTechGroup = async () => {
    try {
      await setLoadingNewTechGrps(true);
      const res = await techGroupServices.createTechGroup({ name: grpName });
      if (res.data.success === true) {
        await setTechGroups([...techGroups, res.data.tGrp]);
        await setLoadingNewTechGrps(false);
      } else {
        await setLoadingNewTechGrps(false);
        alert(res.data.error);
      }
      await setGrpName("");
    } catch (error) {
      console.error(error);
    }
  };

  //update tech-group
  const updateTechGroup = async (id) => {
    try {
      const res = await techGroupServices.updateTechGroup(id, {
        name: grpName,
      });
      let tempGroups = techGroups.map((grp) => {
        console.log(grp);
        return grp._id === id ? res.data : grp;
      });
      await setGrpName("");
      await setTechGroups(tempGroups);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  //delete techgroup
  const deleteTechGroup = async (id) => {
    try {
      await techGroupServices.deleteTechGroup(id);
      const filteredTechGrp = await techGroups.filter(
        (techGroup) => techGroup._id !== id
      );
      await setTechGroups(filteredTechGrp);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TechGroupContext.Provider
      value={{
        techGroups,
        loadingTechGrps,
        loadingNewTechGrps,
        grpName,
        setGrpName,
        addTechGroup,
        updateTechGroup,
        deleteTechGroup,
      }}
    >
      {props.children}
    </TechGroupContext.Provider>
  );
}

export { TechGroupContext, TechGroupProvider };
