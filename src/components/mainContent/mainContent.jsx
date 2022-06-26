import TeacherCard from "../teacherCard";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useEffect, useState } from "react";
import axios from "axios";

function MainContent({ searchValue }) {
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    async function apiCall() {
      const apiData = await axios.get(
        "https://www.data.gouv.fr/api/1/users/?page=1&page_size=8"
      );
      setDataSet(apiData["data"]["data"]);
    }

    apiCall();
  }, []);
  console.log("dataSet", dataSet);
  return (
    <div className="mainContent">
      <h2 className="mainContent__title">
        Les Teach’rs de {searchValue} qui pourraient vous correspondre
      </h2>
      {dataSet.length && (
        <div className="mainContent__scroll">
          <ScrollMenu>
            {dataSet
              .map((x) => {
                return {
                  fullName: x.first_name + " " + x.last_name || "User",
                  stars: Math.floor(Math.random() * 3) + 2,
                  heures: Math.floor(Math.random() * 50),
                  education: "HEC, 1ere annee",
                  lang: "bilingual",
                  diplome: "Diplôme verifie",
                  location: "Paris",
                };
              })
              .map(
                (
                  {
                    fullName,
                    stars,
                    heures,
                    education,
                    lang,
                    diplome,
                    location,
                  },
                  index
                ) => (
                  <TeacherCard
                    fullName={fullName}
                    stars={stars}
                    key={index}
                    heures={heures}
                    education={education}
                    lang={lang}
                    diplome={diplome}
                    location={location}
                  />
                )
              )}
          </ScrollMenu>
        </div>
      )}
    </div>
  );
}

export default MainContent;
