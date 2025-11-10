var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Export_2_1 = new ol.format.GeoJSON();
var features_Export_2_1 = format_Export_2_1.readFeatures(json_Export_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_2_1.addFeatures(features_Export_2_1);
var lyr_Export_2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Export_2_1, 
                style: style_Export_2_1,
                popuplayertitle: 'Export_2',
                interactive: true,
    title: 'Export_2<br />\
    <img src="styles/legend/Export_2_1_0.png" /> >= 22<br />\
    <img src="styles/legend/Export_2_1_1.png" /> 1 - 4<br />\
    <img src="styles/legend/Export_2_1_2.png" /> 11 - 17<br />\
    <img src="styles/legend/Export_2_1_3.png" /> 17 - 21<br />\
    <img src="styles/legend/Export_2_1_4.png" /> 4 - 7<br />\
    <img src="styles/legend/Export_2_1_5.png" /> 7 - 11<br />\
    <img src="styles/legend/Export_2_1_6.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Export_2_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Export_2_1];
lyr_Export_2_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Export_2_1.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Export_2_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Export_2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});