var wms_layers = [];


        var lyr_Imagensatelitalgoogle_0 = new ol.layer.Tile({
            'title': 'Imagen satelital google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_departamento_mendoza_1 = new ol.format.GeoJSON();
var features_departamento_mendoza_1 = format_departamento_mendoza_1.readFeatures(json_departamento_mendoza_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_departamento_mendoza_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_departamento_mendoza_1.addFeatures(features_departamento_mendoza_1);
var lyr_departamento_mendoza_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_departamento_mendoza_1, 
                style: style_departamento_mendoza_1,
                popuplayertitle: "departamento_mendoza",
                interactive: true,
                title: '<img src="styles/legend/departamento_mendoza_1.png" /> departamento_mendoza'
            });
var format_humedalac_2 = new ol.format.GeoJSON();
var features_humedalac_2 = format_humedalac_2.readFeatures(json_humedalac_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_humedalac_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_humedalac_2.addFeatures(features_humedalac_2);
var lyr_humedalac_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_humedalac_2, 
                style: style_humedalac_2,
                popuplayertitle: "humedalac",
                interactive: true,
                title: '<img src="styles/legend/humedalac_2.png" /> humedalac'
            });
var format_arroyoclarogps2routes_3 = new ol.format.GeoJSON();
var features_arroyoclarogps2routes_3 = format_arroyoclarogps2routes_3.readFeatures(json_arroyoclarogps2routes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arroyoclarogps2routes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arroyoclarogps2routes_3.addFeatures(features_arroyoclarogps2routes_3);
var lyr_arroyoclarogps2routes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arroyoclarogps2routes_3, 
                style: style_arroyoclarogps2routes_3,
                popuplayertitle: "arroyoclarogps2, routes",
                interactive: true,
                title: '<img src="styles/legend/arroyoclarogps2routes_3.png" /> arroyoclarogps2, routes'
            });

lyr_Imagensatelitalgoogle_0.setVisible(true);lyr_departamento_mendoza_1.setVisible(true);lyr_humedalac_2.setVisible(true);lyr_arroyoclarogps2routes_3.setVisible(true);
var layersList = [lyr_Imagensatelitalgoogle_0,lyr_departamento_mendoza_1,lyr_humedalac_2,lyr_arroyoclarogps2routes_3];
lyr_departamento_mendoza_1.set('fieldAliases', {'PROVINCIA': 'PROVINCIA', 'DEPARTAMTO': 'DEPARTAMTO', 'CABECERA': 'CABECERA', 'PERIMETRO': 'PERIMETRO', 'SUP__HAS_': 'SUP__HAS_', 'Identifica': 'Identifica', 'Identifi_1': 'Identifi_1', 'Pobalción': 'Pobalción', });
lyr_humedalac_2.set('fieldAliases', {'id': 'id', });
lyr_arroyoclarogps2routes_3.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', 'time': 'time', });
lyr_departamento_mendoza_1.set('fieldImages', {'PROVINCIA': '', 'DEPARTAMTO': '', 'CABECERA': '', 'PERIMETRO': '', 'SUP__HAS_': '', 'Identifica': '', 'Identifi_1': '', 'Pobalción': '', });
lyr_humedalac_2.set('fieldImages', {'id': '', });
lyr_arroyoclarogps2routes_3.set('fieldImages', {'name': '', 'symbol': '', 'number': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', 'time': '', });
lyr_departamento_mendoza_1.set('fieldLabels', {'PROVINCIA': 'no label', 'DEPARTAMTO': 'no label', 'CABECERA': 'no label', 'PERIMETRO': 'no label', 'SUP__HAS_': 'no label', 'Identifica': 'no label', 'Identifi_1': 'no label', 'Pobalción': 'no label', });
lyr_humedalac_2.set('fieldLabels', {'id': 'no label', });
lyr_arroyoclarogps2routes_3.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', 'time': 'no label', });
lyr_arroyoclarogps2routes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});