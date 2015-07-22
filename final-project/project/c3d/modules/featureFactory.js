// (1) dependencies
var utilities = require('./utilities.js');

// (2) private things
var featureClasses = {};
featureClasses['Feature'] = require('../features/Feature.js');
featureClasses['Antenna'] = require('../features/Antenna.js');
featureClasses['Armadietto'] = require('../features/Armadietto.js');
featureClasses['Archivio'] = require('../features/Archivio.js');
featureClasses['BadgeReader'] = require('../features/BadgeReader.js');
featureClasses['Chair'] = require('../features/Chair.js');
featureClasses['ChairObj'] = require('../features/ChairObj.js');
featureClasses['CoolingSistem'] = require('../features/CoolingSistem.js');
featureClasses['Desk'] = require('../features/Desk.js');
featureClasses['DeskOffice'] = require('../features/DeskOffice.js');
featureClasses['Door'] = require('../features/Door.js');
featureClasses['Drawers'] = require('../features/Drawers.js');
featureClasses['External_wall'] = require('../features/External_wall.js');
featureClasses['FireExtinguisher'] = require('../features/FireExtinguisher.js');
featureClasses['GraphNode'] = require('../features/GraphNode.js');
featureClasses['Hotspot'] = require('../features/Hotspot.js');
featureClasses['Internal_wall'] = require('../features/Internal_wall.js');
featureClasses['Level'] = require('../features/Level.js');
featureClasses['Library'] = require('../features/Library.js');
featureClasses['Light'] = require('../features/Light.js');
featureClasses['MonitorPc'] = require('../features/MonitorPc.js');
featureClasses['Picture'] = require('../features/Picture.js');
featureClasses['Records'] = require('../features/Records.js');
featureClasses['Room'] = require('../features/Room.js');
featureClasses['Router'] = require('../features/Router.js');
featureClasses['SediaScrivania'] = require('../features/SediaScrivania.js');
featureClasses['Server'] = require('../features/Server.js');
featureClasses['SurveillanceCamera'] = require('../features/SurveillanceCamera.js');
featureClasses['Table'] = require('../features/Table.js');
featureClasses['TableMarble'] = require('../features/TableMarble.js');
featureClasses['Tv'] = require('../features/Tv.js');
featureClasses['TorrePc'] = require('../features/TorrePc.js');
featureClasses['Window'] = require('../features/Window.js');
featureClasses['Stair'] = require('../features/Stair.js');
featureClasses['SurveillanceCamera'] = require('../features/SurveillanceCamera.js');

featureClasses['Bed'] = require('../features/Bed.js');

function capitaliseFirstLetter(featureClass) {
	return featureClass.charAt(0).toUpperCase() + featureClass.slice(1);
}

// (3) public/exported things
var self = module.exports = {
	generateFeature: function(feature) {
		var newFeature;
		var featureClass = capitaliseFirstLetter(feature.properties.class);
		if (featureClass in featureClasses) {
			newFeature = new featureClasses[featureClass](feature);
		} else {
			newFeature = new featureClasses['Feature'](feature);
		}
		return newFeature;
	}
}; //close module.exports