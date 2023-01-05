import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

const AddProduct = () => {
    class StreamCreate extends Component {
        renderError({ error, touched }) {
          if (touched && error) {
            return <div className="ui pointing label">{error}</div>;
          }
        }
      
        // must be arrow function so that context of this is bound for this.renderError
        renderInput = ({ input, label, meta }) => {
          console.log(meta);
          return (
            <div className="field">
              <label>{label}</label>
              <input {...input} />
              {this.renderError(meta)}
            </div>
          );
        };
      
        // send post request to api server on submit
        onSubmit(formValues) {
          this.props.createStream(formValues);
        }
      
        render() {
          return (
            <form
              className="ui form"
              onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
              <Field
                name="Name"
                component={this.renderInput}
                label="Enter Name: "
              />
              <Field
                name="description"
                component={this.renderInput}
                label="Enter Description: "
              />
              <button className="ui button primary">Submit</button>
            </form>
          );
        }

        const formWrapped = reduxForm({
            form: "Create Stream",
            validate: validate,
          })(StreamCreate);
          
      }
}
export default AddProduct;

          // redux connect
export default connect(null, { createStream })(formWrapped);
