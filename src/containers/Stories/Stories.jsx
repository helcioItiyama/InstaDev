import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [ showStory, setShowStories ] = useState(false);
  const [ selectStory, setSelectStory ] = useState({});
  const [ selectUser, setSelectUser ] = useState({});

  const handleStories = story => {
    const user = getUserHandler(story.userId);
    setSelectStory(story);
    setSelectUser(user);
    setShowStories(!showStory);
  }

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">

          { stories.length > 0 && stories.map((story, index) => {
            const user = getUserHandler(story.userId)
            return (
              <button 
                key={story.id} 
                type="button" 
                className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`}
                onClick={() => handleStories(story)}
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

      {showStory &&
        (<Story
          story={selectStory}
          user={selectUser}
          handleClose={()=> setShowStories(!showStory)}/>
      )}
    </React.Fragment>
  );
};

export default Stories;
