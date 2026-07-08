var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2 = new ol.format.GeoJSON();
var features_PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2 = format_PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2.readFeatures(json_PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2.addFeatures(features_PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2);
var lyr_PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2, 
                style: style_PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2,
                popuplayertitle: 'Peta Jumlah Tenaga Kerja Kesehatan Kota Yogyakarta',
                interactive: true,
    title: 'Peta Jumlah Tenaga Kerja Kesehatan Kota Yogyakarta<br />\
    <img src="styles/legend/PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2_0.png" /> Sangat Rendah (22-26 orang)<br />\
    <img src="styles/legend/PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2_1.png" /> Rendah 26-35 orang)<br />\
    <img src="styles/legend/PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2_2.png" /> Sedang (35-43 orang)<br />\
    <img src="styles/legend/PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2_3.png" /> Tinggi (43-53 orang)<br />\
    <img src="styles/legend/PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2_4.png" /> Sangat Tinggi (53-66 orang)<br />' });
var format_Kecamatan_3 = new ol.format.GeoJSON();
var features_Kecamatan_3 = format_Kecamatan_3.readFeatures(json_Kecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_3.addFeatures(features_Kecamatan_3);
var lyr_Kecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_3, 
                style: style_Kecamatan_3,
                popuplayertitle: 'Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/Kecamatan_3.png" /> Kecamatan'
            });
var format_BatasKecamatan_4 = new ol.format.GeoJSON();
var features_BatasKecamatan_4 = format_BatasKecamatan_4.readFeatures(json_BatasKecamatan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_4.addFeatures(features_BatasKecamatan_4);
var lyr_BatasKecamatan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_4, 
                style: style_BatasKecamatan_4,
                popuplayertitle: 'Batas Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_4.png" /> Batas Kecamatan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2.setVisible(true);lyr_Kecamatan_3.setVisible(true);lyr_BatasKecamatan_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2,lyr_Kecamatan_3,lyr_BatasKecamatan_4];
lyr_PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2.set('fieldAliases', {'WADMKC': 'Kecamatan', 'Join_Tenag': 'Perawat', 'Join_Ten_1': 'Perawat', 'Join_Ten_2': 'Bidan', 'Join_Ten_3': 'Tenaga  Kefarmasian', 'Join_Ten_4': 'Kesehatan Masyarakat', 'Join_Ten_5': 'Kesehatan Lingkungan', 'Join_Jumla': 'Jumlah Tenaga Medis (orang)', 'Join_Jum_1': 'Jumlah Tenaga Kesehatan Psikologi Klinis (orang)', 'Join_Jum_2': 'Jumlah Tenaga Keteknisan Medis (orang)', 'Join_Jum_3': 'Jumlah Tenaga Teknik Biomedika (orang)', 'Join_Total': 'Total Tenaga Kesehatan (orang)', });
lyr_Kecamatan_3.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'WADMKC', 'Join_Tenag': 'Join_Tenag', 'Join_Ten_1': 'Join_Ten_1', 'Join_Ten_2': 'Join_Ten_2', 'Join_Ten_3': 'Join_Ten_3', 'Join_Ten_4': 'Join_Ten_4', 'Join_Ten_5': 'Join_Ten_5', 'Join_Jumla': 'Join_Jumla', 'Join_Jum_1': 'Join_Jum_1', 'Join_Jum_2': 'Join_Jum_2', 'Join_Jum_3': 'Join_Jum_3', 'Join_Total': 'Join_Total', });
lyr_BatasKecamatan_4.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'Kecamatan', 'Join_Tenag': 'Perawat', 'Join_Ten_1': 'Perawat (2)', 'Join_Ten_2': 'Bidan', 'Join_Ten_3': 'Tenaga  Kefarmasian', 'Join_Ten_4': 'Kesehatan Masyarakat', 'Join_Ten_5': 'Kesehatan Lingkungan', 'Join_Jumla': 'Jumlah Tenaga Medis (orang)', 'Join_Jum_1': 'Jumlah Tenaga Kesehatan Psikologi Klinis (orang)', 'Join_Jum_2': 'Jumlah Tenaga Keteknisan Medis (orang)', 'Join_Jum_3': 'Jumlah Tenaga Teknik Biomedika (orang)', 'Join_Total': 'Total Tenaga Kesehatan (orang)', });
lyr_PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2.set('fieldImages', {'WADMKC': 'TextEdit', 'Join_Tenag': 'Hidden', 'Join_Ten_1': 'Hidden', 'Join_Ten_2': 'Hidden', 'Join_Ten_3': 'Hidden', 'Join_Ten_4': 'Hidden', 'Join_Ten_5': 'Hidden', 'Join_Jumla': 'TextEdit', 'Join_Jum_1': 'TextEdit', 'Join_Jum_2': 'TextEdit', 'Join_Jum_3': 'TextEdit', 'Join_Total': 'TextEdit', });
lyr_Kecamatan_3.set('fieldImages', {'fid': 'TextEdit', 'WADMKC': 'TextEdit', 'Join_Tenag': 'TextEdit', 'Join_Ten_1': 'TextEdit', 'Join_Ten_2': 'TextEdit', 'Join_Ten_3': 'TextEdit', 'Join_Ten_4': 'TextEdit', 'Join_Ten_5': 'TextEdit', 'Join_Jumla': 'TextEdit', 'Join_Jum_1': 'TextEdit', 'Join_Jum_2': 'TextEdit', 'Join_Jum_3': 'TextEdit', 'Join_Total': 'TextEdit', });
lyr_BatasKecamatan_4.set('fieldImages', {'fid': 'TextEdit', 'WADMKC': 'TextEdit', 'Join_Tenag': 'TextEdit', 'Join_Ten_1': 'TextEdit', 'Join_Ten_2': 'TextEdit', 'Join_Ten_3': 'TextEdit', 'Join_Ten_4': 'TextEdit', 'Join_Ten_5': 'TextEdit', 'Join_Jumla': 'TextEdit', 'Join_Jum_1': 'TextEdit', 'Join_Jum_2': 'TextEdit', 'Join_Jum_3': 'TextEdit', 'Join_Total': 'TextEdit', });
lyr_PetaJumlahTenagaKerjaKesehatanKotaYogyakarta_2.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'Join_Jumla': 'inline label - always visible', 'Join_Jum_1': 'inline label - always visible', 'Join_Jum_2': 'inline label - always visible', 'Join_Jum_3': 'inline label - always visible', 'Join_Total': 'inline label - always visible', });
lyr_Kecamatan_3.set('fieldLabels', {'fid': 'no label', 'WADMKC': 'no label', 'Join_Tenag': 'no label', 'Join_Ten_1': 'no label', 'Join_Ten_2': 'no label', 'Join_Ten_3': 'no label', 'Join_Ten_4': 'no label', 'Join_Ten_5': 'no label', 'Join_Jumla': 'no label', 'Join_Jum_1': 'no label', 'Join_Jum_2': 'no label', 'Join_Jum_3': 'no label', 'Join_Total': 'no label', });
lyr_BatasKecamatan_4.set('fieldLabels', {'fid': 'no label', 'WADMKC': 'no label', 'Join_Tenag': 'no label', 'Join_Ten_1': 'no label', 'Join_Ten_2': 'no label', 'Join_Ten_3': 'no label', 'Join_Ten_4': 'no label', 'Join_Ten_5': 'no label', 'Join_Jumla': 'no label', 'Join_Jum_1': 'no label', 'Join_Jum_2': 'no label', 'Join_Jum_3': 'no label', 'Join_Total': 'no label', });
lyr_BatasKecamatan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});