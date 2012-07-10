/**
 * @class Ext.grid.feature.Grouping
 * @extends Ext.grid.feature.Feature
 * 
 * This feature allows to display the grid rows aggregated into groups as specified by the {@link Ext.data.Store#groupers}
 * specified on the Store. The group will show the title for the group name and then the appropriate records for the group
 * underneath. The groups can also be expanded and collapsed.
 * 
 * ## Extra Events
 * This feature adds several extra events that will be fired on the grid to interact with the groups:
 *
 *  - {@link #groupclick}
 *  - {@link #groupdblclick}
 *  - {@link #groupcontextmenu}
 *  - {@link #groupexpand}
 *  - {@link #groupcollapse}
 * 
 * ## Menu Augmentation
 * This feature adds extra options to the grid column menu to provide the user with functionality to modify the grouping.
 * This can be disabled by setting the {@link #enableGroupingMenu} option. The option to disallow grouping from being turned off
 * by thew user is {@link #enableNoGroups}.
 * 
 * ## Controlling Group Text
 * The {@link #groupHeaderTpl} is used to control the rendered title for each group. It can modified to customized
 * the default display.
 * 
 * ## Example Usage
 * 
 *     var groupingFeature = Ext.create('Ext.grid.feature.Grouping', {
 *         groupHeaderTpl: 'Group: {name} ({rows.length})', //print the number of items in the group
 *         startCollapsed: true // start all groups collapsed
 *     });
 * 
 * @ftype grouping
 * @author Nicolas Ferrero
 */
