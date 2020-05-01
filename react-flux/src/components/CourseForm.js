import React from "react";
import InputText from "./common/InputText";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <InputText
        error={props.errors.title}
        id="title"
        name="title"
        value={props.course.title}
        label="Title"
        onChange={props.onChange}
      />
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            className="form-control"
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId | ""}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>

      <InputText
        error={props.errors.category}
        id="category"
        label="Category"
        name="category"
        onChange={props.onChange}
        type="text"
        value={props.course.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
