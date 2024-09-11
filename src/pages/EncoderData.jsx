import "./EncoderData.css";
import StatePage from "./StatePage";
import Network from "./NetworkPage";

function EncoderData(props){
    
    const renderContent = () => {
        switch (props.state.activeSection) {
          case 'statePage':
            return <StatePage props = { props } />;
          case 'networkPage':
            return <Network props = { props }/>;
          // case 'indicatorPage':
          //   return <Indicator props = { props }/>;
          // case 'settingsPage':
          //   return <Settings props = { props }/>;
          default:
            return <StatePage props = { props } />;
        }
      };

    return(
        <div>
            { renderContent() }
        </div>
    );
}

export default EncoderData;