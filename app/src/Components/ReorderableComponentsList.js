import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";
import Toolbar from "./Toolbar";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

const Container = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export default class ReorderableComponentsList extends Component {

  static propTypes = {
    list: PropTypes.array.isRequired,
    ListItemComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.node]),
    addItem: PropTypes.func.isRequired,
    removeItemAtIndex: PropTypes.func.isRequired,
    moveUpItemAtIndex: PropTypes.func.isRequired,
    moveDownItemAtIndex: PropTypes.func.isRequired,
    itemTypeLabel: PropTypes.string.isRequired,
  }

  render() {
    const {list, ListItemComponent, addItem, itemTypeLabel, removeItemAtIndex, moveUpItemAtIndex, moveDownItemAtIndex} = this.props;
    return (
      <div>
        <Toolbar>
          <PrimaryButton type="button" onClick={addItem}>+ Add a new {itemTypeLabel}</PrimaryButton>)
        </Toolbar>
        {list.map((item, index) => (
          <Container key={index}>
            <hr/>
            <ListItemComponent data={item} index={index}/>
            <Toolbar>
              <div style={{float: 'left'}}>
                <SecondaryButton type="button" onClick={() => removeItemAtIndex(index)}>
                  Remove this {itemTypeLabel}
                </SecondaryButton>
              </div>
              <div>
                {index !== 0 && <SecondaryButton type="button" onClick={() => moveUpItemAtIndex(index)}>
                  ⬆ Move up
                </SecondaryButton>}
                {index !== list.length - 1 &&
                <SecondaryButton type="button" onClick={() => moveDownItemAtIndex(index)}>
                  ⬇ Move down
                </SecondaryButton>}
              </div>
            </Toolbar>
          </Container>
        ))}
      </div>
    )
  }
}