//TopicListItem.jsx
import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
	const { id, slug, title } = props;
		console.log("ReadTopicListItem");
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