Ext.define('Ext.grid.feature.Grouping', {
    extend: 'Ext.grid.feature.Feature',
    alias: 'feature.grouping',

    eventPrefix: 'group',
    eventSelector: '.' + Ext.baseCSSPrefix + 'grid-group-hd',

    constructor: function() {
        this.collapsedState = {};
        this.callParent(arguments);
    },
    
    /**
     * @event groupclick
     * @param {Ext.view.Table} view
     * @param {HTMLElement} node
     * @param {String} group The name of the group
     * @param {Ext.EventObject} e
     */

    /**
     * @event groupdblclick
     * @param {Ext.view.Table} view
     * @param {HTMLElement} node
     * @param {String} group The name of the group
     * @param {Ext.EventObject} e
     */

    /**
     * @event groupcontextmenu
     * @param {Ext.view.Table} view
     * @param {HTMLElement} node
     * @param {String} group The name of the group
     * @param {Ext.EventObject} e
     */

    /**
     * @event groupcollapse
     * @param {Ext.view.Table} view
     * @param {HTMLElement} node
     * @param {String} group The name of the group
     * @param {Ext.EventObject} e
     */

    /**
     * @event groupexpand
     * @param {Ext.view.Table} view
     * @param {HTMLElement} node
     * @param {String} group The name of the group
     * @param {Ext.EventObject} e
     */

    /**
     * @cfg {String} groupHeaderTpl
     * Template snippet, this cannot be an actual template. {name} will be replaced with the current group.
     * Defaults to 'Group: {name}'
     */
    groupHeaderTpl: 'Group: {name}',

    /**
     * @cfg {Number} depthToIndent
     * Number of pixels to indent per grouping level
     */
    depthToIndent: 17,

    collapsedCls: Ext.baseCSSPrefix + 'grid-group-collapsed',
    hdCollapsedCls: Ext.baseCSSPrefix + 'grid-group-hd-collapsed',

    /**
     * @cfg {String} groupByText Text displayed in the grid header menu for grouping by header
     * (defaults to 'Group By This Field').
     */
    groupByText : 'Group By This Field',
    /**
     * @cfg {String} showGroupsText Text displayed in the grid header for enabling/disabling grouping
     * (defaults to 'Show in Groups').
     */
    showGroupsText : 'Show in Groups',

    /**
     * @cfg {Boolean} hideGroupedHeader<tt>true</tt> to hide the header that is currently grouped (defaults to <tt>false</tt>)
     */
    hideGroupedHeader : false,

    /**
     * @cfg {Boolean} startCollapsed <tt>true</tt> to start all groups collapsed (defaults to <tt>false</tt>)
     */
    startCollapsed : false,

    /**
     * @cfg {Boolean} enableGroupingMenu <tt>true</tt> to enable the grouping control in the header menu (defaults to <tt>true</tt>)
     */
    enableGroupingMenu : true,

    /**
     * @cfg {Boolean} enableNoGroups <tt>true</tt> to allow the user to turn off grouping (defaults to <tt>true</tt>)
     */
    enableNoGroups : true,
    
    enable: function() {
        var me    = this,
            view  = me.view,
            store = view.store,
            groupToggleMenuItem;
            
        if (me.lastGroupIndex) {
            store.group(me.lastGroupIndex);
        }
        me.callParent();
        groupToggleMenuItem = me.view.headerCt.getMenu().down('#groupToggleMenuItem');
        groupToggleMenuItem.setChecked(true, true);
        view.refresh();
    },

    disable: function() {
        var me    = this,
            view  = me.view,
            store = view.store,
            groupToggleMenuItem,
            lastGroup;
            
        lastGroup = store.groupers.first();
        if (lastGroup) {
            me.lastGroupIndex = lastGroup.property;
            store.groupers.clear();
        }
        
        me.callParent();
        groupToggleMenuItem = me.view.headerCt.getMenu().down('#groupToggleMenuItem');
        groupToggleMenuItem.setChecked(true, true);
        groupToggleMenuItem.setChecked(false, true);
        view.refresh();
    },

    getFeatureTpl: function(values, parent, x, xcount) {
        var me = this;
        
        return [
            '<tpl if="typeof rows !== \'undefined\'">',
                // group row tpl
                '<tr class="' + Ext.baseCSSPrefix + 'grid-group-hd ' + (me.startCollapsed ? me.hdCollapsedCls : '') + ' {hdCollapsedCls}"><td class="' + Ext.baseCSSPrefix + 'grid-cell" colspan="' + parent.columns.length + '" {[this.indentByDepth(values)]}><div class="' + Ext.baseCSSPrefix + 'grid-cell-inner"><div class="' + Ext.baseCSSPrefix + 'grid-group-title">{collapsed}' + me.groupHeaderTpl + '</div></div></td></tr>',
                // this is the rowbody
                '<tr id="{viewId}-gp-{name}" class="' + Ext.baseCSSPrefix + 'grid-group-body ' + (me.startCollapsed ? me.collapsedCls : '') + ' {collapsedCls}"><td colspan="' + parent.columns.length + '">{[this.recurse(values)]}</td></tr>',
            '</tpl>'
        ].join('');
    },

    getFragmentTpl: function() {
        return {
            indentByDepth: this.indentByDepth,
            depthToIndent: this.depthToIndent
        };
    },

    indentByDepth: function(values) {
        var depth = values.depth || 0;
        return 'style="padding-left:'+ depth * this.depthToIndent + 'px;"';
    },

    // Containers holding these components are responsible for
    // destroying them, we are just deleting references.
    destroy: function() {
        var me = this;
        
        delete me.view;
        delete me.prunedHeader;
    },

    // perhaps rename to afterViewRender
    attachEvents: function() {
        var me = this,
            view = me.view,
            header, headerId, menu, menuItem;

        view.on({
            scope: me,
            groupclick: me.onGroupClick,
            rowfocus: me.onRowFocus
        });
        view.store.on('groupchange', me.onGroupChange, me);

        me.pruneGroupedHeader();

        if (me.enableGroupingMenu) {
            me.injectGroupingMenu();
        }

        if (me.hideGroupedHeader) {
            header = view.headerCt.down('gridcolumn[dataIndex=' + me.getGroupField() + ']');
            headerId = header.id;
            menu = view.headerCt.getMenu();
            menuItem = menu.down('menuitem[headerId='+ headerId +']');
            if (menuItem) {
                menuItem.setChecked(false);
            }
        }
    },
    
    injectGroupingMenu: function() {
        var me       = this,
            view     = me.view,
            headerCt = view.headerCt;
        headerCt.showMenuBy = me.showMenuBy;
        headerCt.getMenuItems = me.getMenuItems();
    },
    
    showMenuBy: function(t, header) {
        var menu = this.getMenu(),
            groupMenuItem  = menu.down('#groupMenuItem'),
            groupableMth = header.groupable === false ?  'disable' : 'enable';
            
        groupMenuItem[groupableMth]();
        Ext.grid.header.Container.prototype.showMenuBy.apply(this, arguments);
    },
    
    getMenuItems: function() {
        var me                 = this,
            groupByText        = me.groupByText,
            disabled           = me.disabled,
            showGroupsText     = me.showGroupsText,
            enableNoGroups     = me.enableNoGroups,
            groupMenuItemClick = Ext.Function.bind(me.onGroupMenuItemClick, me),
            groupToggleMenuItemClick = Ext.Function.bind(me.onGroupToggleMenuItemClick, me);
        
        // runs in the scope of headerCt
        return function() {
            var o = Ext.grid.header.Container.prototype.getMenuItems.call(this);
            o.push('-', {
                itemId: 'groupMenuItem',
                text: groupByText,
                handler: groupMenuItemClick
            });
            if (enableNoGroups) {
                o.push({
                    itemId: 'groupToggleMenuItem',
                    text: showGroupsText,
                    checked: !disabled,
                    checkHandler: groupToggleMenuItemClick
                });
            }
            return o;
        };
    },


    /**
     * Group by the header the user has clicked on.
     * @private
     */
    onGroupMenuItemClick: function(menuItem, e) {
        var menu = menuItem.parentMenu,
            hdr  = menu.activeHeader,
            view = this.view;

        delete this.lastGroupIndex;
        this.enable();
        view.store.group(hdr.dataIndex);
        this.pruneGroupedHeader();
        
    },

    /**
     * Turn on and off grouping via the menu
     * @private
     */
    onGroupToggleMenuItemClick: function(menuItem, checked) {
        this[checked ? 'enable' : 'disable']();
    },

    /**
     * Prunes the grouped header from the header container
     * @private
     */
    pruneGroupedHeader: function() {
        var me         = this,
            view       = me.view,
            store      = view.store,
            groupField = me.getGroupField(),
            headerCt   = view.headerCt,
            header     = headerCt.down('header[dataIndex=' + groupField + ']');

        if (header) {
            if (me.prunedHeader) {
                me.prunedHeader.show();
            }
            me.prunedHeader = header;
            header.hide();
        }
    },

    getGroupField: function(){
        var group = this.view.store.groupers.first();
        if (group) {
            return group.property;    
        }
        return ''; 
    },

    /**
     * When a row gains focus, expand the groups above it
     * @private
     */
    onRowFocus: function(rowIdx) {
        var node    = this.view.getNode(rowIdx),
            groupBd = Ext.fly(node).up('.' + this.collapsedCls);

        if (groupBd) {
            // for multiple level groups, should expand every groupBd
            // above
            this.expand(groupBd);
        }
    },

    /**
     * Expand a group by the groupBody
     * @param {Ext.core.Element} groupBd
     * @private
     */
    expand: function(groupBd) {
        var me = this,
            view = me.view,
            grid = view.up('gridpanel'),
            groupBdDom = Ext.getDom(groupBd);
            
        me.collapsedState[groupBdDom.id] = false;

        groupBd.removeCls(me.collapsedCls);
        groupBd.prev().removeCls(me.hdCollapsedCls);

        grid.determineScrollbars();
        grid.invalidateScroller();
        view.fireEvent('groupexpand');
    },

    /**
     * Collapse a group by the groupBody
     * @param {Ext.core.Element} groupBd
     * @private
     */
    collapse: function(groupBd) {
        var me = this,
            view = me.view,
            grid = view.up('gridpanel'),
            groupBdDom = Ext.getDom(groupBd);
            
        me.collapsedState[groupBdDom.id] = true;

        groupBd.addCls(me.collapsedCls);
        groupBd.prev().addCls(me.hdCollapsedCls);

        grid.determineScrollbars();
        grid.invalidateScroller();
        view.fireEvent('groupcollapse');
    },
    
    onGroupChange: function(){
        this.view.refresh();
    },

    /**
     * Toggle between expanded/collapsed state when clicking on
     * the group.
     * @private
     */
    onGroupClick: function(view, group, idx, foo, e) {
        var me = this,
            toggleCls = me.toggleCls,
            groupBd = Ext.fly(group.nextSibling, '_grouping');

        if (groupBd.hasCls(me.collapsedCls)) {
            me.expand(groupBd);
        } else {
            me.collapse(groupBd);
        }
    },

    // Injects isRow and closeRow into the metaRowTpl.
    getMetaRowTplFragments: function() {
        return {
            isRow: this.isRow,
            closeRow: this.closeRow
        };
    },

    // injected into rowtpl and wrapped around metaRowTpl
    // becomes part of the standard tpl
    isRow: function() {
        return '<tpl if="typeof rows === \'undefined\'">';
    },

    // injected into rowtpl and wrapped around metaRowTpl
    // becomes part of the standard tpl
    closeRow: function() {
        return '</tpl>';
    },

    // isRow and closeRow are injected via getMetaRowTplFragments
    mutateMetaRowTpl: function(metaRowTpl) {
        metaRowTpl.unshift('{[this.isRow()]}');
        metaRowTpl.push('{[this.closeRow()]}');
    },

    // injects an additional style attribute via tdAttrKey with the proper
    // amount of padding
    getAdditionalData: function(data, idx, record, orig) {
        var view = this.view,
            hCt  = view.headerCt,
            col  = hCt.items.getAt(0),
            o = {},
            tdAttrKey = col.id + '-tdAttr';

        // maintain the current tdAttr that a user may ahve set.
        o[tdAttrKey] = this.indentByDepth(data) + " " + (orig[tdAttrKey] ? orig[tdAttrKey] : '');
        o.collapsed = 'true';
        return o;
    },

    // return matching preppedRecords
    getGroupRows: function(group, records, preppedRecords, fullWidth) {
        var me = this,
            children = group.children,
            rows = group.rows = [],
            view = me.view;
        group.viewId = view.id;

        Ext.Array.each(records, function(record, idx) {
            if (Ext.Array.indexOf(children, record) != -1) {
                rows.push(Ext.apply(preppedRecords[idx], {
                    depth: 1
                }));
            }
        });
        delete group.children;
        group.fullWidth = fullWidth;
        if (me.collapsedState[view.id + '-gp-' + group.name]) {
            group.collapsedCls = me.collapsedCls;
            group.hdCollapsedCls = me.hdCollapsedCls;
        }

        return group;
    },

    // return the data in a grouped format.
    collectData: function(records, preppedRecords, startIndex, fullWidth, o) {
        var me    = this,
            store = me.view.store,
            groups;
            
        if (!me.disabled && store.isGrouped()) {
            groups = store.getGroups();
            Ext.Array.each(groups, function(group, idx){
                me.getGroupRows(group, records, preppedRecords, fullWidth);
            }, me);
            return {
                rows: groups,
                fullWidth: fullWidth
            };
        }
        return o;
    },
    
    // adds the groupName to the groupclick, groupdblclick, groupcontextmenu
    // events that are fired on the view. Chose not to return the actual
    // group itself because of its expense and because developers can simply
    // grab the group via store.getGroups(groupName)
    getFireEventArgs: function(type, view, featureTarget, e) {
        var returnArray = [type, view, featureTarget],
            groupBd     = Ext.fly(featureTarget.nextSibling, '_grouping'),
            groupBdId   = Ext.getDom(groupBd).id,
            prefix      = view.id + '-gp-',
            groupName   = groupBdId.substr(prefix.length);
        
        returnArray.push(groupName, e);
        
        return returnArray;
    }
});
