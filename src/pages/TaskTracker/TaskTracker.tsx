import style from "./TaskTracker.module.css";
import { BiPlus } from "react-icons/bi";
import { BiSolidMessage } from "react-icons/bi";
import { BiSolidCalendar } from "react-icons/bi";

export const TaskTracker = () => {
  return (
    <>
      <h2>Task Tracker</h2>
      <div className={style.container}>
        <div className={style.boxColumn}>
          <div className={style.boxHeader}>
            <h5>
              BackLog <span className={style.num}>8</span>
            </h5>
            <li>
              <BiPlus />
            </li>
          </div>
          <div className={style.box}>
            <span className={style.tagRed} id="red">
              Youtube
            </span>
            <p>
              This is the litle of the card for the thing that neds to be done.
            </p>
            <div className={style.boxFooter}>
              <div className={style.date}>
                <li>
                  <BiSolidCalendar />
                  <span>8 May</span>
                </li>
              </div>
              <li className={style.comment}>
                <BiSolidMessage /> 14
              </li>
            </div>
          </div>
          <div className={style.box}>
            <span className={style.tagGreen} id="green">
              Dev
            </span>
            <p>
              This is the litle of the card for the thing that neds to be done.
            </p>
            <div className={style.boxFooter}>
              <div className={style.date}>
                <li>
                  <BiSolidCalendar />
                  <span>8 May</span>
                </li>
              </div>
              <li className={style.comment}>
                <BiSolidMessage /> 14
              </li>
            </div>
          </div>
          <div className={style.box}>
            <span className={style.tagYellow} id="yellow">
              Design
            </span>
            <p>
              This is the litle of the card for the thing that neds to be done.
            </p>
            <div className={style.boxFooter}>
              <div className={style.date}>
                <li>
                  <BiSolidCalendar />
                  <span>8 May</span>
                </li>
              </div>
              <li className={style.comment}>
                <BiSolidMessage /> 14
              </li>
            </div>
          </div>
        </div>
        <div className={style.boxColumn}>
          <div className={style.boxHeader}>
            <h5>
              Doing <span className={style.num}>4</span>
            </h5>
            <li>
              <BiPlus />
            </li>
          </div>
          <div className={style.box}>
            <span className={style.tagRed} id="red">
              Youtube
            </span>
            <p>
              This is the litle of the card for the thing that neds to be done.
            </p>
            <div className={style.boxFooter}>
              <div className={style.date}>
                <li>
                  <BiSolidCalendar />
                  <span>8 May</span>
                </li>
              </div>
              <li className={style.comment}>
                <BiSolidMessage /> 14
              </li>
            </div>
          </div>
          <div className={style.box}>
            <span className={style.tagGreen} id="green">
              Dev
            </span>
            <p>
              This is the litle of the card for the thing that neds to be done.
            </p>
            <div className={style.boxFooter}>
              <div className={style.date}>
                <li>
                  <BiSolidCalendar />
                  <span>8 May</span>
                </li>
              </div>
              <li className={style.comment}>
                <BiSolidMessage /> 14
              </li>
            </div>
          </div>
          <div className={style.box}>
            <span className={style.tagYellow} id="yellow">
              Design
            </span>
            <p>
              This is the litle of the card for the thing that neds to be done.
            </p>
            <div className={style.boxFooter}>
              <div className={style.date}>
                <li>
                  <BiSolidCalendar />
                  <span>8 May</span>
                </li>
              </div>
              <li className={style.comment}>
                <BiSolidMessage /> 14
              </li>
            </div>
          </div>
        </div>
        <div className={style.boxColumn}>
          <div className={style.boxHeader}>
            <h5>
              Ready <span className={style.num}>9</span>
            </h5>
            <li>
              <BiPlus />
            </li>
          </div>
          <div className={style.box}>
            <span className={style.tagRed} id="red">
              Youtube
            </span>
            <p>
              This is the litle of the card for the thing that neds to be done.
            </p>
            <div className={style.boxFooter}>
              <div className={style.date}>
                <li>
                  <BiSolidCalendar />
                  <span>8 May</span>
                </li>
              </div>
              <li className={style.comment}>
                <BiSolidMessage /> 14
              </li>
            </div>
          </div>
          <div className={style.box}>
            <span className={style.tagGreen} id="green">
              Dev
            </span>
            <p>
              This is the litle of the card for the thing that neds to be done.
            </p>
            <div className={style.boxFooter}>
              <div className={style.date}>
                <li>
                  <BiSolidCalendar />
                  <span>8 May</span>
                </li>
              </div>
              <li className={style.comment}>
                <BiSolidMessage /> 14
              </li>
            </div>
          </div>
          <div className={style.box}>
            <span className={style.tagYellow} id="yellow">
              Design
            </span>
            <p>
              This is the litle of the card for the thing that neds to be done.
            </p>
            <div className={style.boxFooter}>
              <div className={style.date}>
                <li>
                  <BiSolidCalendar />
                  <span>8 May</span>
                </li>
              </div>
              <li className={style.comment}>
                <BiSolidMessage /> 14
              </li>
            </div>
          </div>
        </div>
        <div className={style.boxColumn}>
          <div className={style.boxHeader}>
            <h5>
              Review <span className={style.num}>2</span>
            </h5>
            <li>
              <BiPlus />
            </li>
          </div>
          <div className={style.box}>
            <span className={style.tagRed} id="red">
              Youtube
            </span>
            <p>
              This is the litle of the card for the thing that neds to be done.
            </p>
            <div className={style.boxFooter}>
              <div className={style.date}>
                <li>
                  <BiSolidCalendar />
                  <span>8 May</span>
                </li>
              </div>
              <li className={style.comment}>
                <BiSolidMessage /> 14
              </li>
            </div>
          </div>
          <div className={style.box}>
            <span className={style.tagGreen} id="green">
              Dev
            </span>
            <p>
              This is the litle of the card for the thing that neds to be done.
            </p>
            <div className={style.boxFooter}>
              <div className={style.date}>
                <li>
                  <BiSolidCalendar />
                  <span>8 May</span>
                </li>
              </div>
              <li className={style.comment}>
                <BiSolidMessage /> 14
              </li>
            </div>
          </div>
          <div className={style.box}>
            <span className={style.tagYellow} id="yellow">
              Design
            </span>
            <p>
              This is the litle of the card for the thing that neds to be done.
            </p>
            <div className={style.boxFooter}>
              <div className={style.date}>
                <li>
                  <BiSolidCalendar />
                  <span>8 May</span>
                </li>
              </div>
              <li className={style.comment}>
                <BiSolidMessage /> 14
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
