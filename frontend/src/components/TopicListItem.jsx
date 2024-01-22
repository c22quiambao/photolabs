//TopicListItem.jsx
import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
	const { id, title, setSelectedTopic } = props;

	const handleClick = () => {
		// Call the onClick function with the topic id
		setSelectedTopic(id);
	};
	return (
		<div
			className="topic-list__item"
			key={id}
			onClick={handleClick}
		>
			<span>{title}</span>
		</div>
	);
};

export default TopicListItem;
