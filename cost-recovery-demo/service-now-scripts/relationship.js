(function refineQuery(current, parent) {

	/*
		The requirement is to select the u_paypal_cost_recovery_volumes records with the same u_change_sys_id as what the 
		change sys_id is.
	*/
	var parentSid = parent.getValue('sys_id');
	current.addQuery('u_change_sys_id', parentSid);

})(current, parent);