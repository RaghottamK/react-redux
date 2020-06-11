import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPageClassComponent from "./CoursesPageClassComponent";
import CoursesPageFunctionComponent from "./CoursePageFunctionComponent";
import PageNotFound from "./PageNotFound";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// function getPage() {
//   const route = window.location.pathname;
//   if (route === "/about") {
//     return <AboutPage />;
//   }
//   if (route === "/coursesClassComponent") {
//     return <CoursesPageClassComponent />;
//   }
//   if (route === "/coursesFunctionComponent") {
//     return <CoursesPageFunctionComponent />;
//   }
//   return <HomePage />;
// }

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar/>
      <Header />
      
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route
          path="/coursesClassComponent"
          component={CoursesPageClassComponent}
        />
        <Route
          path="/coursesFunctionComponent"
          component={CoursesPageFunctionComponent}
        />
        {/* note:
          It is important to place most specific route on top then less specific route
          As below: if u place "/course" route on top of "/course/:slug" 
          then "course/:slug" may never match.
        */}
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Redirect from="/about-page" to="/about"></Redirect>
        <Route component={PageNotFound}></Route>
     
    </div>
  );
}

export default App;
