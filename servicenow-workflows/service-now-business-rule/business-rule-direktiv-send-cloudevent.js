(function executeRule(current, previous /*null when async*/ ) {
    try {
        var resp = [];
        var gr = new GlideRecord('u_custom_table');
        gr.addQuery('u_change_sys_id', current.getValue('sys_id'));
        gr.query();

        while (gr.next()) {
            var objectToPopulate = {};
            var now_GR = new GlideRecordUtil().getGR(gr.getTableName(), gr.getValue('sys_id'));
            var ignore = {
                "sys_created_on": true,
                "sys_created_by": true,
                "sys_updated_by": true,
                "sys_updated_on": true,
                "sys_mod_count": true,
				"sys_id": true
            };
            new GlideRecordUtil().populateFromGR(objectToPopulate, now_GR, ignore);
            resp.push(objectToPopulate);
        }
		current.setValue('description', JSON.stringify(resp));
        //gs.info(JSON.stringify(resp));

        /*
        	The requirement is to take the items in the u_custom_table that are selected for the change 
        	(via the relationship which obviously needs to be fixed). Example there might be 10 selected and we need to create a JSON
        	string that we parse into the "current.description" part below. This will then send it to Direktiv.
        */

        var sm = new sn_ws.RESTMessageV2('Direktiv-Event-Broadcast', 'POST');
        var currentTime = new Date();

        sm.setRequestBody('{"specversion":"1.0", "id": "' + current.sys_id + '", "source":"' + current.number + '", "type": "com.servicenow.direktiv.change.approved", "subject":"cloud-cost-recovery-change-approved", "time":"' + currentTime.toISOString() + '", "data": ' + current.description + '}');

        var response = sm.execute();
        var responseBody = response.getBody();
        var httpStatus = response.getStatusCode();
    } catch (ex) {
        var message = ex.message;
    }
})(current, previous);