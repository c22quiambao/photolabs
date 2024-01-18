import React, { useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ closeModal }) => {
	//const [modalState, setModalState] = useState(false);

	//const openModal = () => {
	//	setModalState(true);
	//};
	///const closeModal = () => {
	//	setModalState(false);
  //};

  console.log("closeModal", closeModal);
  console.log("closeModal", typeof closeModal);
	return (
		<div className="photo-details-modal">
			<button
				className="photo-details-modal__close-button"
				onClick={closeModal}
			>
				<img
					src={closeSymbol}
					alt="close symbol"
				/>
			</button>
		</div>
	);
};

export default PhotoDetailsModal;
