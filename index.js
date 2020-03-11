import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  Environment,
} from 'react-360';
import BasicAppTemplateInfoButton from 'BasicAppTemplateInfoButton.react';
import BasicAppTemplateScenePage from 'BasicAppTemplateScenePage.react';
import dataTour from './data/dataTour';


// referencing an asset from 'static_assets' directory
const INFO_BUTTON_IMAGE = asset('info_icon.png');
const SCENE_COUNT = 3;

// The root react component of the app
export default class VR360 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  _onClick = (index) => {
    this.setState({index: index});
  };

  render() {
    const sceneButtons = [];
    // Keting
    sceneButtons.push(
      <BasicAppTemplateInfoButton
        key={`0`}
        style={styles.button}
        source={dataTour.Keting.img}
        text={` Keting`}
        onClick={() => { this._onClick(0); }}
      />);

    // Fangjian
    sceneButtons.push(
      <BasicAppTemplateInfoButton
          key={`Fangjian`}
          style={styles.button}
          source={dataTour.Fangjian.img}
          text={`Fangjian`}
          onClick={() => { this._onClick(1); }}
      />);

    // Yuanzi
    sceneButtons.push(
      <BasicAppTemplateInfoButton
          key={`2`}
          style={styles.button}
          source={dataTour.Yuanzi.img}
          text={` Yuanzi `}
          onClick={() => { this._onClick(2); }}
      />);

    return (
      <View style={styles.panel}>
        <View style={styles.section}>
          {sceneButtons}
        </View>
      {/*  <View style={styles.scenePage}>*/}
      {/*  <BasicAppTemplateScenePage*/}
      {/*      index={this.state.index} />*/}
      {/*</View>*/}
      </View>
    );
  }
};

// defining StyleSheet
const styles = StyleSheet.create({
  panel: {
    width: 800,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  section: {
    padding: 5,
    width: 750,
    backgroundColor: 'yellow',
    borderColor: 'blue',
    borderWidth: 2,
    flexDirection: 'row',
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
  },
  scenePage: {
    padding: 5,
    width: 600,
    height: 300,
    backgroundColor: 'green',
    borderRadius: 5,
  }
});

// register the root component
// this will be used from client.js by r360.createRoot('BasicAppTemplate' ...)
AppRegistry.registerComponent('VR360', () => VR360);
