import React from 'react';

/**
* Displays a modal.
*
* @param props 
* list of props you can use :
* - text : "main modal text " 
* - display : true/false  (Hook to switch modal on/off)
* - Button (to display a button below the main text)
* - ButtonText : "char"  (text inside button)
*
* - Css Usable as regular css for MODAL =>
* width / height / bgColor / margin
* - Css Usable as regular css for BUTTON =>
* buttonHeight / buttonHeight / buttonBgColor / buttonMargin / buttonBorder / buttonPadding
*
* @version 1.0.0
*/
function Modal(props) {

    // useState/Effect to trigger modal display
    const [modalDisplay, setmodalDisplay] = React.useState(props.display);
    const onButtonClick = () => { 
        setmodalDisplay("none") 
    }
    React.useEffect(() => {
        var showModal = (props.display ? 'block' : 'none');
        setmodalDisplay(showModal);
    }, [props.display])

    
    // check if the prop.button exist to display it
    var btnDisplay = "none"
    if (props.button) {
        btnDisplay = "inline-block"
    }

    return  (<div className="modal-container"
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
            }><span className="close" onClick={onButtonClick}>
                &times;
            </span>
                
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