import { useEffect, useState } from "react";
import "./App.css";
import Sound from "./sound/Sound";

import under_background from "./assets/under_background.jpg";
import church_image from "./assets/icons/church.png";
import church_image_loc from "./assets/location/church_image.jpg";
import restaurant_image_loc from "./assets/location/restaurant_image.jpg";

import dinner from "./assets/dinner.png";
import location_image from "./assets/location/restaurant_image.jpg";
import ruFlag from "./assets/icons/en.png";
import amFlag from "./assets/icons/am.png";
import InviteForm from "form/InviteForm";
import Footer from "footer/Footer";
  
const ruData = {
  welcome: {
    name1: "Arshak",
    name2: "Christina",
  },
  calendar: {
    month: "february",
    weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  location: {
    title: "Venues",
    arr: [
      {
        image: restaurant_image_loc,
        name: "Lara Banquet Hall",
        address: "Goris, 24 Kristapora St.",
        reverse: false,
      },
      {
        image: church_image_loc,
        name: "St. Hripsime Church",
        address: "Mashtots St., Building 85н",
        reverse: true,
      },
    ],
  },
  timeline: {
    title1: "Daily",
    title2: "Schedule",
    arr: [
      {
        text: "Church",
        time: "14:00",
        icon: church_image,
      },
      {
        text: "",
        time: "February 14th, Banquet Hall",
        icon: dinner,
      },
    ],
  },
  footer: {
    text: "Thank you for sharing the most precious moment of our lives with us.",
  },
};

const amData = {
  welcome: {
    name1: "Արշակ",
    name2: "Քրիստինե",
  },
  calendar: {
    month: "Փետրվար",
    weekDays: ["Կիր", "Երկ", "Երք", "Չրք", "Հնգ", "Ուր", "Շբթ"],
  },
  location: {
    title: "Վայրեր",
    arr: [
      {
        image: restaurant_image_loc,
        name: "Lara Banquet Hall",
        address: "Գորիս, Քրիստափորայի 24 փ.",
        reverse: false,
      },
      {
        image: church_image_loc,
        name: "Սուրբ Հռիփսիմե եկեղեցի",
        address: "Մաշտոցի փող., 85 շենք",
        reverse: true,
      },
    ],
  },
  timeline: {
    title1: "Օրվա",
    title2: "ծրագիր",
    arr: [
      {
        text: "Եկեղեցի",
        time: "14:00",
        icon: church_image,
      },
      {
        text: "Փետրվարի 14-ին Հանդիսության սրահ",
        time: "14:00",
        icon: dinner,
      },
    ],
  },
  footer: {
    text: "Շնորհակալ ենք, որ կիսում եք մեզ հետ մեր կյանքի ամենաթանկ պահը",
  },
};

function App() {
  const [lang, setLang] = useState("ru");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(ruData);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (lang) => {
    setLang(lang);
    handleDropdown();
  };

  useEffect(() => {
    console.log("lang", lang);
    const data = lang === "ru" ? ruData : amData;
    setData(data);
  }, [lang, setLang]);

  return (
    <div className="app-wrapper">
      <div className="language-switcher">
        <button className="dropdown-button" onClick={() => setIsOpen(true)}>
          <img
            src={lang === "ru" ? ruFlag : amFlag}
            alt="Selected flag"
            className="flag-icon"
          />
          <span>{lang === "ru" ? 'en' :"հայ"}</span>
        </button>
        
        {isOpen && (
          <div className="dropdown-menu">
            <div onClick={() => handleChange("ru")}>
              <img src={ruFlag} alt="Russian" className="flag-icon" /> en
            </div>
            <div onClick={() => handleChange("am")}>
              <img src={amFlag} alt="Armenian" className="flag-icon" /> հայ
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="invitation-container">
        <div className="image-section">

          <div className="main-image"></div>
          {/* <img src={main_background} alt="Couple" className="main-image" /> */}
          <div className="text-overlay-wrapper">
            <div className="text-overlay-blur"> </div>
            <div className="text-overlay">
              <h1 className="names">
                <span className="name-left">{data.welcome.name1}</span>
                <span className="and">&</span>
                <span className="name-right">{data.welcome.name2}</span>
              </h1>
              <div className="swipe">
                <span className="arrow">↓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Details Section */}
      <div className="details-section">
        {/* <img src={flowerLeft} alt="flower" className="flower flower-left" /> */}
        {/* <img src={flowerRight} alt="flower" className="flower flower-right" /> */}

        <h2 className="guests-title">{(data.welcome).start}</h2>
        <p className="guests-text">{(data.welcome).mid}</p>
        <h3 className="married-title"> {(data.welcome).end}</h3>

        <div className="calendar">
          <p className="month" style={{ textTransform: "uppercase" }}>
            {data.calendar.month}
          </p>
          <table>
            <thead>
              <tr>
                {data.calendar.weekDays.map((day) => (
                  <th style={{ fontSize: lang === "am" ? "13.4px" : "15px" }}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
              </tr>
              <tr>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td className="selected">13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
              </tr>
              <tr>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
              </tr>
              <tr>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
              </tr>
              <tr>
                <td>31</td>
                <td colSpan={6}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Timeline Section */}
      <div className="timeline-section">
        <img
          src={location_image}
          alt="Table Decor"
          className="table-image"
          style={{
            height: "150px",
            objectFit: "cover",
            position: "relative",
            filter: "brightness(0.7)",
          }}
        />

        <div className="timeline-content">
          {/* <img
            src={flowerLeft2}
            alt="Flower Left"
            className="flower flower-timeline-left"
          />
          <img
            src={flowerRight2}
            alt="Flower Right"
            className="flower flower-timeline-right"
          /> */}

          <h2
            className="timeline-title"
            style={{
              position: "absolute",
              top: "-110px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
            }}
          >
            {data.timeline.title1}
          </h2>
          <h2 className="timeline-title">{data.timeline.title2}</h2>

          <div className="timeline-container">
            {data.timeline.arr.map((item) => {
              return (
                <div className="timeline-item">
                  <img
                    src={item.icon}
                    alt="Ceremony"
                    className="timeline-icon"
                  />
                  <div className="timeline-time">{item.time}</div>
                  <div className="timeline-label">{item.text}</div>
                </div>
              );
            })}
            {/* <div className="timeline-item">
              <img
                src="/icons/guest-arrival-icon.svg"
                alt="Guest Arrival"
                className="timeline-icon"
              />
              <div className="timeline-time">10:00</div>
              <div className="timeline-label">Հարսի տուն</div>
            </div>
            <div className="timeline-item">
              <img
                src="/icons/ceremony-icon.svg"
                alt="Ceremony"
                className="timeline-icon"
              />
              <div className="timeline-time">13:00</div>
              <div className="timeline-label">Հաղարծնի վանք</div>
            </div>
            <div className="timeline-item">
              <img
                src="/icons/banquet-icon.svg"
                alt="Banquet"
                className="timeline-icon"
              />
              <div className="timeline-time">16:00-17:00</div>
              <div className="timeline-label">Հյուրերի դիմավորում</div>
            </div>
            <div className="timeline-item">
              <img
                src="/icons/banquet-icon.svg"
                alt="Banquet"
                className="timeline-icon"
              />
              <div className="timeline-time">17:00</div>
              <div className="timeline-label">Երեկոյի սկիզբը</div>
            </div>
            <div className="timeline-item">
              <img
                src="/icons/banquet-icon.svg"
                alt="Banquet"
                className="timeline-icon"
              />
              <div className="timeline-time">23:00</div>
              <div className="timeline-label">Երեկոյի ավարտ</div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="wedding-info-section">
        {/* Location Info */}
        <h2 className="location-title">{data.location.title}</h2>
        <div className="location" style={{ padding: "8px" }}>
          <div className="location-list">
            {/* {data.location} */}
            {data.location.arr.map((loc, index) => (
              <div
                key={index}
                className={`location-item ${loc.reverse ? "reverse" : ""}`}
              >
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="location-image"
                />
                <div className="location-text">
                  <h3>{loc.name}</h3>
                  <p>{loc.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dress Code */}
        {/* <div className="dress-code">
          <h3 className="dress-code-title">DRESS-CODE</h3>
          <p>
            We would appreciate it if you could support our wedding's color
            scheme!
          </p>
          <div className="color-palette">
            <span
              className="color-circle"
              style={{ backgroundColor: "#2b2e4a" }}
            />
            <span
              className="color-circle"
              style={{ backgroundColor: "#f3e6e3" }}
            />
            <span
              className="color-circle"
              style={{ backgroundColor: "#e4c6cf" }}
            />
            <span
              className="color-circle"
              style={{ backgroundColor: "#d2d2d2" }}
            />
            <span
              className="color-circle"
              style={{ backgroundColor: "#999999" }}
            />
          </div>
        </div> */}

        {/* <div className="rsvp-section">
          <h2>RSVP</h2>
          <p className="rsvp-subtitle">
            Please fill out the application form by <strong>May 15th</strong>.
          </p>

          <form className="rsvp-form">
            <label className="input-label">
              Your first and last name
              <input type="text" placeholder="Anna Jonson, Jamie Williams" />
            </label>

            <p className="presence-label">Please, confirm your presence</p>
            <div className="radio-group">
              <label>
                <input type="radio" name="attendance" value="yes" />I will
                definitely come (We will come)
              </label>
              <label>
                <input type="radio" name="attendance" value="no" />I will not be
                able to attend (We will not be able to)
              </label>
            </div>

            <button type="submit">SUBMIT</button>
          </form>
        </div> */}

        {/* Footer image and text */}
        <div className="final-message">
          <div className="text-overlay-wrapper" style={{ marginBottom: 0 }}>
            <div className="text-overlay-blur"></div>
            <div className="text-overlay">
              <h1
                className="names footer-text"
                style={{ fontSize: "30px", padding: "4px" }}
              >
            <InviteForm lang={lang} />
                {data.footer.text}
              </h1>
            </div>
          </div>
          <img
            src={under_background}
            alt="Couple walking"
            className="footer-image"
          />
        </div>
      </div>

      {/* Move footer outside the constrained container so background can be full width */}
      <Footer />

      <Sound />
    </div>
  );
}

export default App;
