//TopicListItem.jsx
import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
	console.log(" TopicListItem props", props);
  const { id, slug, title } = props;

  return (
		<div
      className="topic-list__item"
      key={id}
		>
			<span>{title}</span>
		</div>
	);
};

export default TopicListItem;
