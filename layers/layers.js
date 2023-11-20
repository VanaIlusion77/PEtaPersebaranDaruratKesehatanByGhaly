var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SHP_SAMARINDA_DAN_KUTAI_1 = new ol.format.GeoJSON();
var features_SHP_SAMARINDA_DAN_KUTAI_1 = format_SHP_SAMARINDA_DAN_KUTAI_1.readFeatures(json_SHP_SAMARINDA_DAN_KUTAI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP_SAMARINDA_DAN_KUTAI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP_SAMARINDA_DAN_KUTAI_1.addFeatures(features_SHP_SAMARINDA_DAN_KUTAI_1);
var lyr_SHP_SAMARINDA_DAN_KUTAI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SHP_SAMARINDA_DAN_KUTAI_1, 
                style: style_SHP_SAMARINDA_DAN_KUTAI_1,
                interactive: true,
                title: '<img src="styles/legend/SHP_SAMARINDA_DAN_KUTAI_1.png" /> SHP_SAMARINDA_DAN_KUTAI'
            });
var format_SHP_KECAMATAN_SAMARINDA_2 = new ol.format.GeoJSON();
var features_SHP_KECAMATAN_SAMARINDA_2 = format_SHP_KECAMATAN_SAMARINDA_2.readFeatures(json_SHP_KECAMATAN_SAMARINDA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP_KECAMATAN_SAMARINDA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP_KECAMATAN_SAMARINDA_2.addFeatures(features_SHP_KECAMATAN_SAMARINDA_2);
var lyr_SHP_KECAMATAN_SAMARINDA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SHP_KECAMATAN_SAMARINDA_2, 
                style: style_SHP_KECAMATAN_SAMARINDA_2,
                interactive: true,
    title: 'SHP_KECAMATAN_SAMARINDA<br />\
    <img src="styles/legend/SHP_KECAMATAN_SAMARINDA_2_0.png" /> Loa Janan Ilir<br />\
    <img src="styles/legend/SHP_KECAMATAN_SAMARINDA_2_1.png" /> Palaran<br />\
    <img src="styles/legend/SHP_KECAMATAN_SAMARINDA_2_2.png" /> Samarinda Ilir<br />\
    <img src="styles/legend/SHP_KECAMATAN_SAMARINDA_2_3.png" /> Samarinda Kota<br />\
    <img src="styles/legend/SHP_KECAMATAN_SAMARINDA_2_4.png" /> Samarinda Seberang<br />\
    <img src="styles/legend/SHP_KECAMATAN_SAMARINDA_2_5.png" /> Samarinda Ulu<br />\
    <img src="styles/legend/SHP_KECAMATAN_SAMARINDA_2_6.png" /> Samarinda Utara<br />\
    <img src="styles/legend/SHP_KECAMATAN_SAMARINDA_2_7.png" /> Sambutan<br />\
    <img src="styles/legend/SHP_KECAMATAN_SAMARINDA_2_8.png" /> Sungai Kunjang<br />\
    <img src="styles/legend/SHP_KECAMATAN_SAMARINDA_2_9.png" /> Sungai Pinang<br />\
    <img src="styles/legend/SHP_KECAMATAN_SAMARINDA_2_10.png" /> <br />'
        });
var format_RUMAHSAKIT_3 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_3 = format_RUMAHSAKIT_3.readFeatures(json_RUMAHSAKIT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_3.addFeatures(features_RUMAHSAKIT_3);
var lyr_RUMAHSAKIT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUMAHSAKIT_3, 
                style: style_RUMAHSAKIT_3,
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_3.png" /> RUMAH SAKIT'
            });
var format_PUSKESMAS_4 = new ol.format.GeoJSON();
var features_PUSKESMAS_4 = format_PUSKESMAS_4.readFeatures(json_PUSKESMAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESMAS_4.addFeatures(features_PUSKESMAS_4);
var lyr_PUSKESMAS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PUSKESMAS_4, 
                style: style_PUSKESMAS_4,
                interactive: true,
                title: '<img src="styles/legend/PUSKESMAS_4.png" /> PUSKESMAS'
            });
var format_SUNGAI_5 = new ol.format.GeoJSON();
var features_SUNGAI_5 = format_SUNGAI_5.readFeatures(json_SUNGAI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_5.addFeatures(features_SUNGAI_5);
var lyr_SUNGAI_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_5, 
                style: style_SUNGAI_5,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_5.png" /> SUNGAI'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_SHP_SAMARINDA_DAN_KUTAI_1.setVisible(true);lyr_SHP_KECAMATAN_SAMARINDA_2.setVisible(true);lyr_RUMAHSAKIT_3.setVisible(true);lyr_PUSKESMAS_4.setVisible(true);lyr_SUNGAI_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SHP_SAMARINDA_DAN_KUTAI_1,lyr_SHP_KECAMATAN_SAMARINDA_2,lyr_RUMAHSAKIT_3,lyr_PUSKESMAS_4,lyr_SUNGAI_5];
lyr_SHP_SAMARINDA_DAN_KUTAI_1.set('fieldAliases', {'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_SHP_KECAMATAN_SAMARINDA_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', });
lyr_RUMAHSAKIT_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_PUSKESMAS_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_SUNGAI_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_SHP_SAMARINDA_DAN_KUTAI_1.set('fieldImages', {'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_SHP_KECAMATAN_SAMARINDA_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', });
lyr_RUMAHSAKIT_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', });
lyr_PUSKESMAS_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'KWKPKM_': 'TextEdit', 'KMPPKM_': 'TextEdit', 'JPLPKM_': 'TextEdit', 'PKMKODE_': 'TextEdit', 'PKMKAT_': 'TextEdit', 'PKMLMT_': 'TextEdit', });
lyr_SUNGAI_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_SHP_SAMARINDA_DAN_KUTAI_1.set('fieldLabels', {'METADATA': 'no label', 'SRS_ID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_SHP_KECAMATAN_SAMARINDA_2.set('fieldLabels', {'OBJECTID': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'UUPP': 'no label', });
lyr_RUMAHSAKIT_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_PUSKESMAS_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', });
lyr_SUNGAI_5.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_SUNGAI_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});