import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Card from '../components/Card';
import Fieldset from '../components/Fieldset';
import TextInput, { Label } from '../components/TextInput';
import Textarea from '../components/Textarea';
import * as basicInfoActions from '../reducers/basicInfo';

const countryOptions = [{ name: 'Belgium', value: 'BE' }, { name: 'Luxembourg', value: 'LU' }];

const SelectContainer = styled.div`
  display: flex;
`;

const BasicInfo = (
  {
    firstName,
    lastName,
    position,
    email,
    phone,
    country,
    executiveSummary,
    setFirstName,
    setLastName,
    setPosition,
    setEmail,
    setPhone,
    setCountry,
    setExecutiveSummary,
  },
) => (
  <Card>
    <Fieldset legend="Information:">
      <TextInput
        label="First name"
        name="firstName"
        value={firstName}
        onChange={setFirstName}
        required
      />
      <TextInput
        label="Last name"
        name="lastName"
        value={lastName}
        onChange={setLastName}
        required
      />
      <TextInput
        label="Position"
        name="position"
        value={position}
        onChange={setPosition}
        required
      />
      <TextInput
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={setEmail}
        required
      />
      <TextInput
        label="Phone"
        name="phone"
        type="tel"
        value={phone}
        onChange={setPhone}
        required
      />
      <SelectContainer>
        <Label>Country</Label>
        <select
          onChange={event => setCountry(event.target.value)}
          value={country}
        >
          {countryOptions.map(option => <option value={option.value}>{option.name}</option>)}
        </select>
      </SelectContainer>
    </Fieldset>
    <Fieldset legend="Executive summary">
      <Textarea
        name="executiveSummary"
        height={170}
        maxLength={2500}
        value={executiveSummary}
        onChange={setExecutiveSummary}
        required
      />
    </Fieldset>
  </Card>
);

BasicInfo.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  executiveSummary: PropTypes.string.isRequired,
  setFirstName: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPhone: PropTypes.func.isRequired,
  setCountry: PropTypes.func.isRequired,
  setExecutiveSummary: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    firstName: state.basicInfo.firstName,
    lastName: state.basicInfo.lastName,
    position: state.basicInfo.position,
    email: state.basicInfo.email,
    phone: state.basicInfo.phone,
    country: state.basicInfo.country,
    executiveSummary: state.basicInfo.executiveSummary,
  }),
  dispatch => bindActionCreators({
    setFirstName: basicInfoActions.setFirstName,
    setLastName: basicInfoActions.setLastName,
    setPosition: basicInfoActions.setPosition,
    setEmail: basicInfoActions.setEmail,
    setPhone: basicInfoActions.setPhone,
    setCountry: basicInfoActions.setCountry,
    setExecutiveSummary: basicInfoActions.setExecutiveSummary,
  }, dispatch),
)(BasicInfo);
