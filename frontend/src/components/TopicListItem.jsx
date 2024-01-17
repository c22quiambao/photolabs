//TopicListItem.jsx
import React from "react";

import "../styles/TopicListItem.scss";

//const sampleDataForTopicListItem = {
//  id: "1",
//  slug: "topic-1",
//  label: "Nature",
//};

const TopicListItem = (props) => {
	console.log(" TopicListItem props", props);
  const { id, slug, title } = props;

  return (
		<div
      className="topic-list__item"
      key={id}
		>
			{/* Insert React */}
			<span>{title}</span>
		</div>
	);
};

export default TopicListItem;
