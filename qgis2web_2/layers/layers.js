var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SO2Itera_1 = new ol.format.GeoJSON();
var features_SO2Itera_1 = format_SO2Itera_1.readFeatures(json_SO2Itera_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SO2Itera_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SO2Itera_1.addFeatures(features_SO2Itera_1);
var lyr_SO2Itera_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SO2Itera_1, 
                style: style_SO2Itera_1,
                popuplayertitle: 'SO2 Itera',
                interactive: true,
    title: 'SO2 Itera<br />\
    <img src="styles/legend/SO2Itera_1_0.png" /> 0 - 0.05<br />\
    <img src="styles/legend/SO2Itera_1_1.png" /> 0.05 - 0.2<br />\
    <img src="styles/legend/SO2Itera_1_2.png" /> 0.2 - 1<br />\
    <img src="styles/legend/SO2Itera_1_3.png" /> 1 - 3.787<br />\
    <img src="styles/legend/SO2Itera_1_4.png" /> 3.787 - 15<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_SO2Itera_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SO2Itera_1];
lyr_SO2Itera_1.set('fieldAliases', {'RWID': 'RWID', 'RWE_INDEX': 'RWE_INDEX', 'MINLEVEL': 'MINLEVEL', 'MAXLEVEL': 'MAXLEVEL', 'FILLCOLOR': 'FILLCOLOR', 'mean': 'mean', });
lyr_SO2Itera_1.set('fieldImages', {'RWID': 'TextEdit', 'RWE_INDEX': 'TextEdit', 'MINLEVEL': 'TextEdit', 'MAXLEVEL': 'TextEdit', 'FILLCOLOR': 'TextEdit', 'mean': 'TextEdit', });
lyr_SO2Itera_1.set('fieldLabels', {'RWID': 'no label', 'RWE_INDEX': 'no label', 'MINLEVEL': 'no label', 'MAXLEVEL': 'no label', 'FILLCOLOR': 'no label', 'mean': 'no label', });
lyr_SO2Itera_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});