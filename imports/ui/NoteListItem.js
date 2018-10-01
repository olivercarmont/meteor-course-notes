import React from 'react';
import moment from 'moment';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import PropTypes from 'prop-types';

export const NoteListItem = (props) => {
return (
<div onClick={() => {
props.Session.set('selectedNoteId', props.note._id);
}}>
  <h5>{ props.note.title || 'Untitled note' }</h5>
  { props.note.selected ? 'selected' : undefined }
  <p>{ moment(props.note.updatedAt).format('M/DD/YY') }</p>
</div>
);
};

NoteListItem.propTypes = {
note: PropTypes.object.isRequired,
Session: PropTypes.object.isRequired
};

export default createContainer(() => {
return { Session };
}, NoteListItem);
