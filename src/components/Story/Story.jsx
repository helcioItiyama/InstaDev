import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  return (
    <section className="story" data-testid="story">
      <div className="container">
        {console.log(user)}
      </div>
    </section>
  );
};

export default Story;
