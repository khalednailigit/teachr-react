import React from "react";
import ReactStars from "react-stars";
import HatIcon from "../svgs/hatIcon";
import ChatIcon from "../svgs/chatIcon";
import CheckFilled from "../svgs/checkFilled";
import Location from "../svgs/location";

function TeacherCard({
  fullName,
  stars,
  heures,
  education,
  lang,
  diplome,
  location,
}) {
  return (
    <div className="teacherCard">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUvOd8Q-VihyupbJCdgjIR2FxnjGtAgMu3g&usqp=CAU"
        alt="Image"
        className="teacherCard__userImage"
      />
      <div className="teacherCard__userInfos">
        <h3 className="teacherCard__userInfos--name">{fullName}</h3>
        <ReactStars
          count={5}
          value={stars}
          size={20}
          color2={"#ffd700"}
          edit={false}
        />
        <h4 className="teacherCard__userInfos--heures">
          {heures} heures donnees{" "}
        </h4>
      </div>
      <ul className="teacherCard__infoList">
        <li className="teacherCard__infoList--item">
          <HatIcon />
          <span>{education} </span>
        </li>
        <li className="teacherCard__infoList--item">
          <ChatIcon />
          <span>{lang}</span>
        </li>
        <li className="teacherCard__infoList--item">
          <CheckFilled />
          <span>{diplome}</span>
        </li>
        <li className="teacherCard__infoList--item">
          <Location />
          <span>{location}</span>
        </li>
        <div>
          <span>Description</span>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            assumenda autem delectus explicabo .
          </p>
        </div>
      </ul>
      <h2 className="teacherCard__infoList--add">choisir</h2>
    </div>
  );
}

export default TeacherCard;
