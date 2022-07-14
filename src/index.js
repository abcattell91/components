import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Today at 4:45PM"
          comment="Great post!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 5:45PM"
        comment="Seriously amazing!"
        avatar={faker.image.image()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Yesterday at 2:45PM"
        comment="Great post!"
        avatar={faker.image.image()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 1:45PM"
        comment="Seriously amazing!"
        avatar={faker.image.image()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Yesterday at 7:45PM"
        comment="Great post!"
        avatar={faker.image.image()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 3:45PM"
        comment="Love it!"
        avatar={faker.image.image()}
      />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
