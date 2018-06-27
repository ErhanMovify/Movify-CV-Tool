import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Toolbar from './Toolbar';
import SecondaryButton from './Buttons/SecondaryButton';
import PrimaryButton from './Buttons/PrimaryButton';

const Container = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

const ReorderableComponentsList = ({
  list,
  ListItemComponent,
  addItem,
  itemTypeLabel,
  removeItemAtIndex,
  moveUpItemAtIndex,
  moveDownItemAtIndex,
}) => (
  <div>
    <Toolbar>
      <PrimaryButton type="button" onClick={addItem}>
        {`+ Add a new ${itemTypeLabel}`}
      </PrimaryButton>
    </Toolbar>
    {list.map((item, index) => (
      <Container key={JSON.stringify(item)}>
        <hr />
        <ListItemComponent data={item} index={index} />
        <Toolbar>
          <div style={{ float: 'left' }}>
            <SecondaryButton type="button" onClick={() => removeItemAtIndex(index)}>
              {`Remove this ${itemTypeLabel}`}
            </SecondaryButton>
          </div>
          <div>
            {index !== 0 && (
              <SecondaryButton type="button" onClick={() => moveUpItemAtIndex(index)}>
                ⬆ Move up
              </SecondaryButton>
            )}
            {index !== list.length - 1 && (
              <SecondaryButton type="button" onClick={() => moveDownItemAtIndex(index)}>
                ⬇ Move down
              </SecondaryButton>
            )}
          </div>
        </Toolbar>
      </Container>
    ))}
  </div>
);

ReorderableComponentsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  ListItemComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
  addItem: PropTypes.func.isRequired,
  removeItemAtIndex: PropTypes.func.isRequired,
  moveUpItemAtIndex: PropTypes.func.isRequired,
  moveDownItemAtIndex: PropTypes.func.isRequired,
  itemTypeLabel: PropTypes.string.isRequired,
};

export default ReorderableComponentsList;
