/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import { faCloudMeatball } from '@fortawesome/free-solid-svg-icons';
import FormInputWrapper from '../components/FormInputWrapper';

const startDates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const onSubmit = props => console.log(props);
const states = [
  'AK',
  'AL',
  'AR',
  'AS',
  'AZ',
  'CA',
  'CO',
  'CT',
  'DC',
  'DE',
  'FL',
  'GA',
  'GU',
  'HI',
  'IA',
  'ID',
  'IL',
  'IN',
  'KS',
  'KY',
  'LA',
  'MA',
  'MD',
  'ME',
  'MI',
  'MN',
  'MO',
  'MS',
  'MT',
  'NC',
  'ND',
  'NE',
  'NH',
  'NJ',
  'NM',
  'NV',
  'NY',
  'OH',
  'OK',
  'OR',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VA',
  'VI',
  'VT',
  'WA',
  'WI',
  'WV',
  'WY'
];
const validateAmount = (input) => {
  const number = parseInt(input, 10);
  if (number) {
    if (number < 5000 || number > 1000000) {
      return 'Amount must be between 5,000 and 1,000,000 dollars';
    }
  } else {
    return 'Must be number';
  }
  return null;
};
class AnnuityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'amount',
      joint: false,
      showSubmit: false
    };
    this.switchCurrent = this.switchCurrent.bind(this);
    this.handleJointChange = this.handleJointChange.bind(this);
  }

  switchCurrent(e, toBeSet) {
    this.setState({ current: toBeSet });
    if (toBeSet === null) {
      this.setState({ showSubmit: true });
    }
    e.preventDefault();
  }

  handleJointChange({ values }) {
    const { joint } = values;
    if (joint) {
      this.setState({ joint });
    }
  }

  render() {
    const { current, joint, showSubmit } = this.state;
    return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <FormSpy onChange={this.handleJointChange} subscription={{ values: true }} />
            <div>
              <Field
                name="amount"
                component="input"
                defaultValue="100000"
                validate={validateAmount}
              >
                {({ input, meta }) => (
                  <div>
                    <label>Investment Amount</label>
                    <input {...input} />
                    {meta.error && meta.touched && (
                      <span className="validationError">{meta.error}</span>
                    )}
                    <button type="button" onClick={e => this.switchCurrent(e, 'incomeStart')}>
                      Next
                    </button>
                  </div>
                )}
              </Field>
            </div>

            <div>
              <Field name="incomeStart" component="select" defaultValue="Immediately">
                {({ meta }) => (
                  <div>
                    <label>Income Will Begin</label>
                    <option key={0} value={0}>
                      Immediately
                    </option>
                    {startDates.map(number => (
                      <option key={number} value={number}>{`In ${number} years`}</option>
                    ))}
                    {meta.error && meta.touched && (
                      <span className="validationError">{meta.error}</span>
                    )}
                    <button type="button" onClick={e => this.switchCurrent(e, 'age')}>
                      Next
                    </button>
                    <button type="button" onClick={e => this.switchCurrent(e, 'amount')}>
                      Previous
                    </button>
                  </div>
                )}
              </Field>
            </div>
            <FormInputWrapper
              switchCurrent={this.switchCurrent}
              name="age"
              current={current}
              previous="incomeStart"
              next="gender"
            >
              <div>
                <label>Age</label>
                <Field name="age" component="input" placeholder="age" />
              </div>
            </FormInputWrapper>
            <FormInputWrapper
              switchCurrent={this.switchCurrent}
              name="gender"
              current={current}
              previous="age"
              next="state"
            >
              <div>
                <label>Gender</label>
                <Field name="gender" component="select" defaultValue="Male">
                  <option>Male</option>
                  <option>Female</option>
                </Field>
              </div>
            </FormInputWrapper>
            <FormInputWrapper
              switchCurrent={this.switchCurrent}
              name="state"
              current={current}
              previous="age"
              next="joint"
            >
              <div>
                <label>State</label>
                <Field name="state" component="select" defaultValue="AK">
                  {states.map(state => (
                    <option key={state}>{state}</option>
                  ))}
                </Field>
              </div>
            </FormInputWrapper>
            <FormInputWrapper
              switchCurrent={this.switchCurrent}
              name="joint"
              current={current}
              previous="state"
              next={joint ? 'second-age' : 'phone'}
            >
              <div>
                <label>Is this a single person or a joint annuity?</label>
                <Field name="joint" component="select" defaultValue="Single Person">
                  <option>Single Person</option>
                  <option>Joint Annuity</option>
                </Field>
              </div>
            </FormInputWrapper>
            <FormInputWrapper
              switchCurrent={this.switchCurrent}
              name="second-age"
              current={current}
              previous="joint"
              next="second-gender"
            >
              <div>
                <label> Second Age</label>
                <Field name="second-age" component="input" placeholder="age" />
              </div>
            </FormInputWrapper>
            <FormInputWrapper
              switchCurrent={this.switchCurrent}
              name="second-gender"
              current={current}
              previous="second-age"
              next="phone"
            >
              <div>
                <label>Second Gender</label>
                <Field name="second-gender" component="select" defaultValue="Male">
                  <option>Male</option>
                  <option>Female</option>
                </Field>
              </div>
            </FormInputWrapper>
            <FormInputWrapper
              switchCurrent={this.switchCurrent}
              name="phone"
              current={current}
              previous="second-gender"
              next={null}
            >
              <div>
                <label>Your Phone Number</label>
                <Field name="phone-number" component="input" placeholder="800-111-2222" />
              </div>
            </FormInputWrapper>
            {showSubmit && (
              <button type="submit" disabled={pristine || invalid}>
                Submit
              </button>
            )}
          </form>
        )}
      />
    );
  }
}

export default AnnuityForm;
