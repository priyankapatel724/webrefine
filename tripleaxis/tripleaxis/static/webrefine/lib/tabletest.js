//my file
Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath('Ext.ux', '/static/lib/ext/examples/ux');
Ext.Loader.setPath('Ext.selection', '/static/lib/ext/src/selection');
Ext.Loader.setPath('Ext.grid', '/static/lib/ext/src/grid');

Ext.require([
    'Ext.layout.container.*',
    'Ext.tab.*',
    'Ext.grid.*',
    'Ext.form.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*',
    'Ext.form.*',
    'Ext.ux.RowExpander',
    'Ext.selection.CellModel'
]);

Ext.onReady(function () {
    /* 

     */

    //The following line is evil and worse, it is impolite.    We should try to replace it!!
      
    var aField = Ext.create('Ext.form.field.Number',{
        fieldLabel: 'a',
        labelPad:'2',
        labelWidth:'19',
        labelAlign:'left',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 80
    });

    var bField = Ext.create('Ext.form.field.Number',{
        fieldLabel: '__b',
        labelPad:'2',
        labelWidth:'30',
        labelAlign:'left',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 90
    });

    var cField = Ext.create('Ext.form.field.Number',{
        fieldLabel: '__c',
        labelPad:'2',
        labelWidth:'19',
        labelAlign:'left',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 80
    });

    var alphaField = Ext.create('Ext.form.field.Number',{
        fieldLabel: 'α',
        labelPad:'2',
        labelWidth:'19',
        labelAlign:'left',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 80
    });

    var betaField = Ext.create('Ext.form.field.Number',{
        fieldLabel: '__β',
        labelPad:'2',
        labelWidth:'19',
        labelAlign:'left',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '1',
        hideTrigger: true,
	maxWidth: 90
    });

    var gammaField = Ext.create('Ext.form.field.Number',{
        fieldLabel: '__γ',
        labelPad:'2',
        labelWidth:'19',
        labelAlign:'left',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 80
    });

    var spaceGroupField = Ext.create('Ext.form.field.Number',{
        fieldLabel: 'Space Group',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'top',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 80
    });

    var radiationField = Ext.create('Ext.form.field.Number',{
        fieldLabel: 'Radiation Type',
        labelPad:'2',
        labelWidth:'80',
        labelAlign:'left',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 100
    });

    var wavelengthField = Ext.create('Ext.form.field.Number',{
        fieldLabel: 'Wavelength',
        labelPad:'2',
        labelWidth:'80',
        labelAlign:'left',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 100
    });
    
    var elementField = Ext.create('Ext.form.field.Number',{
        fieldLabel: 'Element',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'top',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });

    var element2Field = Ext.create('Ext.form.field.Number',{
        fieldLabel: '',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'left',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });

    var symbolField = Ext.create('Ext.form.field.Number',{
        fieldLabel: 'Symbol',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'top',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });

    var symbol2Field = Ext.create('Ext.form.field.Number',{
        fieldLabel: '',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'left'
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });

    var wyncoffField = Ext.create('Ext.form.field.Number',{
        fieldLabel: 'Wyncoff Position',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'top',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });

    var wyncoff2Field = Ext.create('Ext.form.field.Number',{
        fieldLabel: '',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'left'
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });

    var xField = Ext.create('Ext.form.field.Number',{
        fieldLabel: 'X',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'top',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });

    var x2Field = Ext.create('Ext.form.field.Number',{
        fieldLabel: '',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'left'
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });

    var yField = Ext.create('Ext.form.field.Number',{
        fieldLabel: 'Y',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'top',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });

    var y2Field = Ext.create('Ext.form.field.Number',{
        fieldLabel: '',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'left'
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });

    var zField = Ext.create('Ext.form.field.Number',{
        fieldLabel: 'Z',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'top',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });

    var z2Field = Ext.create('Ext.form.field.Number',{
        fieldLabel: '',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'left'
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });

    var occupancyField = Ext.create('Ext.form.field.Number',{
        fieldLabel: 'Occupancy',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'top',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });

    var occupancy2Field = Ext.create('Ext.form.field.Number',{
        fieldLabel: '',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'left'
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });

    var bField = Ext.create('Ext.form.field.Number',{
        fieldLabel: 'B',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'top',
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });

    var b2Field = Ext.create('Ext.form.field.Number',{
        fieldLabel: '',
        labelPad:'2',
        labelWidth:'2',
        labelAlign:'left'
        allowBlank: false,
        decimalPrecision: 7,
        anchor: '-1',
        hideTrigger: true,
	maxWidth: 50
    });
    // ********* START - Setting up lattice constants GUI  *********


    var latticeFieldSetTop = {
        xtype       : 'fieldset',
        border      : false,
        defaultType : 'numberfield',
        defaultMargin : {top: 0, right: 5, bottom: 0, left: 5},
        padding: '0 5 0 5',
        defaults    : {
                        allowBlank : false,
                        decimalPrecision: 10
                      },
        items: [
                {
                xtype       : 'container',
                border      : false,
                width: 350,
                height: 250,
                layout: {
                    type: 'hbox',
                    //align: 'stretch'
                        },
                anchor      : '85%',
                items       : [
                                {
<<<<<<< HEAD
                            xtype       : 'container',
                            layout      : 'fit',
                            width       : 100,
                            labelWidth  : 10,
                            items   : [aField]
=======
                                    xtype       : 'panel',
                                    //layout      : 'column',
                                    //width       : 50,
                                    //labelWidth  : 5,
                                    items   : [aField],
                                    //flex:1, 
				    border: false,
                                } ,
				
                                {
                                    xtype       : 'panel',
                                    //layout      : 'column',
                                    //width       : 50,
                                    //labelWidth  : 5,
                                   // flex:1,
                                    items   : [bField], 
				    border: false,
                                },
                                {
                                    xtype       : 'panel',
                                    //layout      : 'column',
                                    //width       : 50,
                                    //labelWidth  : 5,
                                   // flex:1,
                                    items   : [cField], 
				    border: false,
>>>>>>> 86b4b5d7224cea31a83360b098641b76bab0548f
                                }
                                ]
                  },
		          
            ]
    }

    var latticeFieldSetMiddle = {
        xtype       : 'fieldset',
        border      : false,
        defaultType : 'numberfield',
        defaultMargin : {top: 0, right: 5, bottom: 0, left: 5},
        padding: '0 5 0 5',
        defaults    : {
                        allowBlank : false,
                        decimalPrecision: 10
                      },
        items: [
                {
                xtype       : 'container',
                border      : false,
                width: 350,
                height: 250,
                layout: {
                    type: 'hbox',
                    //align: 'stretch'
                        },
                anchor      : '85%',
                items       : [
                                {
                                    xtype       : 'panel',
                                    //layout      : 'column',
                                    //width       : 50,
                                    //labelWidth  : 5,
                                    items   : [alphaField],
                                   // flex:1, 
				    border: false,
                                } ,
                                {
                                    xtype       : 'panel',
                                    //layout      : 'column',
                                    //width       : 50,
                                    //labelWidth  : 5,
                                   // flex:1,
                                    items   : [betaField], 
				    border: false,
                                },
                                {
                                    xtype       : 'panel',
                                    //layout      : 'column',
                                    //width       : 50,
                                    //labelWidth  : 5,
                                   // flex:1,
                                    items   : [gammaField], 
				    border: false,
                                }
                                ]
                  },
		          
            ]
    }

     var latticeFieldSetBottom = {
        xtype       : 'fieldset',
        border      : false,
        defaultType : 'numberfield',
        defaultMargin : {top: 0, right: 5, bottom: 0, left: 5},
        padding: '0 5 0 5',
        defaults    : {
                        allowBlank : false,
                        decimalPrecision: 10
                      },
        items: [
                {
                xtype       : 'container',
                border      : false,
                width: 350,
                height: 250,
                layout: {
                    type: 'hbox',
                    //align: 'stretch'
                        },
                anchor      : '85%',
                items       : [
                                {
                                    xtype       : 'panel',
                                    //layout      : 'column',
                                    //width       : 50,
                                    //labelWidth  : 5,
                                    items   : [spaceGroupField],
                                    flex:1, 
				    border: false,
                                }
                                ]
                  },
		          
            ]
    }
       var latticeFieldSetTotal = {
        xtype       : 'fieldset',
        border      : false,
        defaultType : 'numberfield',
        defaultMargin : {top: 0, right: 5, bottom: 0, left: 5},
        padding: '0 5 0 5',
        defaults    : {
                        allowBlank : false,
                        decimalPrecision: 10
                      },
        items: [
                {
                xtype       : 'container',
                border      : true,
                width: 350,
                height: 250,
                layout: {
                    type: 'vbox',
                    //align: 'stretch'
                        },
                anchor      : '85%',
                items       : [
                                {
                                    xtype       : 'panel',
                                    //layout      : 'column',
                                    //width       : 50,
                                    //labelWidth  : 5,
                                    items   : [latticeFieldSetTop],
                                    flex:1, 
				    border: false,
                                } ,
                                {
                                    xtype       : 'panel',
                                    //layout      : 'column',
                                    //width       : 50,
                                    //labelWidth  : 5,
                                    flex:1,
                                    items   : [latticeFieldSetMiddle], 
				    border: false,
                                },
				{
                                    xtype       : 'panel',
                                    //layout      : 'column',
                                    //width       : 50,
                                    //labelWidth  : 5,
                                    flex:1,
                                    items   : [latticeFieldSetBottom], 
				    border: false,
                                }
				
                                ]
                  },
		          
            ]
    }

    var spectrometerFieldSetTotal = {
        xtype       : 'fieldset',
        border      : false,
        defaultType : 'numberfield',
        defaultMargin : {top: 0, right: 5, bottom: 0, left: 5},
        padding: '0 5 0 5',
        defaults    : {
                        allowBlank : false,
                        decimalPrecision: 10
                      },
        items: [
                {
                xtype       : 'container',
                border      : false,
                width: 500,
                height: 250,
                layout: {
                    type: 'vbox',
                    //align: 'stretch'
                        },
                anchor      : '85%',
                items       : [
                                {
                                    xtype       : 'panel',
                                    //layout      : 'column',
                                    //width       : 50,
                                    //labelWidth  : 5,
                                    items   : [radiationField],
                                    //flex:1, 
				    border: false,
                                } ,
                                {
                                    xtype       : 'panel',
                                    //layout      : 'column',
                                    //width       : 50,
                                    //labelWidth  : 5,
                                   // flex:1,
                                    items   : [wavelengthField], 
				    border: false,
                                }
                                ]
                  },
		          
            ]
    }

    var innerRightTopPanel = {
        xtype       : 'fieldset',
        border      : false,
        defaultType : 'numberfield',
        defaultMargin : {top: 0, right: 5, bottom: 0, left: 5},
        padding: '0 5 0 5',
        defaults    : {
                        allowBlank : false,
                        decimalPrecision: 10
                      },
        items: [
                {
                xtype       : 'container',
                border      : false,
                width: 790,
                height: 250,
                layout: {
                    type: 'hbox',
                    //align: 'stretch'
                        },
                anchor      : '85%',
                items       : [
                                {
                                    title   : 'Lattice Parameters', 
				    xtype       : 'panel',
                                    //layout      : 'column',
                                    //width       : 50,
                                    //labelWidth  : 5,
                                    items   : [latticeFieldSetTotal],
                                    flex:1
                                } ,
                                {
                                    title   : 'Spectrometer Parameters',
				    xtype       : 'panel',
                                    //layout      : 'column',
                                    //width       : 500,
                                    //labelWidth  : 5,
                                    flex:1,
                                    items   : [spectrometerFieldSetTotal]
                                }
                                ]
                  },
		          
            ]
    }

      
        var TopPanel = new Ext.Panel({
        layout: 'table',
        width: 900,
        layoutConfig: {
            columns: 2
        },
        items: [innerRightTopPanel]
    });


    var myTabs = new Ext.TabPanel({
        resizeTabs: true, // turn on tab resizing
        minTabWidth: 115,
        tabWidth: 135,
        enableTabScroll: true,
        width: 793,
        height: 524,
        activeItem: 'webrefinetab', //Making the calculator tab selected first
        defaults: {autoScroll:true},
        items: [
            {
                title: 'WebRefine',
                id: 'webrefinetab',
                iconCls: '/static/img/silk/calculator.png',
                items: [TopPanel]
            }, {
                title: 'Help Manual',
                id: 'helpmanualtab',
                padding: 5,
                iconCls: '/static/img/silk/help.png',
                html: '<br/><h1>' +
                    'UB Matrix Calculator for 3- and 4-circle Neutron and X-ray Diffractometers' + '</h1> <br/><br/> <h3>' +
                    'Performing Calculations' + '</h3> <br/> <P>' +
                    '&nbsp; **Note: if you need an additional row for a table, click on its "Add New Row" button.' + '<br/><br/>' +
                    '1) Enter in your observed reflections in the Observations table. For help observing reflections:' + '<br/>' +
                    '&nbsp;&nbsp; a) Input the lattice parameters' + '<br/>' +
                    '&nbsp;&nbsp; b) Input the (h, k, l) indices in the Observations table' + '<br/>' +
                    '&nbsp;&nbsp; c) Click on "Calculate 2θ" to compute the 2θ values for those indices' + '<br/><br/>' +
                    '2) If you only have two observations:' + '<br/>' +
                    '&nbsp;&nbsp; a) Input the lattice parameters (if not already entered)' + '<br/>' +
                    '&nbsp;&nbsp; b) Click the "Calculate UB" to calculate the UB matrix' + '<br/><br/>' +
                    '3) If you have more than two observations:' + '<br/>' +
                    '&nbsp;&nbsp; a) Click on "Refine UB" to calculate the refined UB matrix' + '<br/>' +
                    '&nbsp;&nbsp; b) Click on "Evaluate Lattice" to compute the lattice parameters' + '<br/><br/>' +
                    '4) Input the (h, k, l) indices of the reflections that you want calculated in Desired Results table' + '<br/>' +
                    '5) Select the mode for your calculation from the drop-down menu. To obtain a solution, one of the following must be selected:' + '<br/>' +
                    '&nbsp;&nbsp; a) Bisecting (Omega=0)' + '<br/>' +
                    '&nbsp;&nbsp; b) Phi Fixed' + '<br/>' +
                    '&nbsp;&nbsp; c) Scattering Plane' + '<br/><br/>' +
                    '6) Depending on your mode selection, additional input may be required' + '<br/>' +
                    '7) If you selected Phi Fixed mode, input the fixed phi value' + '<br/>' +
                    '8) If you selected Scattering Plane mode, enter the (h, k, l) indices for the two vectors that define the Scattering Plane' + '<br/>' +
                    '9) Click on the "*** Calculate Results ***" button to calculate the angles for the desired indices' + '<br/>' +
                    '10) You may change values and repeat the calculations as frequently as desired' + '<br/><br/><br/> </P> <h3>' +

                    'Saving Data' + '</h3> <br/> <P>' +
                    'To save your data, you must download a textfile of your data by clicking the "Save & Download Data" button. This file will be downloaded to your designated download directory, or will prompt you for a download location, depending on browser settings.' + '<br/><br/>' +
                    'WARNING: Editing the saved file may result in a loss of data or failure to upload. See "Alternate Saving/Loading Usage" for more details.' + '<br/><br/><br/> </P> <h3>' +

                    'Loading Data' + '</h3> <br/> <P>' +
                    '1) Click the "Browse" button' + '<br/>' +
                    '2) Select your data textfile' + '<br/>' +
                    '3) Click the "Load Data" button' + '<br/><br/><br/></P> <h3>' +

                    'Alternate Saving/Loading Usage' + '</h3> <br/> <P>' +
                    'Due to the nature of the loading and saving mechanisms, data may be entered by directly editing a textfile and loading it into the program (loading instructions above). There are 9 essential lines of text that must be located within your file for it to load. 7 are data headers, telling the order to put the data in, which are immediately followed by the appropriate data, separated by commas, on the following line(s). If you have no data for a specific header, leave the subsequent line blank. These headers are (without the quotes):' + '<br/>' +
                    '&nbsp;&nbsp; "#Mode"' + '<br/>' +
                    '&nbsp;&nbsp; "#a b c alpha beta gamma wavelength"' + '<br/>' +
                    '&nbsp;&nbsp; "#Observations h k l twotheta theta chi phi"' + '<br/>' +
                    '&nbsp;&nbsp; "#Scattering Plane Vectors h k l"' + '<br/>' +
                    '&nbsp;&nbsp; "#Fixed Phi Value"' + '<br/>' +
                    '&nbsp;&nbsp; "#Desired h k l twotheta theta omega chi phi"' + '<br/>' +
                    '&nbsp;&nbsp; "#UBmatrix"' + '<br/><br/>' +
                    'Uniquely, the line following "#UBmatrix" should be one of three options:' + '<br/>' +
                    '&nbsp;&nbsp; "no" --------- UBmatrix is not calculated.' + '<br/>' +
                    '&nbsp;&nbsp; "yes" -------- UB matrix is calculated. Its 9 values should be on the next line.' + '<br/>' +
                    '&nbsp;&nbsp; "refined" -- UB matrix is refined. Its 9 values should be on the next line.' + '<br/><br/>' +
                    'Furthermore, there is no limit to the amount of observaitons or desired results data. Consequently, they require an ending statement that immediately follows the last line of observations or desired results. These final 2 essential lines are:' + '<br/>' +
                    '&nbsp;&nbsp; "#End observations"' + '<br/>' +
                    '&nbsp;&nbsp; "#End desired"' + '<br/><br/>' +
                    'For example, a data textfile may look like this (shown in blue below). Note that header ordering and spaces are optional:' + '<br/><br/> </P> <P style="color:blue">' +
                    //START OF FILE
                    '#Mode' + '<br/>' +
                    'Scattering Plane' + '<br/><br/>' +

                    '#a b c alpha beta gamma wavelength' + '<br/>' +
                    '3.9091056,3.9091018,3.9091019,89.9999575,90.0001171,90.0000603,2.35916' + '<br/><br/>' +

                    '#Observations h k l twotheta theta chi phi' + '<br/>' +
                    '1,1,0,50.522,25.261,88.1065,78.428' + '<br/>' +
                    '0,0,1,35.1257,17.5628,-178.8505,-48.94' + '<br/>' +
                    '0,1,0,35.1257,17.5628,43.4843,42.1502' + '<br/>' +
                    '1,0,0,35.1257,17.5628,133.5075,39.8488' + '<br/>' +
                    '1,1,1,63.0205,31.5102,126.441,-51.0087' + '<br/>' +
                    '2,1,1,95.3162,47.658,120.124,-16.956' + '<br/>' +
                    '#End observations' + '<br/><br/>' +

                    '#UBmatrix' + '<br/>' +
                    'refined ' + '<br/>' +
                    '-0.135209723313,0.13760748667,-0.16799695155,-0.112847227161,0.124557757337,0.192849947079,0.18553738062,0.176039655796,-0.00513161157565'+ '<br/><br/>' +

                    '#Scattering Plane Vectors h k l' + '<br/>' +
                    '1,0,0' + '<br/>' +
                    '0,1,1' + '<br/><br/>' +

                    '#Fixed Phi Value' + '<br/>' +
                    '236' + '<br/><br/>' +

                    '#Desired h k l twotheta theta omega chi phi' + '<br/>' +
                    '1,1,-1,Invalid,Vector!,Not in,Scattering,Plane.' + '<br/>' +
                    '1,1,1,63.0204001841,53.1674731954,21.6572731033,120.051971519,-12.5966659616' + '<br/>' +
                    '1,1,2,0,0,0,0,0' + '<br/>' +
                    '#End desired' + '<br/><br/></P>' +
                    //END OF FILE
                    'In terms of usability, the desired h,k,l may be input with 0 for their angle values (as shown in the last line of the desired input). These angles can then be computed by loading in your data file and using the calculator.'

            }
        ]
    });

// ************************** END - Setting up the tabs  **************************
    myTabs.render('tabs');
});
