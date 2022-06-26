import React from 'react';
import './Modal.css'

function Modal(props) {

    // useState/Effect to trigger modal display
    const [modalDisplay, setmodalDisplay] = React.useState({...props.display});
    const onButtonClick = () => { setmodalDisplay("none") }

    React.useEffect(() => {
        var showModal = (props.display ? 'block' : 'none');
        setmodalDisplay(showModal);
    }, [props.display])



    if (props.button) {
        var btnDisplay = "inline-block"
    }

    return (
        <div className="modal-container"
            style={
                {
                    display:modalDisplay,
                }
            }>
            <div className="modal" style={
                {
                    width: props.width,
                    height: props.height,
                    backgroundColor: props.bgColor,
                    margin: props.margin
                }
            }>
                <span className="close">&times;</span>
                <p>{props.text}</p>
                <button className='modalBtn' style={
                    {
                        display: btnDisplay,
                        width: props.buttonWidth,
                        height: props.buttonHeight,
                        backgroundColor: props.buttonBgColor,
                        border: props.buttonBorder,
                        margin: props.buttonMargin,
                        padding: props.buttonPadding
                    }
                } onClick={onButtonClick}> {props.buttonText} </button>
            </div>
        </div>
    );
}
export default Modal;