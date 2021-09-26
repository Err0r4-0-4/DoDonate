import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import "./Simpleform.css";
const config = {
  width: "400px",
  height: "500px",
  floating: true,
};
class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      age: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div>
        <h3>Summary</h3>
        <div>{name.value}</div>
        <div>{gender.value}</div>
        <div>{age.value}</div>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: "0",
            options: [
              { value: "New User", label: "New User", trigger: "1" },
              {
                value: "Existing User",
                label: "Existing User",
                trigger: "001",
              },
            ],
          },
          {
            id: "001",
            message: "Rechecking your details!",
            trigger: "1",
          },
          {
            id: "1",
            message: "What is your Full name?",
            trigger: "name",
          },
          {
            id: "name",
            user: true,
            validator: (value) => {
              if (value.length == 0) {
                return "Please Enter a name!";
              } else if (value.length == 1) {
                return `${value} is not a valid Name`;
              }

              return true;
            },
            trigger: "3",
          },
          {
            id: "3",
            message: "Hi {previousValue}!Please Select your gender?",
            speechSynthesis: false,
            trigger: "gender",
          },
          {
            id: "gender",
            options: [
              { value: "male", label: "Male", trigger: "5" },
              { value: "female", label: "Female", trigger: "5" },
              { value: "other", label: "Other", trigger: "5" },
            ],
          },
          {
            id: "5",
            message: "What is your Age?",
            trigger: "age",
          },
          {
            id: "age",
            user: true,
            trigger: "6",
            validator: (value) => {
              if (isNaN(value)) {
                return "value must be a number";
              } else if (value < 18) {
                return "Only 18+ can proceed";
              } else if (value > 120) {
                return `${value}? Come on!`;
              }

              return true;
            },
          },
          {
            id: "6",
            message: "Can you help us with your 12 digit unique - Adhar Number",
            trigger: "privacy",
          },
          {
            id: "privacy",
            message: "Don't Worry your info is safe with us.",
            trigger: "aadhar",
          },
          {
            id: "aadhar",
            user: true,
            trigger: "7",
            validator: (value) => {
              if (value.length != 12) {
                return "Enter a valid Aadhar Number";
              }

              return true;
            },
          },
          {
            id: "7",
            message: "Great! Check out your Personal Info.",
            trigger: "review",
          },
          {
            id: "review",
            component: <Review />,
            asMessage: true,
            trigger: "update",
          },
          {
            id: "update",
            message: "Would you like to update some field?",
            trigger: "update-question",
          },
          {
            id: "update-question",
            options: [
              { value: "yes", label: "Yes", trigger: "update-yes" },
              { value: "no", label: "No", trigger: "select" },
            ],
          },
          {
            id: "update-yes",
            message: "What field would you like to update?",
            trigger: "update-fields",
          },
          {
            id: "update-fields",
            options: [
              { value: "name", label: "Name", trigger: "update-name" },
              { value: "gender", label: "Gender", trigger: "update-gender" },
              { value: "age", label: "Age", trigger: "update-age" },
            ],
          },
          {
            id: "update-name",
            update: "name",
            trigger: "7",
          },
          {
            id: "update-gender",
            update: "gender",
            trigger: "7",
          },
          {
            id: "update-age",
            update: "age",
            trigger: "7",
          },
          {
            id: "select",
            message: "How can we help you?",
            trigger: "select-question",
          },

          {
            id: "select-question",
            options: [
              {
                value: "Donate Blood",
                label: "Donate Blood",
                trigger: "new-fir",
              },
              {
                value: "Find A Hospital",
                label: "Find A Hospital",
                trigger: "already-fir",
              },
              {
                value: "Other Issue",
                label: "Other Issue",
                trigger: "other-help",
              },
              { value: "Contact US ", label: "Contact US", trigger: "contact" },
              {
                value: "Issue Solved!",
                label: "Issue Solved!",
                trigger: "end-message",
              },
            ],
          },
          {
            id: "new-fir",
            message:
              "To Donate Blood Visit your nearest Hospital! Hospital Lists are present in one of the pages named 'Hospital'",
            trigger: "select",
          },
          {
            id: "contact",
            message: "Contact",
            trigger: "contact2",
          },
          {
            id: "contact2",
            message: " 112 for emergency services",
            trigger: "contact3",
          },
          {
            id: "contact3",
            message: "Contact 102 for Ambulance",
            trigger: "contact4",
          },
          {
            id: "contact4",
            message: "Contact 011-237716441 for Red Cross Society",
            trigger: "contact5",
          },
          {
            id: "contact5",
            message: "Contact 001-23359379 for Rotary Blood Bank",
            trigger: "select",
          },
          {
            id: "already-fir",
            message:
              "To find a Hospital just visit the page called 'Hospitals'",
            trigger: "select",
          },
          {
            id: "other-help",
            message: "These are Links to various issues we can address",
            trigger: "links",
          },
          {
            id: "links",
            options: [
              {
                value: "RedCross Society",
                label: "RedCross Society",
                trigger: "official1",
              },

              {
                value: "Payment in a Hospital",
                label: "Payment in a Hospital",
                trigger: "not-serious1",
              },

              {
                value: "No hospital in my district",
                label: "No hospital in my district",
                trigger: "talk1",
              },

              {
                value: "Issue Addressed",
                label: "Issue Addressed",
                trigger: "end-message",
              },
            ],
          },
          {
            id: "official1",
            message: "To ",
            trigger: "official",
          },
          {
            id: "official",
            component: (
              <div className="component">
                <ul className="flex">
                  <li>
                    <a href="#">Official Website</a>
                  </li>
                </ul>
              </div>
            ),
            trigger: "select",
          },
          {
            id: "talk1",
            message:
              "We will take the matter seriously and Get back to You!!Thank you for patience",
            trigger: "talk",
          },
          {
            id: "talk",
            component: (
              <div className="component">
                <ul className="flex">
                  <li></li>
                </ul>
              </div>
            ),
            trigger: "select",
          },
          {
            id: "not-serious1",
            message:
              "To check the status of already Filed online Fir check your Home page",
            trigger: "not-serious",
          },

          {
            id: "not-serious",
            component: (
              <div className="component">
                <ul className="flex">
                  <li>
                    <a href="#">Complaint</a>
                  </li>
                </ul>
              </div>
            ),
            trigger: "select",
          },

          {
            id: "end-message",
            message:
              "Thanks for co-opeartion! Feel free to contact further with us!! OR call 112. Have a nice day!",
            end: true,
          },
        ]}
        {...config}
        headerTitle="Nurse Didi: On Duty Sir!"
        placeholder="For your Help"
        speechSynthesis={{ enable: true, lang: "en" }}
      />
    );
  }
}

export default SimpleForm;
