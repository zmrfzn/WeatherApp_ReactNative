import { registerRootComponent } from 'expo';

import App from './App';
import NewRelic from 'newrelic-react-native-agent';
import {name, version} from './package.json';
import {Platform} from 'react-native';

    let appToken;

    if (Platform.OS === 'ios') {
        appToken = '<IOS-APP-TOKEN>';
    } else {
        appToken = 'AA33a6a4180d3ed34134ac79f13ff5f49f7f6e7f97-NRMA';
    }

 const agentConfiguration = {
    
    //Android Specific
    // Optional:Enable or disable collection of event data.
    analyticsEventEnabled: true,

    // Optional:Enable or disable crash reporting.
    crashReportingEnabled: true,

    // Optional:Enable or disable interaction tracing. Trace instrumentation still occurs, but no traces are harvested. This will disable default and custom interactions.
    interactionTracingEnabled: true,

    // Optional:Enable or disable reporting successful HTTP requests to the MobileRequest event type.
    networkRequestEnabled: true,

    // Optional:Enable or disable reporting network and HTTP request errors to the MobileRequestError event type.
    networkErrorRequestEnabled: true,

    // Optional:Enable or disable capture of HTTP response bodies for HTTP error traces, and MobileRequestError events.
    httpRequestBodyCaptureEnabled: true,

   //Android Specific
   // Optional: Enable or disable agent logging.
    loggingEnabled: true,

    //iOS Specific
    // Optional:Enable/Disable automatic instrumentation of WebViews
    webViewInstrumentation: true
  };


NewRelic.startAgent(appToken,agentConfiguration);
NewRelic.setJSAppVersion(version);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);