import './testButton.scss';

type Props = {
    buttonText: string;
}

function TestButton({ buttonText }: Props) {

    function navToTest() {
        if ( window.location.href.includes("fragor") ) {
            window.location.reload();
        }
    }

    return (
        <div>
            <button className="homeButton" onClick={() => navToTest()}>
                { buttonText }
            </button>
        </div>
    );
}
  
export default TestButton;