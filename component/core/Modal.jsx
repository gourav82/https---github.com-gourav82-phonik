import React, { useRef, useEffect } from "react";
import { noSsrWindow } from "../../helper/Utils";
import useMountTransition from "../hooks/useMountTransition";
import {BsX} from "react-icons/bs";


const Modal = ({ close, show, children, contentClass, background,  isDrawer, hideClose, position, removeWhenClosed = true, showHideLogo, isFullScreen, title, noOverlay, className,showHideClassName }) => {
	const overlayClassName = show ? "active" : "";
	const bodyRef = useRef(noSsrWindow());
	const isTransitioning = useMountTransition(show, 300);

	// Prevent page scrolling when the drawer is open
	useEffect(() => {
		updatePageScroll();
	}, [show]);
	const updatePageScroll = () => {
		if (typeof window !== 'undefined') {
			if (show === false) {
				bodyRef.current.style.overflow = "";
			}
			if (show === true) {
				bodyRef.current.style.overflow = "hidden";
			}
		}
	};

	if (!isTransitioning && removeWhenClosed && !show) {
		return null;
	}

	return (
		<>
		{ !isFullScreen ? <div className={`overlay ${overlayClassName} ${showHideClassName}`} onClick={noOverlay ? null : close} /> : null}
		<div className={`drawer-container bg--${ background ? background : 'white'}  ${isDrawer ? `drawer ${position ? position : ''}` : 'modal'} ${overlayClassName} ${show ? 'open' : ''} ${isTransitioning ? 'in' : ''}  ${isFullScreen ? 'fullScreen' : ''} ${className ? className : ''}` } >
			{hideClose ? null :
				<div className="modal-header flex flex--align-items-center flex--justify-content-center position--relative">
					{title ?
						<h4 className="color--black font--bolder font--18">{title}</h4> : ''
					}
					{/* {showHideLogo && <Logo className={"flex flex--justify-content-center"} />} */}
					<button className={`${!isFullScreen ? 'close' : 'modal--header-close'} color--${isFullScreen ? 'black' : 'white'}`} onClick={close}>
					{/* <Icon icoName="close" size="20" color='white' /> */}
					<BsX className='fs--25 color--error'/>

					</button>
				</div>
			}
			<div className={`modal-content ${contentClass || ""} bg--${background ? background : 'white'}`}>
				{children}
			</div>
			
		</div>
		</>
	);
};

export default Modal;


