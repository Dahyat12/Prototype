var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.806000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WPPIndonesia_2 = new ol.format.GeoJSON();
var features_WPPIndonesia_2 = format_WPPIndonesia_2.readFeatures(json_WPPIndonesia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WPPIndonesia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WPPIndonesia_2.addFeatures(features_WPPIndonesia_2);
var lyr_WPPIndonesia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WPPIndonesia_2, 
                style: style_WPPIndonesia_2,
                popuplayertitle: 'WPP Indonesia',
                interactive: false,
    title: 'WPP Indonesia<br />\
    <img src="styles/legend/WPPIndonesia_2_0.png" /> WPP 571<br />\
    <img src="styles/legend/WPPIndonesia_2_1.png" /> WPP 572<br />' });
var format_SHP_Kecamatan_Aceh_3 = new ol.format.GeoJSON();
var features_SHP_Kecamatan_Aceh_3 = format_SHP_Kecamatan_Aceh_3.readFeatures(json_SHP_Kecamatan_Aceh_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP_Kecamatan_Aceh_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP_Kecamatan_Aceh_3.addFeatures(features_SHP_Kecamatan_Aceh_3);
var lyr_SHP_Kecamatan_Aceh_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHP_Kecamatan_Aceh_3, 
                style: style_SHP_Kecamatan_Aceh_3,
                popuplayertitle: 'SHP_Kecamatan_Aceh',
                interactive: false,
                title: '<img src="styles/legend/SHP_Kecamatan_Aceh_3.png" /> SHP_Kecamatan_Aceh'
            });
var format_WilayahPelabuhan_4 = new ol.format.GeoJSON();
var features_WilayahPelabuhan_4 = format_WilayahPelabuhan_4.readFeatures(json_WilayahPelabuhan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahPelabuhan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahPelabuhan_4.addFeatures(features_WilayahPelabuhan_4);
var lyr_WilayahPelabuhan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahPelabuhan_4, 
                style: style_WilayahPelabuhan_4,
                popuplayertitle: 'Wilayah Pelabuhan',
                interactive: true,
                title: '<img src="styles/legend/WilayahPelabuhan_4.png" /> Wilayah Pelabuhan'
            });
var format_PelabuhanAceh_5 = new ol.format.GeoJSON();
var features_PelabuhanAceh_5 = format_PelabuhanAceh_5.readFeatures(json_PelabuhanAceh_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PelabuhanAceh_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PelabuhanAceh_5.addFeatures(features_PelabuhanAceh_5);
var lyr_PelabuhanAceh_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PelabuhanAceh_5, 
                style: style_PelabuhanAceh_5,
                popuplayertitle: 'Pelabuhan Aceh',
                interactive: true,
    title: 'Pelabuhan Aceh<br />\
    <img src="styles/legend/PelabuhanAceh_5_0.png" /> PP<br />\
    <img src="styles/legend/PelabuhanAceh_5_1.png" /> PPI<br />\
    <img src="styles/legend/PelabuhanAceh_5_2.png" /> PPN<br />\
    <img src="styles/legend/PelabuhanAceh_5_3.png" /> PPP<br />\
    <img src="styles/legend/PelabuhanAceh_5_4.png" /> PPS<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_WPPIndonesia_2.setVisible(true);lyr_SHP_Kecamatan_Aceh_3.setVisible(true);lyr_WilayahPelabuhan_4.setVisible(true);lyr_PelabuhanAceh_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_WPPIndonesia_2,lyr_SHP_Kecamatan_Aceh_3,lyr_WilayahPelabuhan_4,lyr_PelabuhanAceh_5];
lyr_WPPIndonesia_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'id': 'id', 'Keterangan': 'Keterangan', });
lyr_SHP_Kecamatan_Aceh_3.set('fieldAliases', {'Kab_Code': 'Kab_Code', 'Kec_Code': 'Kec_Code', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Kec_CodeBr': 'Kec_CodeBr', 'Keterangan': 'Keterangan', });
lyr_WilayahPelabuhan_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Kab/Kota': 'Kab/Kota', 'P_2025': 'P_2025', 'Tongkol': 'Tongkol', 'Tuna': 'Tuna', 'Cakalang': 'Cakalang', 'Layang': 'Layang', 'Kembung': 'Kembung', 'Es Balok': 'Es Balok', 'AIR': 'AIR', 'MINYAK': 'MINYAK', 'OLI': 'OLI', 'GAS': 'GAS', 'GARAM': 'GARAM', 'Kapal': 'Kapal', 'Nelayan': 'Nelayan', });
lyr_PelabuhanAceh_5.set('fieldAliases', {'fid': 'fid', 'No': 'No', 'x': 'x', 'y': 'y', 'Keterangan': 'Keterangan', 'Nama': 'Nama', 'Jenis': 'Jenis', 'Kab/ Kota': 'Kab/ Kota', 'Kec': 'Kec', 'Lokasi': 'Lokasi', });
lyr_WPPIndonesia_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROVINSI': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'id': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_SHP_Kecamatan_Aceh_3.set('fieldImages', {'Kab_Code': 'TextEdit', 'Kec_Code': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kec_CodeBr': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_WilayahPelabuhan_4.set('fieldImages', {'id': 'TextEdit', 'Nama': '', 'Kab/Kota': '', 'P_2025': '', 'Tongkol': '', 'Tuna': '', 'Cakalang': '', 'Layang': '', 'Kembung': '', 'Es Balok': '', 'AIR': '', 'MINYAK': '', 'OLI': '', 'GAS': '', 'GARAM': '', 'Kapal': '', 'Nelayan': '', });
lyr_PelabuhanAceh_5.set('fieldImages', {'fid': 'Range', 'No': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', 'Keterangan': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', 'Kab/ Kota': 'TextEdit', 'Kec': 'TextEdit', 'Lokasi': 'TextEdit', });
lyr_WPPIndonesia_2.set('fieldLabels', {'OBJECTID': 'no label', 'PROVINSI': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'id': 'no label', 'Keterangan': 'no label', });
lyr_SHP_Kecamatan_Aceh_3.set('fieldLabels', {'Kab_Code': 'header label - always visible', 'Kec_Code': 'header label - always visible', 'Kabupaten': 'header label - always visible', 'Kecamatan': 'header label - always visible', 'Kec_CodeBr': 'header label - always visible', 'Keterangan': 'header label - always visible', });
lyr_WilayahPelabuhan_4.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - visible with data', 'Kab/Kota': 'inline label - visible with data', 'P_2025': 'inline label - visible with data', 'Tongkol': 'inline label - visible with data', 'Tuna': 'inline label - visible with data', 'Cakalang': 'inline label - visible with data', 'Layang': 'inline label - visible with data', 'Kembung': 'inline label - visible with data', 'Es Balok': 'inline label - visible with data', 'AIR': 'inline label - visible with data', 'MINYAK': 'inline label - visible with data', 'OLI': 'inline label - visible with data', 'GAS': 'inline label - visible with data', 'GARAM': 'inline label - visible with data', 'Kapal': 'inline label - visible with data', 'Nelayan': 'inline label - visible with data', });
lyr_PelabuhanAceh_5.set('fieldLabels', {'fid': 'hidden field', 'No': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'Keterangan': 'inline label - visible with data', 'Nama': 'header label - always visible', 'Jenis': 'inline label - visible with data', 'Kab/ Kota': 'inline label - visible with data', 'Kec': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', });
lyr_PelabuhanAceh_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});