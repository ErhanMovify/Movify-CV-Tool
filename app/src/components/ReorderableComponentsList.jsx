import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TrashCanIcon from 'react-icons/lib/fa/trash-o';

import Toolbar from './Toolbar';
import SecondaryButton from './Buttons/SecondaryButton';
import PrimaryButton from './Buttons/PrimaryButton';

const Container = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

const StyledTrashCanIcon = styled(TrashCanIcon)`
  margin-right: 5px;
`;

const ReorderableComponentsList = ({
  listLength,
  ListItemComponent,
  addItem,
  itemTypeLabel,
  removeItemAtIndex,
  moveUpItemAtIndex,
  moveDownItemAtIndex,
}) => {
  const elements = [];
  for (let i = 0; i < listLength; i += 1) {
    elements.push((
      <Container key={i}>
        <hr />
        <ListItemComponent index={i} />
        <Toolbar>
          <div style={{ float: 'left' }}>
            <SecondaryButton type="button" onClick={() => removeItemAtIndex(i)}>
              <StyledTrashCanIcon />
              {`Remove this ${itemTypeLabel}`}
            </SecondaryButton>
          </div>
          <div>
            {i !== 0 && (
              <SecondaryButton type="button" onClick={() => moveUpItemAtIndex(i)}>
                ⬆ Move up
              </SecondaryButton>
            )}
            {i !== listLength - 1 && (
              <SecondaryButton type="button" onClick={() => moveDownItemAtIndex(i)}>
                ⬇ Move down
              </SecondaryButton>
            )}
          </div>
        </Toolbar>
      </Container>
    ));
  }
  return (
    <div>
      {elements}
      <Toolbar>
        <PrimaryButton type="button" onClick={addItem}>
          {`+ Add a new ${itemTypeLabel}`}
        </PrimaryButton>
      </Toolbar>
    </div>
  );
};

ReorderableComponentsList.propTypes = {
  listLength: PropTypes.number.isRequired,
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
