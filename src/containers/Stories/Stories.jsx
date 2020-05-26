import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [ showStory, setShowStories ] = useState(false);

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">

          { stories.length > 0 && stories.map(story => {
            const user = getUserHandler(story.userId)
            return (
              <button 
                key={story.id} 
                type="button" 
                className="user__thumb"
                onClick={}
              >
                <div className="user__thumb__wrapper">
                  {user &&
                    <img src={user.avatar} alt={user.name}/> 
                  }
                </div>
              </button>
          )}) }

        </div>
      </section>

      {/* {showStory &&
        (<Story/>
      )} */}
    </React.Fragment>
  );
};

export default Stories;
