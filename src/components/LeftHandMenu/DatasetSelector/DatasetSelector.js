import React from 'react'
import RadioSelect2 from '../../Utility/RadioSelect/RadioSelect2'

import { useSelector, useDispatch } from 'react-redux'
import { updateSelectedFeat } from  '../../../redux/selectedFeatReducer'

import './DatasetSelector.css'

function DatasetSelector(props) {
	const dispatch = useDispatch()
	const selectedFeat = useSelector(state => state.selectedFeat)

	// Radio Options to select feature for data display
	const featOptions = { 
		'Poverty Rates': 'poverty_data', 
		'Food Insecurity': 'insecurity_data', 
		'WIC Usage': 'WIC', 
		'Snap Usage': 'snap_data', 
		'Census': 'race_data' }

	const handleSelection = (feature) => {
		// Handle selection in here.
		dispatch(updateSelectedFeat({...selectedFeat, ...{
			selectedfilterFeat: featOptions[feature],
			selectedfilterSubfeat: null,
			featLabel: null
		}}))
	}

	/* Don't load this bar if there are no dataset options */
	return !featOptions ? null : (
		<div className="data-selector">
			<h3 className="data-selector-title">Show data for:</h3>
			<RadioSelect2
				data={Object.keys(featOptions)}
				handleChange={handleSelection}
				alignment={'column'}
			/>
		</div>
	)
}

export default DatasetSelector
