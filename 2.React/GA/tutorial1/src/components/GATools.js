import { useEffect } from "react";
import { useLocation } from "react-router";
import ReactGA from "react-ga";

// 1. tracking user page view
export const GaPageViewer = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);

  return <></>;
};

// 2. tracking click log ( CTA .. )
export const GaClickButtonEvent = () => {
  const clickHandler = () => {
    ReactGA.event({
      category: "apply compliance",
      action: "click",
    });
    console.log(
      "Send the information to google analystic that I touched the click button"
    );
  };

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

// 3. tracking imporession log
export const GaImpressionEvent = () => {
  useEffect(() => {
    ReactGA.event({
      category: "apply compliance",
      action: "impression",
    });
    console.log(
      "Send the information to google analystic that I view the modal"
    );
  }, []);

  return <div>impression</div>;
};

export const GA_EVENT_SCHEMA = {};
